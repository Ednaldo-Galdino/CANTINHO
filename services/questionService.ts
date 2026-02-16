import { QUESTION_BANK } from './questionBank';
import { Question } from '../types';

export const getQuestions = async (subject: string, amount: number, difficulty: string): Promise<Question[]> => {
    // Simular um pequeno delay para parecer processamento, se quiser, ou retornar instantâneo
    // await new Promise(resolve => setTimeout(resolve, 500)); 

    const subjectQuestions = QUESTION_BANK[subject] || [];

    if (subjectQuestions.length === 0) {
        // Fallback caso não tenha questões da matéria (não deve acontecer se o banco estiver completo)
        return [];
    }

    // Filtrar por dificuldade se tiver dados suficientes, senão retorna misturado para não ficar vazio
    let filtered = subjectQuestions.filter(q => q.difficulty === difficulty);

    // Se não tiver questões suficientes da dificuldade, completa com outras
    if (filtered.length < amount) {
        const others = subjectQuestions.filter(q => q.difficulty !== difficulty);
        filtered = [...filtered, ...others];
    }

    // Embaralhar
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // Retornar a quantidade pedida (ou o máximo que tiver)
    return shuffled.slice(0, amount);
};

export const breakDownGoal = async (title: string, description: string): Promise<any> => {
    // Mock simplificado para metas, já que removemos a IA
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
