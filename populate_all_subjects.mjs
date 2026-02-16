// Script para popular Supabase com 100 questões por matéria (900 total)
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ctulrqzeiulzjnzbtwfk.supabase.co';
const supabaseKey = 'sb_publishable_gsF2PaqLv5RmorIAa6iLag_BF4Io3xr';
const supabase = createClient(supabaseUrl, supabaseKey);

// Gerador de questões por matéria
const questionTemplates = {
    'Português': {
        topics: ['Ortografia', 'Concordância', 'Regência', 'Crase', 'Pontuação', 'Interpretação', 'Figuras de Linguagem', 'Sintaxe', 'Morfologia', 'Semântica'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    },
    'Direito Constitucional': {
        topics: ['Princípios Fundamentais', 'Direitos Fundamentais', 'Organização do Estado', 'Poderes', 'Controle de Constitucionalidade', 'Defesa do Estado', 'Ordem Social', 'Ordem Econômica', 'Emendas Constitucionais', 'ADCT'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    },
    'Direito Administrativo': {
        topics: ['Princípios', 'Atos Administrativos', 'Licitações', 'Contratos', 'Servidores Públicos', 'Responsabilidade Civil', 'Poderes Administrativos', 'Serviços Públicos', 'Bens Públicos', 'Intervenção do Estado'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    },
    'Direito Penal': {
        topics: ['Princípios', 'Crime', 'Penas', 'Concurso de Crimes', 'Crimes contra a Pessoa', 'Crimes contra o Patrimônio', 'Crimes contra a Administração', 'Extinção da Punibilidade', 'Prescrição', 'Lei Penal'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    },
    'Informática': {
        topics: ['Hardware', 'Software', 'Redes', 'Segurança', 'Internet', 'Windows', 'Linux', 'Office', 'Banco de Dados', 'Programação'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    },
    'Matemática': {
        topics: ['Aritmética', 'Álgebra', 'Geometria', 'Porcentagem', 'Razão e Proporção', 'Regra de Três', 'Equações', 'Probabilidade', 'Estatística', 'Matemática Financeira'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    },
    'RLM': {
        topics: ['Sequências', 'Lógica Proposicional', 'Diagramas', 'Verdades e Mentiras', 'Associações', 'Orientação Espacial', 'Calendários', 'Relógios', 'Problemas Lógicos', 'Argumentação'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    },
    'Arquivologia': {
        topics: ['Conceitos Básicos', 'Classificação', 'Avaliação', 'Preservação', 'Gestão Documental', 'Protocolo', 'Arquivos Correntes', 'Arquivos Permanentes', 'Legislação', 'Digitalização'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    },
    'Direito Processual Penal': {
        topics: ['Princípios', 'Inquérito Policial', 'Ação Penal', 'Competência', 'Provas', 'Prisões', 'Recursos', 'Procedimentos', 'Júri', 'Execução Penal'],
        difficulties: ['Fácil', 'Médio', 'Difícil']
    }
};

// Função para gerar questão baseada em template
function generateQuestion(subject, topic, difficulty, index) {
    const questionNumber = index + 1;

    // Randomizar posição da resposta correta (0-3)
    const correctIndex = Math.floor(Math.random() * 4);

    // Criar opções com a correta na posição randomizada
    const options = [
        `Alternativa A sobre ${topic}`,
        `Alternativa B sobre ${topic}`,
        `Alternativa C sobre ${topic}`,
        `Alternativa D sobre ${topic}`
    ];

    // Marcar qual é a correta
    const correctLetter = String.fromCharCode(65 + correctIndex); // A=65, B=66, C=67, D=68
    options[correctIndex] = `Alternativa ${correctLetter} sobre ${topic} (CORRETA)`;

    return {
        subject,
        difficulty,
        text: `[${subject} - ${topic}] Questão ${questionNumber}: Assinale a alternativa correta sobre ${topic.toLowerCase()}.`,
        options,
        correct_index: correctIndex,
        explanation: `A alternativa ${correctLetter} está correta porque apresenta o conceito adequado de ${topic.toLowerCase()} conforme a doutrina e jurisprudência majoritárias. As demais alternativas apresentam conceitos incorretos ou incompletos sobre o tema.`
    };
}

// Função principal
async function populateAllSubjects() {
    console.log('🚀 Iniciando população de 900 questões...\n');

    let totalInserted = 0;

    for (const [subject, config] of Object.entries(questionTemplates)) {
        console.log(`📚 Processando ${subject}...`);

        const questions = [];
        const questionsPerDifficulty = Math.floor(100 / 3); // ~33 por dificuldade

        for (const difficulty of config.difficulties) {
            const questionsForDifficulty = difficulty === 'Difícil' ? 34 : questionsPerDifficulty;

            for (let i = 0; i < questionsForDifficulty; i++) {
                const topicIndex = i % config.topics.length;
                const topic = config.topics[topicIndex];
                const globalIndex = questions.length;

                questions.push(generateQuestion(subject, topic, difficulty, globalIndex));
            }
        }

        // Inserir em lotes de 50 para evitar timeout
        const batchSize = 50;
        for (let i = 0; i < questions.length; i += batchSize) {
            const batch = questions.slice(i, i + batchSize);

            const { data, error } = await supabase
                .from('questions')
                .insert(batch);

            if (error) {
                console.error(`   ❌ Erro no lote ${i / batchSize + 1}:`, error.message);
                continue;
            }

            totalInserted += batch.length;
            console.log(`   ✅ Lote ${i / batchSize + 1}: ${batch.length} questões inseridas`);
        }

        console.log(`   ✅ ${subject}: 100 questões inseridas\n`);
    }

    console.log(`\n🎉 Concluído! Total de ${totalInserted} questões inseridas.`);
    console.log('\n📊 Resumo por matéria:');

    // Verificar contagem final
    const { data: counts } = await supabase
        .from('questions')
        .select('subject, difficulty')
        .eq('is_active', true);

    if (counts) {
        const summary = {};
        counts.forEach(q => {
            if (!summary[q.subject]) summary[q.subject] = 0;
            summary[q.subject]++;
        });

        Object.entries(summary).forEach(([subject, count]) => {
            console.log(`   ${subject}: ${count} questões`);
        });
    }
}

// Executar
populateAllSubjects().catch(console.error);
