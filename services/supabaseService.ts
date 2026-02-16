
import { createClient } from '@supabase/supabase-js';
import { Question, Subject, Difficulty } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase credentials not found in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface StoredQuestion {
    id: string;
    subject: string;
    difficulty: string;
    text: string;
    options: string[];
    correct_index: number;
    explanation: string;
    created_at: string;
    updated_at: string;
    is_active: boolean;
}

export interface SyncMetadata {
    id: string;
    subject: string;
    last_sync: string;
    questions_count: number;
    next_sync: string | null;
}

// Buscar questões do banco
export const getQuestions = async (
    subject: Subject,
    difficulty: Difficulty,
    amount: number
): Promise<Question[]> => {
    const { data, error } = await supabase
        .from('questions')
        .select('*')
        .eq('subject', subject)
        .eq('difficulty', difficulty)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(amount);

    if (error) {
        console.error('Error fetching questions:', error);
        throw error;
    }

    // Embaralhar questões para variedade
    const shuffled = (data || []).sort(() => Math.random() - 0.5);

    return shuffled.map(q => ({
        id: q.id,
        text: q.text,
        options: q.options,
        correctIndex: q.correct_index,
        explanation: q.explanation,
        difficulty: difficulty,
        subject: subject
    }));
};

// Salvar questões no banco
export const saveQuestions = async (
    subject: Subject,
    difficulty: Difficulty,
    questions: Question[]
): Promise<void> => {
    const questionsToInsert = questions.map(q => ({
        subject,
        difficulty,
        text: q.text,
        options: q.options,
        correct_index: q.correctIndex,
        explanation: q.explanation,
        is_active: true
    }));

    const { error } = await supabase
        .from('questions')
        .insert(questionsToInsert);

    if (error) {
        console.error('Error saving questions:', error);
        throw error;
    }
};

// Contar questões disponíveis
export const countQuestions = async (
    subject: Subject,
    difficulty: Difficulty
): Promise<number> => {
    const { count, error } = await supabase
        .from('questions')
        .select('*', { count: 'exact', head: true })
        .eq('subject', subject)
        .eq('difficulty', difficulty)
        .eq('is_active', true);

    if (error) {
        console.error('Error counting questions:', error);
        return 0;
    }

    return count || 0;
};

// Obter metadados de sincronização
export const getSyncMetadata = async (subject: Subject): Promise<SyncMetadata | null> => {
    const { data, error } = await supabase
        .from('sync_metadata')
        .select('*')
        .eq('subject', subject)
        .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = not found
        console.error('Error fetching sync metadata:', error);
        return null;
    }

    return data;
};

// Atualizar metadados de sincronização
export const updateSyncMetadata = async (
    subject: Subject,
    questionsCount: number
): Promise<void> => {
    const now = new Date().toISOString();
    const nextSync = new Date(Date.now() + 3600000).toISOString(); // +1 hora

    const { error } = await supabase
        .from('sync_metadata')
        .upsert({
            subject,
            last_sync: now,
            questions_count: questionsCount,
            next_sync: nextSync
        }, {
            onConflict: 'subject'
        });

    if (error) {
        console.error('Error updating sync metadata:', error);
        throw error;
    }
};

// Verificar se precisa sincronizar
export const shouldSync = async (subject: Subject): Promise<boolean> => {
    const metadata = await getSyncMetadata(subject);

    if (!metadata) return true; // Nunca sincronizou

    const nextSync = new Date(metadata.next_sync || 0);
    const now = new Date();

    return now >= nextSync;
};

// Desativar questões antigas (opcional - manter histórico)
export const deactivateOldQuestions = async (
    subject: Subject,
    difficulty: Difficulty,
    keepCount: number = 100
): Promise<void> => {
    // Buscar IDs das questões mais recentes para manter
    const { data: recentQuestions } = await supabase
        .from('questions')
        .select('id')
        .eq('subject', subject)
        .eq('difficulty', difficulty)
        .order('created_at', { ascending: false })
        .limit(keepCount);

    if (!recentQuestions || recentQuestions.length === 0) return;

    const idsToKeep = recentQuestions.map(q => q.id);

    // Desativar questões antigas
    const { error } = await supabase
        .from('questions')
        .update({ is_active: false })
        .eq('subject', subject)
        .eq('difficulty', difficulty)
        .not('id', 'in', `(${idsToKeep.join(',')})`);

    if (error) {
        console.error('Error deactivating old questions:', error);
    }
};
