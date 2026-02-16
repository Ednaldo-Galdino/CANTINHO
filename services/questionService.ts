import { QUESTION_BANK } from './questionBank';
import { Question } from '../types';
import * as supabaseService from './supabaseService';

export const getQuestions = async (subject: string, amount: number, difficulty: string): Promise<Question[]> => {
    try {
        // Tentar buscar do Supabase primeiro
        const supabaseQuestions = await supabaseService.getQuestions(subject as any, amount, difficulty as any);

        if (supabaseQuestions && supabaseQuestions.length > 0) {
            return supabaseQuestions;
        }

        // Fallback para banco local se Supabase não tiver questões
        console.log('Usando banco local como fallback');
        return getQuestionsFromLocalBank(subject, amount, difficulty);
    } catch (error) {
        // Se houver erro no Supabase, usa banco local
        console.error('Erro ao buscar do Supabase, usando banco local:', error);
        return getQuestionsFromLocalBank(subject, amount, difficulty);
    }
};

// Função auxiliar para buscar do banco local
const getQuestionsFromLocalBank = (subject: string, amount: number, difficulty: string): Question[] => {
    const subjectQuestions = QUESTION_BANK[subject] || [];

    if (subjectQuestions.length === 0) {
        return [];
    }

    // Filtrar por dificuldade
    let filtered = subjectQuestions.filter(q => q.difficulty === difficulty);

    // Se não tiver questões da dificuldade, usa todas
    if (filtered.length === 0) {
        filtered = [...subjectQuestions];
    }

    // Embaralhar
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // Retornar apenas questões únicas (sem repetição)
    return shuffled.slice(0, Math.min(amount, shuffled.length));
};

export const breakDownGoal = async (title: string, description: string): Promise<any> => {
    // Mock simplificado para metas
    return {
        steps: [
            "Defina um horário fixo de estudo.",
            "Reúna material de qualidade (PDFs, videoaulas).",
            "Faça exercícios diários.",
            "Revise o conteúdo semanalmente."
        ],
        motivation: "A constância é a chave para a aprovação. Continue firme!"
    };
};
