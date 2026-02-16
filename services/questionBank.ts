import { Question } from '../types';

export const QUESTION_BANK: Record<string, Question[]> = {
    'Português': [
        {
            id: 'port-1',
            text: "Assinale a alternativa em que a regência verbal está correta de acordo com a norma-padrão.",
            options: [
                "Prefiro mais estudar do que trabalhar.",
                "O filme que assistimos ontem foi ótimo.",
                "Chegamos em São Paulo logo cedo.",
                "Obedeça aos sinalizadores de trânsito."
            ],
            correctIndex: 3,
            explanation: "O verbo 'obedecer' é transitivo indireto e exige a preposição 'a'. As outras alternativas têm erros: 'preferir' não aceita 'mais...do que'; 'assistir' no sentido de ver exige preposição 'a'; 'chegar' exige preposição 'a'.",
            difficulty: 'Médio' as const
        },
        {
            id: 'port-2',
            text: "Identifique a figura de linguagem na frase: 'O jardim chorava a falta de água'.",
            options: [
                "Metáfora",
                "Prosopopeia",
                "Hipérbole",
                "Metonímia"
            ],
            correctIndex: 1,
            explanation: "A prosopopeia (ou personificação) atribui características humanas a seres inanimados. Jardins não choram literalmente.",
            difficulty: 'Fácil' as const
        },
        {
            id: 'port-3',
            text: "Em 'Vende-se casas', o termo 'casas' exerce a função de:",
            options: [
                "Objeto Direto",
                "Objeto Indireto",
                "Sujeito Paciente",
                "Agente da Passiva"
            ],
            correctIndex: 2,
            explanation: "Na voz passiva sintética (verbo + se), o que seria o objeto direto torna-se o sujeito paciente. O verbo deve concordar com ele: 'Vendem-se casas' seria o correto.",
            difficulty: 'Difícil' as const
        }
    ],
    'Direito Constitucional': [
        {
            id: 'const-1',
            text: "Segundo a Constituição Federal de 1988, é fundamento da República Federativa do Brasil:",
            options: [
                "A erradicação da pobreza",
                "A dignidade da pessoa humana",
                "A garantia do desenvolvimento nacional",
                "A construção de uma sociedade livre"
            ],
            correctIndex: 1,
            explanation: "A dignidade da pessoa humana é um fundamento (art. 1º). Os outros são objetivos fundamentais (art. 3º).",
            difficulty: 'Fácil' as const
        },
        {
            id: 'const-2',
            text: "São privativos de brasileiro nato os cargos de:",
            options: [
                "Presidente da Câmara dos Deputados e Senador",
                "Ministro do STF e Ministro da Justiça",
                "Oficial das Forças Armadas e Ministro de Estado da Defesa",
                "Presidente da República e Governador"
            ],
            correctIndex: 2,
            explanation: "São privativos de nato: Presidente e Vice, Pres. Câmara, Pres. Senado, Min. STF, Carreira Diplomática, Oficial das Forças Armadas e Ministro da Defesa.",
            difficulty: 'Médio' as const
        },
        {
            id: 'const-3',
            text: "O remédio constitucional adequado para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, é:",
            options: [
                "Ação Popular",
                "Mandado de Segurança",
                "Mandado de Injunção",
                "Ação Civil Pública"
            ],
            correctIndex: 1,
            explanation: "Mandado de Segurança é residual, protegendo direito líquido e certo contra ilegalidade ou abuso de poder quando não couber HC ou HD.",
            difficulty: 'Fácil' as const
        }
    ],
    'Direito Administrativo': [
        {
            id: 'adm-1',
            text: "São atributos do ato administrativo, EXCETO:",
            options: [
                "Presunção de legitimidade",
                "Imperatividade",
                "Autoexecutoriedade",
                "Legalidade estrita"
            ],
            correctIndex: 3,
            explanation: "Legalidade é um princípio, não um atributo. Os atributos são Presunção de legitimidade, Autoexecutoriedade, Tipicidade e Imperatividade (PATI).",
            difficulty: 'Médio' as const
        },
        {
            id: 'adm-2',
            text: "A responsabilidade civil do Estado no Brasil é, em regra:",
            options: [
                "Objetiva, na modalidade risco integral",
                "Subjetiva, baseada na culpa",
                "Objetiva, na modalidade risco administrativo",
                "Subjetiva, na modalidade culpa anônima"
            ],
            correctIndex: 2,
            explanation: "A regra é a responsabilidade objetiva baseada na teoria do risco administrativo, que admite excludentes (caso fortuito, força maior, culpa exclusiva da vítima).",
            difficulty: 'Difícil' as const
        }
    ],
    'Direito Penal': [
        {
            id: 'penal-1',
            text: "Não há crime sem lei anterior que o defina. Este é o princípio da:",
            options: [
                "Insignificância",
                "Legalidade",
                "Humanidade",
                "Culpabilidade"
            ],
            correctIndex: 1,
            explanation: "O princípio da legalidade (ou reserva legal) estabelece que não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.",
            difficulty: 'Fácil' as const
        },
        {
            id: 'penal-2',
            text: "Considera-se em estado de necessidade quem pratica o fato para salvar de perigo atual:",
            options: [
                "Que não provocou por sua vontade, nem podia de outro modo evitar.",
                "Ainda que tenha o dever legal de enfrentar o perigo.",
                "Que provocou dolosamente.",
                "Futuro e incerto."
            ],
            correctIndex: 0,
            explanation: "Art. 24 do CP. Não pode alegar estado de necessidade quem tinha o dever legal de enfrentar o perigo.",
            difficulty: 'Médio' as const
        }
    ],
    'Informática': [
        {
            id: 'info-1',
            text: "Qual atalho de teclado é geralmente usado para bloquear a tela no Windows?",
            options: [
                "Ctrl + L",
                "Alt + F4",
                "Windows + L",
                "Shift + Delete"
            ],
            correctIndex: 2,
            explanation: "A tecla Windows + L bloqueia (Lock) a estação de trabalho imediatamente.",
            difficulty: 'Fácil' as const
        },
        {
            id: 'info-2',
            text: "Protocolo utilizado para envio de e-mails:",
            options: [
                "POP3",
                "IMAP",
                "SMTP",
                "FTP"
            ],
            correctIndex: 2,
            explanation: "SMTP (Simple Mail Transfer Protocol) é usado para ENVIAR e-mails. POP3 e IMAP são para RECEBIMENTO.",
            difficulty: 'Médio' as const
        },
        {
            id: 'info-3',
            text: "Sobre Ransomware, é correto afirmar:",
            options: [
                "É um software que espiona o usuário.",
                "É um tipo de malware que sequestra dados e cobra resgate.",
                "É um vírus que danifica o hardware fisicamente.",
                "É um programa de proteção contra invasões."
            ],
            correctIndex: 1,
            explanation: "Ransomware criptografa os arquivos da vítima e exige pagamento (resgate) para liberar a chave de descriptografia.",
            difficulty: 'Fácil' as const
        }
    ],
    'Matemática': [
        {
            id: 'mat-1',
            text: "Se 3 gatos comem 3 ratos em 3 minutos, quanto tempo 100 gatos levam para comer 100 ratos?",
            options: [
                "100 minutos",
                "3 minutos",
                "30 minutos",
                "1 minuto"
            ],
            correctIndex: 1,
            explanation: "Se cada gato leva 3 minutos para comer 1 rato, 100 gatos comendo simultaneamente 100 ratos (1 para cada) levarão os mesmos 3 minutos.",
            difficulty: 'Médio' as const
        },
        {
            id: 'mat-2',
            text: "Qual o próximo número da sequência: 2, 6, 12, 20, 30, ...?",
            options: [
                "40",
                "42",
                "38",
                "36"
            ],
            correctIndex: 1,
            explanation: "A diferença entre os termos aumenta de 2 em 2: 4, 6, 8, 10. A próxima diferença será 12. 30 + 12 = 42.",
            difficulty: 'Médio' as const
        }
    ],
    'RLM': [
        {
            id: 'rlm-1',
            text: "Se todo A é B e nenhum B é C, então:",
            options: [
                "Algum A é C",
                "Todo A é C",
                "Nenhum A é C",
                "Algum C é A"
            ],
            correctIndex: 2,
            explanation: "Se todo A está dentro de B e B não tem intersecção com C, então A também não pode ter intersecção com C.",
            difficulty: 'Fácil' as const
        },
        {
            id: 'rlm-2',
            text: "A negação de 'Todo político é honesto' é:",
            options: [
                "Nenhum político é honesto",
                "Algum político não é honesto",
                "Todo político é desonesto",
                "Algum político é honesto"
            ],
            correctIndex: 1,
            explanation: "Para negar 'Todo A é B' (universal afirmativa), basta provar que existe 'pelo menos um A que não é B' (particular negativa).",
            difficulty: 'Difícil' as const
        }
    ],
    'Arquivologia': [
        {
            id: 'arq-1',
            text: "Princípio segundo o qual os arquivos devem manter o arranjo dado pela entidade produtora:",
            options: [
                "Proveniência",
                "Organicidade",
                "Respeito aos Fundos",
                "Ordem Original"
            ],
            correctIndex: 3,
            explanation: "O Princípio da Ordem Original determina que se deve conservar o arranjo (ordenação intena) estabelecido pela entidade produtora.",
            difficulty: 'Difícil' as const
        }
    ],
    'Direito Processual Penal': [
        {
            id: 'proc-penal-1',
            text: "O inquérito policial tem natureza:",
            options: [
                "Judicial e acusatória",
                "Administrativa e inquisitiva",
                "Judicial e contraditória",
                "Administrativa e acusatória"
            ],
            correctIndex: 1,
            explanation: "O IP é um procedimento administrativo (não é processo judicial) e inquisitivo (não há contraditório pleno nesta fase).",
            difficulty: 'Médio' as const
        }
    ]
};
