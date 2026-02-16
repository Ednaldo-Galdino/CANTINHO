
import { Subject, Difficulty, Question, SUBJECTS } from '../types';
import * as gemini from './geminiService';
import * as supabase from './supabaseService';

const QUESTIONS_PER_SYNC = 50; // Gerar 50 questões por matéria/dificuldade
const SYNC_INTERVAL_HOURS = 1;

export interface SyncStatus {
    subject: Subject;
    isSyncing: boolean;
    lastSync: Date | null;
    nextSync: Date | null;
    questionsCount: number;
    error?: string;
}

// Estado de sincronização
const syncStatusMap = new Map<Subject, SyncStatus>();

// Inicializar status de sincronização
export const initializeSyncStatus = async (): Promise<void> => {
    for (const subject of SUBJECTS) {
        const metadata = await supabase.getSyncMetadata(subject);
        syncStatusMap.set(subject, {
            subject,
            isSyncing: false,
            lastSync: metadata ? new Date(metadata.last_sync) : null,
            nextSync: metadata?.next_sync ? new Date(metadata.next_sync) : null,
            questionsCount: metadata?.questions_count || 0
        });
    }
};

// Obter status de sincronização
export const getSyncStatus = (subject: Subject): SyncStatus | undefined => {
    return syncStatusMap.get(subject);
};

// Obter todos os status
export const getAllSyncStatus = (): Record<Subject, SyncStatus> => {
    const result: any = {};
    SUBJECTS.forEach(subject => {
        const status = syncStatusMap.get(subject);
        if (status) result[subject] = status;
    });
    return result;
};

// Sincronizar questões de uma matéria específica
export const syncQuestionsForSubject = async (
    subject: Subject,
    difficulty: Difficulty = 'Médio',
    onProgress?: (message: string) => void
): Promise<void> => {
    const status = syncStatusMap.get(subject);
    if (status?.isSyncing) {
        console.log(`Sync already in progress for ${subject}`);
        return;
    }

    // Atualizar status
    syncStatusMap.set(subject, {
        ...status!,
        isSyncing: true,
        error: undefined
    });

    try {
        onProgress?.(`Gerando questões de ${subject}...`);

        // Gerar questões usando a IA
        const questions = await gemini.generateQuestions(
            subject,
            QUESTIONS_PER_SYNC,
            difficulty
        );

        onProgress?.(`Salvando ${questions.length} questões no banco...`);

        // Salvar no Supabase
        await supabase.saveQuestions(subject, difficulty, questions);

        // Contar total de questões
        const totalCount = await supabase.countQuestions(subject, difficulty);

        // Atualizar metadados
        await supabase.updateSyncMetadata(subject, totalCount);

        // Atualizar status local
        const now = new Date();
        const nextSync = new Date(now.getTime() + SYNC_INTERVAL_HOURS * 3600000);

        syncStatusMap.set(subject, {
            subject,
            isSyncing: false,
            lastSync: now,
            nextSync,
            questionsCount: totalCount
        });

        onProgress?.(`Sincronização concluída! ${totalCount} questões disponíveis.`);

    } catch (error: any) {
        console.error(`Error syncing ${subject}:`, error);

        syncStatusMap.set(subject, {
            ...status!,
            isSyncing: false,
            error: error.message || 'Erro desconhecido'
        });

        throw error;
    }
};

// Sincronizar todas as matérias
export const syncAllSubjects = async (
    onProgress?: (subject: Subject, message: string) => void
): Promise<void> => {
    console.log('Starting sync for all subjects...');

    for (const subject of SUBJECTS) {
        try {
            // Verificar se precisa sincronizar
            const needsSync = await supabase.shouldSync(subject);

            if (needsSync) {
                await syncQuestionsForSubject(
                    subject,
                    'Médio',
                    (msg) => onProgress?.(subject, msg)
                );

                // Aguardar 2 segundos entre matérias para não sobrecarregar a API
                await new Promise(resolve => setTimeout(resolve, 2000));
            } else {
                console.log(`${subject} doesn't need sync yet`);
            }
        } catch (error) {
            console.error(`Failed to sync ${subject}:`, error);
            // Continuar com as próximas matérias mesmo se uma falhar
        }
    }

    console.log('Sync completed for all subjects');
};

// Verificar se há questões suficientes
export const hasEnoughQuestions = async (
    subject: Subject,
    difficulty: Difficulty,
    required: number
): Promise<boolean> => {
    const count = await supabase.countQuestions(subject, difficulty);
    return count >= required;
};

// Obter questões (do cache ou gerar novas)
export const getOrGenerateQuestions = async (
    subject: Subject,
    difficulty: Difficulty,
    amount: number,
    onProgress?: (message: string) => void
): Promise<Question[]> => {
    try {
        // Tentar buscar do banco primeiro
        const hasEnough = await hasEnoughQuestions(subject, difficulty, amount);

        if (hasEnough) {
            onProgress?.('Carregando questões do banco de dados...');
            const questions = await supabase.getQuestions(subject, difficulty, amount);

            if (questions.length >= amount) {
                return questions;
            }
        }

        // Se não houver questões suficientes, gerar novas
        onProgress?.(`Gerando ${amount} questões novas com IA...`);
        const questions = await gemini.generateQuestions(subject, amount, difficulty);

        // Salvar para uso futuro
        onProgress?.('Salvando questões no banco...');
        await supabase.saveQuestions(subject, difficulty, questions);

        // Atualizar metadados
        const totalCount = await supabase.countQuestions(subject, difficulty);
        await supabase.updateSyncMetadata(subject, totalCount);

        return questions;

    } catch (error) {
        console.error('Error getting/generating questions:', error);
        throw error;
    }
};
