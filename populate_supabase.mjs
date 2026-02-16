// Script para executar migração e popular banco de questões no Supabase
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Credenciais do Supabase
const supabaseUrl = 'https://ctulrqzeiulzjnzbtwfk.supabase.co';
const supabaseKey = 'sb_publishable_gsF2PaqLv5RmorIAa6iLag_BF4Io3xr';

const supabase = createClient(supabaseUrl, supabaseKey);

async function runMigration() {
    console.log('🚀 Iniciando migração do Supabase...\n');

    try {
        // Passo 1: Criar tabela (via SQL direto não funciona com anon key)
        // Então vamos apenas inserir as questões
        console.log('📝 Inserindo questões de Português...');

        const questions = [
            // Português - Fácil (10)
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Identifique a figura de linguagem na frase: "O jardim chorava a falta de água".',
                options: ["Metáfora", "Prosopopeia", "Hipérbole", "Metonímia"],
                correct_index: 1,
                explanation: 'A prosopopeia (ou personificação) atribui características humanas a seres inanimados. Jardins não choram literalmente.'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Qual é o plural correto de "cidadão"?',
                options: ["cidadões", "cidadãos", "cidadães", "cidadans"],
                correct_index: 1,
                explanation: 'O plural de palavras terminadas em -ão pode ser -ões, -ães ou -ãos. No caso de cidadão, o correto é cidadãos.'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Assinale a alternativa com erro de concordância nominal.',
                options: ["Os alunos estão meio cansados.", "É proibido entrada de menores.", "Seguem anexas as certidões.", "Ela mesma fez o trabalho."],
                correct_index: 1,
                explanation: 'O correto seria "É proibida a entrada" ou "É proibido entrada" (sem artigo). Com artigo definido, o adjetivo deve concordar.'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Qual palavra está corretamente acentuada?',
                options: ["juíz", "raíz", "país", "baú"],
                correct_index: 2,
                explanation: 'País está corretamente acentuado. Juiz e raiz não têm acento.'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Identifique o sujeito em: "Chegaram os convidados".',
                options: ["Chegaram", "os convidados", "convidados", "Oração sem sujeito"],
                correct_index: 1,
                explanation: 'O sujeito é "os convidados". O verbo "chegaram" concorda com ele.'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Qual frase está na voz passiva?',
                options: ["João comprou o carro.", "O carro foi comprado por João.", "João está comprando o carro.", "João comprará o carro."],
                correct_index: 1,
                explanation: 'A voz passiva é formada por verbo ser + particípio. "O carro foi comprado" é voz passiva analítica.'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Assinale a alternativa com erro de ortografia.',
                options: ["exceção", "excessão", "exceto", "exceder"],
                correct_index: 1,
                explanation: 'O correto é "exceção" (com ç), não "excessão".'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Qual é o feminino de "réu"?',
                options: ["réa", "ré", "reia", "reua"],
                correct_index: 1,
                explanation: 'O feminino de réu é ré.'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Identifique o pronome possessivo.',
                options: ["meu", "que", "ele", "onde"],
                correct_index: 0,
                explanation: '"Meu" é pronome possessivo (indica posse). Os outros são: relativo, pessoal e advérbio.'
            },
            {
                subject: 'Português',
                difficulty: 'Fácil',
                text: 'Qual frase usa corretamente a crase?',
                options: ["Vou a escola.", "Vou à escola.", "Vou a pé.", "Vou a casa."],
                correct_index: 1,
                explanation: '"À escola" = a (preposição) + a (artigo). Antes de palavra feminina determinada pelo artigo, usa-se crase.'
            },
            // Português - Médio (10)
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Assinale a alternativa em que a regência verbal está correta de acordo com a norma-padrão.',
                options: ["Prefiro mais estudar do que trabalhar.", "O filme que assistimos ontem foi ótimo.", "Chegamos em São Paulo logo cedo.", "Obedeça aos sinalizadores de trânsito."],
                correct_index: 3,
                explanation: 'O verbo "obedecer" é transitivo indireto e exige a preposição "a". As outras alternativas têm erros.'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Qual oração é subordinada adverbial concessiva?',
                options: ["Embora chovesse, saímos.", "Quando chover, ficarei em casa.", "Se estudar, passará.", "Como estava cansado, dormiu."],
                correct_index: 0,
                explanation: 'Oração concessiva indica concessão, contraste. "Embora" é conjunção concessiva.'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Identifique a função sintática de "aos alunos" em: "O professor entregou as provas aos alunos".',
                options: ["Objeto direto", "Objeto indireto", "Complemento nominal", "Adjunto adverbial"],
                correct_index: 1,
                explanation: '"Aos alunos" é objeto indireto do verbo "entregar".'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Assinale a alternativa com uso correto do pronome oblíquo.',
                options: ["Vou lhe encontrar amanhã.", "Quero lhe ver feliz.", "Vou encontrá-lo amanhã.", "Quero lhe abraçar."],
                correct_index: 2,
                explanation: 'O pronome "lhe" é usado para objeto indireto. "Encontrar" é transitivo direto, exigindo "o/a".'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Qual frase apresenta ambiguidade?',
                options: ["O professor viu o aluno com o binóculo.", "João comprou um carro novo.", "Maria estuda todos os dias.", "Pedro viajou ontem."],
                correct_index: 0,
                explanation: 'Ambiguidade: quem estava com o binóculo? O professor ou o aluno?'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Identifique o tipo de predicado em: "O aluno permaneceu calado".',
                options: ["Verbal", "Nominal", "Verbo-nominal", "Sem predicado"],
                correct_index: 1,
                explanation: 'Predicado nominal tem verbo de ligação (permanecer) + predicativo do sujeito (calado).'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Qual palavra é formada por derivação parassintética?',
                options: ["infeliz", "anoitecer", "pedreiro", "livraria"],
                correct_index: 1,
                explanation: 'Parassíntese = prefixo + radical + sufixo simultaneamente. "Anoitecer" = a + noite + cer.'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Assinale a alternativa com uso correto de "onde".',
                options: ["A situação onde nos encontramos é difícil.", "A cidade onde nasci é pequena.", "O momento onde tudo mudou.", "A razão onde ele saiu."],
                correct_index: 1,
                explanation: '"Onde" indica lugar físico. Apenas "A cidade onde nasci" está correto.'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Qual é o processo de formação da palavra "planalto"?',
                options: ["Derivação", "Composição", "Hibridismo", "Onomatopeia"],
                correct_index: 1,
                explanation: 'Composição por justaposição: plano + alto = planalto.'
            },
            {
                subject: 'Português',
                difficulty: 'Médio',
                text: 'Identifique a oração sem sujeito.',
                options: ["Choveu muito ontem.", "Os alunos estudaram.", "Chegaram as encomendas.", "Faz-se necessário estudar."],
                correct_index: 0,
                explanation: 'Verbos que indicam fenômenos da natureza são impessoais = oração sem sujeito.'
            },
            // Português - Difícil (10)
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Em "Vende-se casas", o termo "casas" exerce a função de:',
                options: ["Objeto Direto", "Objeto Indireto", "Sujeito Paciente", "Agente da Passiva"],
                correct_index: 2,
                explanation: 'Na voz passiva sintética (verbo + se), o que seria o objeto direto torna-se o sujeito paciente. O verbo deve concordar: "Vendem-se casas".'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Assinale a alternativa em que o pronome relativo pode ser substituído por "cujo".',
                options: ["O livro que comprei é ótimo.", "A casa que moro é antiga.", "O autor que li o livro é famoso.", "A caneta que a tinta acabou é azul."],
                correct_index: 3,
                explanation: '"Cujo" indica posse. "A caneta cuja tinta acabou" = a tinta da caneta.'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Qual figura de linguagem está presente em: "Li Machado de Assis ontem"?',
                options: ["Metáfora", "Metonímia", "Catacrese", "Sinestesia"],
                correct_index: 1,
                explanation: 'Metonímia: autor pela obra. "Li Machado de Assis" = li a obra de Machado de Assis.'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Identifique a oração subordinada substantiva subjetiva.',
                options: ["É necessário que você estude.", "Espero que você venha.", "Tenho certeza de que passarei.", "Disse que viria."],
                correct_index: 0,
                explanation: 'Subjetiva funciona como sujeito da oração principal. "Que você estude" é sujeito de "é necessário".'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Qual frase apresenta silepse de gênero?',
                options: ["Vossa Majestade está preocupado.", "Os brasileiros somos otimistas.", "São Paulo está fria.", "A gente fomos ao cinema."],
                correct_index: 0,
                explanation: '"Vossa Majestade" (feminino) com "preocupado" (masculino). Concordância com a ideia, não com a forma.'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Assinale a alternativa com uso correto do infinitivo.',
                options: ["Ao chegarmos, a festa já havia acabado.", "Ao chegar, a festa já havia acabado.", "Para eu sair, preciso terminar.", "Para mim sair, preciso terminar."],
                correct_index: 0,
                explanation: 'Infinitivo flexionado quando há sujeito expresso diferente do da oração principal.'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Qual é a classificação do "se" em: "Precisa-se de funcionários"?',
                options: ["Partícula apassivadora", "Índice de indeterminação do sujeito", "Pronome reflexivo", "Conjunção condicional"],
                correct_index: 1,
                explanation: 'Com VTI + se = índice de indeterminação. "Precisa-se de funcionários" = alguém precisa.'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Identifique a função do "que" em: "Que dia lindo!"',
                options: ["Pronome relativo", "Conjunção integrante", "Pronome indefinido", "Palavra expletiva"],
                correct_index: 2,
                explanation: '"Que" como pronome indefinido/adjetivo = qual, quanto.'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Qual frase apresenta pleonasmo vicioso?',
                options: ["Subir para cima é redundante.", "Vi com meus próprios olhos.", "Entrar para dentro da sala.", "A mim me parece correto."],
                correct_index: 3,
                explanation: '"A mim me" é pleonasmo vicioso (redundância desnecessária).'
            },
            {
                subject: 'Português',
                difficulty: 'Difícil',
                text: 'Assinale a alternativa com uso correto de "mal" ou "mau".',
                options: ["Ele é um mau aluno.", "Ele passou mau ontem.", "Fez um mau negócio.", "Todas corretas."],
                correct_index: 3,
                explanation: 'Todas estão corretas: "mau" = adjetivo; "mal" = advérbio ou substantivo.'
            }
        ];

        // Inserir questões
        const { data, error } = await supabase
            .from('questions')
            .insert(questions);

        if (error) {
            console.error('❌ Erro ao inserir questões:', error.message);
            console.error('Detalhes:', error);

            if (error.message.includes('relation "questions" does not exist')) {
                console.log('\n⚠️  A tabela "questions" não existe ainda!');
                console.log('📋 Você precisa executar o arquivo supabase_migration.sql manualmente no SQL Editor do Supabase.');
                console.log('   Acesse: https://supabase.com/dashboard/project/ctulrqzeiulzjnzbtwfk/editor');
            }

            return;
        }

        console.log('✅ 30 questões de Português inseridas com sucesso!');
        console.log('\n📊 Resumo:');
        console.log('   - 10 questões Fácil');
        console.log('   - 10 questões Médio');
        console.log('   - 10 questões Difícil');
        console.log('\n🎉 Migração concluída! Agora você pode testar o app.');

    } catch (error) {
        console.error('❌ Erro durante a migração:', error);
    }
}

// Executar
runMigration();
