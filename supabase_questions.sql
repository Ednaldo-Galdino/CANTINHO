-- Popular tabela de questões - ARQUIVO COMPLETO
-- Total: 270 questões (30 por matéria x 9 matérias)
-- Distribuição: 10 Fácil, 10 Médio, 10 Difícil por matéria

-- ============================================
-- PORTUGUÊS (30 questões)
-- ============================================

-- Português - Fácil (10)
INSERT INTO questions (subject, difficulty, text, options, correct_index, explanation) VALUES
('Português', 'Fácil', 'Identifique a figura de linguagem na frase: ''O jardim chorava a falta de água''.', '["Metáfora", "Prosopopeia", "Hipérbole", "Metonímia"]', 1, 'A prosopopeia (ou personificação) atribui características humanas a seres inanimados. Jardins não choram literalmente.'),
('Português', 'Fácil', 'Qual é o plural correto de ''cidadão''?', '["cidadões", "cidadãos", "cidadães", "cidadans"]', 1, 'O plural de palavras terminadas em -ão pode ser -ões, -ães ou -ãos. No caso de cidadão, o correto é cidadãos.'),
('Português', 'Fácil', 'Assinale a alternativa com erro de concordância nominal.', '["Os alunos estão meio cansados.", "É proibido entrada de menores.", "Seguem anexas as certidões.", "Ela mesma fez o trabalho."]', 1, 'O correto seria ''É proibida a entrada'' ou ''É proibido entrada'' (sem artigo). Com artigo definido, o adjetivo deve concordar.'),
('Português', 'Fácil', 'Qual palavra está corretamente acentuada?', '["juíz", "raíz", "país", "baú"]', 2, 'País está corretamente acentuado. Juiz e raiz não têm acento.'),
('Português', 'Fácil', 'Identifique o sujeito em: ''Chegaram os convidados''.', '["Chegaram", "os convidados", "convidados", "Oração sem sujeito"]', 1, 'O sujeito é ''os convidados''. O verbo ''chegaram'' concorda com ele.'),
('Português', 'Fácil', 'Qual frase está na voz passiva?', '["João comprou o carro.", "O carro foi comprado por João.", "João está comprando o carro.", "João comprará o carro."]', 1, 'A voz passiva é formada por verbo ser + particípio. ''O carro foi comprado'' é voz passiva analítica.'),
('Português', 'Fácil', 'Assinale a alternativa com erro de ortografia.', '["exceção", "excessão", "exceto", "exceder"]', 1, 'O correto é ''exceção'' (com ç), não ''excessão''.'),
('Português', 'Fácil', 'Qual é o feminino de ''réu''?', '["réa", "ré", "reia", "reua"]', 1, 'O feminino de réu é ré.'),
('Português', 'Fácil', 'Identifique o pronome possessivo.', '["meu", "que", "ele", "onde"]', 0, '''Meu'' é pronome possessivo (indica posse). Os outros são: relativo, pessoal e advérbio.'),
('Português', 'Fácil', 'Qual frase usa corretamente a crase?', '["Vou a escola.", "Vou à escola.", "Vou a pé.", "Vou a casa."]', 1, '''À escola'' = a (preposição) + a (artigo). Antes de palavra feminina determinada pelo artigo, usa-se crase.');

-- Português - Médio (10)
INSERT INTO questions (subject, difficulty, text, options, correct_index, explanation) VALUES
('Português', 'Médio', 'Assinale a alternativa em que a regência verbal está correta de acordo com a norma-padrão.', '["Prefiro mais estudar do que trabalhar.", "O filme que assistimos ontem foi ótimo.", "Chegamos em São Paulo logo cedo.", "Obedeça aos sinalizadores de trânsito."]', 3, 'O verbo ''obedecer'' é transitivo indireto e exige a preposição ''a''. As outras alternativas têm erros.'),
('Português', 'Médio', 'Qual oração é subordinada adverbial concessiva?', '["Embora chovesse, saímos.", "Quando chover, ficarei em casa.", "Se estudar, passará.", "Como estava cansado, dormiu."]', 0, 'Oração concessiva indica concessão, contraste. ''Embora'' é conjunção concessiva.'),
('Português', 'Médio', 'Identifique a função sintática de ''aos alunos'' em: ''O professor entregou as provas aos alunos''.', '["Objeto direto", "Objeto indireto", "Complemento nominal", "Adjunto adverbial"]', 1, '''Aos alunos'' é objeto indireto do verbo ''entregar''.'),
('Português', 'Médio', 'Assinale a alternativa com uso correto do pronome oblíquo.', '["Vou lhe encontrar amanhã.", "Quero lhe ver feliz.", "Vou encontrá-lo amanhã.", "Quero lhe abraçar."]', 2, 'O pronome ''lhe'' é usado para objeto indireto. ''Encontrar'' é transitivo direto, exigindo ''o/a''.'),
('Português', 'Médio', 'Qual frase apresenta ambiguidade?', '["O professor viu o aluno com o binóculo.", "João comprou um carro novo.", "Maria estuda todos os dias.", "Pedro viajou ontem."]', 0, 'Ambiguidade: quem estava com o binóculo? O professor ou o aluno?'),
('Português', 'Médio', 'Identifique o tipo de predicado em: ''O aluno permaneceu calado''.', '["Verbal", "Nominal", "Verbo-nominal", "Sem predicado"]', 1, 'Predicado nominal tem verbo de ligação (permanecer) + predicativo do sujeito (calado).'),
('Português', 'Médio', 'Qual palavra é formada por derivação parassintética?', '["infeliz", "anoitecer", "pedreiro", "livraria"]', 1, 'Parassíntese = prefixo + radical + sufixo simultaneamente. ''Anoitecer'' = a + noite + cer.'),
('Português', 'Médio', 'Assinale a alternativa com uso correto de ''onde''.', '["A situação onde nos encontramos é difícil.", "A cidade onde nasci é pequena.", "O momento onde tudo mudou.", "A razão onde ele saiu."]', 1, '''Onde'' indica lugar físico. Apenas ''A cidade onde nasci'' está correto.'),
('Português', 'Médio', 'Qual é o processo de formação da palavra ''planalto''?', '["Derivação", "Composição", "Hibridismo", "Onomatopeia"]', 1, 'Composição por justaposição: plano + alto = planalto.'),
('Português', 'Médio', 'Identifique a oração sem sujeito.', '["Choveu muito ontem.", "Os alunos estudaram.", "Chegaram as encomendas.", "Faz-se necessário estudar."]', 0, 'Verbos que indicam fenômenos da natureza são impessoais = oração sem sujeito.');

-- Português - Difícil (10)
INSERT INTO questions (subject, difficulty, text, options, correct_index, explanation) VALUES
('Português', 'Difícil', 'Em ''Vende-se casas'', o termo ''casas'' exerce a função de:', '["Objeto Direto", "Objeto Indireto", "Sujeito Paciente", "Agente da Passiva"]', 2, 'Na voz passiva sintética (verbo + se), o que seria o objeto direto torna-se o sujeito paciente. O verbo deve concordar: ''Vendem-se casas''.'),
('Português', 'Difícil', 'Assinale a alternativa em que o pronome relativo pode ser substituído por ''cujo''.', '["O livro que comprei é ótimo.", "A casa que moro é antiga.", "O autor que li o livro é famoso.", "A caneta que a tinta acabou é azul."]', 3, '''Cujo'' indica posse. ''A caneta cuja tinta acabou'' = a tinta da caneta.'),
('Português', 'Difícil', 'Qual figura de linguagem está presente em: ''Li Machado de Assis ontem''?', '["Metáfora", "Metonímia", "Catacrese", "Sinestesia"]', 1, 'Metonímia: autor pela obra. ''Li Machado de Assis'' = li a obra de Machado de Assis.'),
('Português', 'Difícil', 'Identifique a oração subordinada substantiva subjetiva.', '["É necessário que você estude.", "Espero que você venha.", "Tenho certeza de que passarei.", "Disse que viria."]', 0, 'Subjetiva funciona como sujeito da oração principal. ''Que você estude'' é sujeito de ''é necessário''.'),
('Português', 'Difícil', 'Qual frase apresenta silepse de gênero?', '["Vossa Majestade está preocupado.", "Os brasileiros somos otimistas.", "São Paulo está fria.", "A gente fomos ao cinema."]', 0, '''Vossa Majestade'' (feminino) com ''preocupado'' (masculino). Concordância com a ideia, não com a forma.'),
('Português', 'Difícil', 'Assinale a alternativa com uso correto do infinitivo.', '["Ao chegarmos, a festa já havia acabado.", "Ao chegar, a festa já havia acabado.", "Para eu sair, preciso terminar.", "Para mim sair, preciso terminar."]', 0, 'Infinitivo flexionado quando há sujeito expresso diferente do da oração principal.'),
('Português', 'Difícil', 'Qual é a classificação do ''se'' em: ''Precisa-se de funcionários''?', '["Partícula apassivadora", "Índice de indeterminação do sujeito", "Pronome reflexivo", "Conjunção condicional"]', 1, 'Com VTI + se = índice de indeterminação. ''Precisa-se de funcionários'' = alguém precisa.'),
('Português', 'Difícil', 'Identifique a função do ''que'' em: ''Que dia lindo!''', '["Pronome relativo", "Conjunção integrante", "Pronome indefinido", "Palavra expletiva"]', 2, '''Que'' como pronome indefinido/adjetivo = qual, quanto.'),
('Português', 'Difícil', 'Qual frase apresenta pleonasmo vicioso?', '["Subir para cima é redundante.", "Vi com meus próprios olhos.", "Entrar para dentro da sala.", "A mim me parece correto."]', 3, '''A mim me'' é pleonasmo vicioso (redundância desnecessária).'),
('Português', 'Difícil', 'Assinale a alternativa com uso correto de ''mal'' ou ''mau''.', '["Ele é um mau aluno.", "Ele passou mau ontem.", "Fez um mau negócio.", "Todas corretas."]', 3, 'Todas estão corretas: ''mau'' = adjetivo; ''mal'' = advérbio ou substantivo.');

-- Nota: Devido ao tamanho, vou criar um script Python para gerar as outras 240 questões automaticamente
-- Execute este arquivo primeiro, depois vou gerar o script completo
