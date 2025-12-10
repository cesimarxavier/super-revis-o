// database.js
// Este arquivo contém todo o conteúdo pedagógico do jogo.

const DB = {
    subjects: [
        {
            id: "pt",
            name: "Português",
            icon: "📖",
            color: "bg-blue-500",
            accent: "border-blue-600",
            categories: [
                {id: "pronomes",
                    name: "Pronomes",
                    prep: {
                        title: "O Poder dos Pronomes",
                        content: "<p>Pronomes são palavras mágicas que substituem nomes! Eles ajudam a não repetir as coisas. <br><br><strong>Possessivos:</strong> Indicam DONO (Meu, Teu, Nosso).<br><strong>Demonstrativos:</strong> Indicam LUGAR (Este, Esse, Aquele).",
                        skin: "🦉"
                    },
                    pool: [
                        // -------- BLOOM 1 – LEMBRAR (reconhecimento básico) --------
                        { id: 1, bloom: 1, q: "Na frase: \"Este caderno é novo\", qual é o pronome demonstrativo?", opts: ["Este", "Caderno", "Novo", "É"], c: 0, h: "Pronome demonstrativo indica algo perto de quem fala." },
                        { id: 2, bloom: 1, q: "Em: \"Aquele carro é rápido\", o pronome demonstrativo é:", opts: ["Aquele", "Carro", "Rápido", "É"], c: 0, h: "Aquele indica algo longe de quem fala e de quem ouve." },
                        { id: 3, bloom: 1, q: "Qual destas palavras é um pronome possessivo?", opts: ["Mesa", "Meu", "Azul", "Rápido"], c: 1, h: "Pronome possessivo indica posse: meu, teu, nosso..." },
                        { id: 4, bloom: 1, q: "Em: \"Nossa casa é grande\", qual é o pronome possessivo?", opts: ["Nossa", "Casa", "Grande", "É"], c: 0, h: "Nossa indica que algo pertence a nós." },
                        { id: 5, bloom: 1, q: "Qual destas opções é um pronome demonstrativo?", opts: ["Eu", "Meu", "Esse", "Nós"], c: 2, h: "Este, esse, aquele são demonstrativos." },
                        { id: 6, bloom: 1, q: "Na frase: \"Meus amigos chegaram\", qual é o pronome possessivo?", opts: ["Meus", "Amigos", "Chegaram", "Nenhum"], c: 0, h: "Meus indica posse em relação a quem fala." },
                        { id: 7, bloom: 1, q: "Qual palavra completa: \"________ livro é meu\" como pronome demonstrativo?", opts: ["Aquele", "Rápido", "Correr", "Talvez"], c: 0, h: "Aquele é um demonstrativo." },
                        { id: 8, bloom: 1, q: "Em: \"Esse brinquedo é legal\", o pronome demonstrativo é:", opts: ["Esse", "Brinquedo", "É", "Legal"], c: 0, h: "Esse indica algo perto de quem ouve." },
                        { id: 9, bloom: 1, q: "Qual é um pronome possessivo?", opts: ["Teu", "Ele", "Esse", "Aquele"], c: 0, h: "Teu indica posse da segunda pessoa." },
                        { id: 10, bloom: 1, q: "Na frase: \"Minha mochila sumiu\", qual é o pronome possessivo?", opts: ["Minha", "Mochila", "Sumiu", "Nenhum"], c: 0, h: "Minha indica que a mochila pertence a quem fala." },
                        { id: 11, bloom: 1, q: "Qual alternativa apresenta apenas pronomes possessivos?", opts: ["Meu, teu, nosso", "Eu, tu, ele", "Este, esse, aquele", "Quem, que, qual"], c: 0, h: "Meu, teu, nosso são de posse." },
                        { id: 12, bloom: 1, q: "Qual alternativa apresenta apenas pronomes demonstrativos?", opts: ["Este, esse, aquele", "Meu, teu, nosso", "Eu, tu, ele", "Mim, comigo, contigo"], c: 0, h: "Este, esse, aquele indicam lugar/posição." },
                        { id: 13, bloom: 1, q: "Na frase: \"Teu casaco está aqui\", o pronome possessivo é:", opts: ["Teu", "Casaco", "Está", "Aqui"], c: 0, h: "Teu indica que o casaco pertence a você." },
                        { id: 14, bloom: 1, q: "Na frase: \"Aquelas mochilas são pesadas\", o pronome demonstrativo é:", opts: ["Aquelas", "Mochilas", "São", "Pesadas"], c: 0, h: "Aquelas indica algo distante." },
                        { id: 15, bloom: 1, q: "Qual é o pronome possessivo na frase: \"Seu lápis quebrou\"?", opts: ["Seu", "Lápis", "Quebrou", "Nenhum"], c: 0, h: "Seu indica posse em relação a você ou ele/ela, dependendo do contexto." },

                        // -------- BLOOM 2 – COMPREENDER (entender função) --------
                        { id: 16, bloom: 2, q: "Pronomes possessivos indicam:", opts: ["Lugar", "Posse ou dono", "Tempo", "Quantidade"], c: 1, h: "Possessivo vem de posse." },
                        { id: 17, bloom: 2, q: "Pronomes demonstrativos servem para:", opts: ["Indicar dono", "Indicar lugar ou posição", "Indicar quantidade", "Indicar dúvida"], c: 1, h: "Demonstrar = apontar algo." },
                        { id: 18, bloom: 2, q: "Na frase: \"Este livro é meu\", o pronome \"este\" indica algo:", opts: ["Longe de quem fala", "Perto de quem fala", "Perto de quem ouve", "Indefinido"], c: 1, h: "Este costuma indicar algo perto de quem fala." },
                        { id: 19, bloom: 2, q: "Na frase: \"Aquele livro é meu\", o pronome \"aquele\" indica algo:", opts: ["Perto de quem fala", "Perto de quem ouve", "Longe de ambos", "Dentro da mochila"], c: 2, h: "Aquele indica maior distância." },
                        { id: 20, bloom: 2, q: "Na frase: \"Esse caderno é seu\", \"esse\" indica algo:", opts: ["Perto de quem fala", "Perto de quem ouve", "Longe dos dois", "Imaginário"], c: 1, h: "Esse se liga a quem ouve ou ao que foi citado antes." },
                        { id: 21, bloom: 2, q: "Em: \"Nosso time ganhou!\", o pronome \"nosso\" indica que o time pertence:", opts: ["Só a mim", "Só a você", "A nós", "A eles"], c: 2, h: "Nosso inclui quem fala e quem ouve." },
                        { id: 22, bloom: 2, q: "Assinale a frase em que o pronome demonstrativo indica algo perto de quem fala.", opts: ["Esse livro é seu.", "Aquele livro é velho.", "Este livro é novo.", "Aquele livro é meu."], c: 2, h: "Este = perto de quem fala." },
                        { id: 23, bloom: 2, q: "Assinale a frase em que o pronome demonstrativo indica algo longe de todos.", opts: ["Este carro é rápido.", "Esse carro é bonito.", "Aquele carro é antigo.", "Este carro é meu."], c: 2, h: "Aquele indica distância maior." },
                        { id: 24, bloom: 2, q: "Em: \"Minha mochila está vazia\", o pronome \"minha\" indica:", opts: ["Lugar da mochila", "Posse da mochila", "Cor da mochila", "Preço da mochila"], c: 1, h: "Pronome possessivo sempre fala de dono." },
                        { id: 25, bloom: 2, q: "Qual opção explica corretamente a diferença entre \"este\" e \"esse\"?", opts: ["Nenhuma diferença", "\"Este\" perto de quem fala, \"esse\" perto de quem ouve", "\"Esse\" é só de tempo", "\"Este\" é só de tempo"], c: 1, h: "Pense em quem está falando e quem está ouvindo." },
                        { id: 26, bloom: 2, q: "Em: \"Teu caderno caiu\", \"teu\" indica:", opts: ["Caderno perto de mim", "Caderno perto de você", "Caderno longe dos dois", "Caderno de outra pessoa"], c: 1, h: "Teu é posse ligada à segunda pessoa (tu/você)." },
                        { id: 27, bloom: 2, q: "Na frase: \"Aquela casa é nossa\", quais são os pronomes?", opts: ["Aquela e nossa", "Casa e nossa", "Aquela e casa", "Casa e é"], c: 0, h: "Aquela = demonstrativo; nossa = possessivo." },
                        { id: 28, bloom: 2, q: "Complete: Pronomes demonstrativos ajudam a __________ objetos no espaço.", opts: ["Contar", "Demonstrar/indicar", "Pintar", "Somar"], c: 1, h: "Eles apontam para coisas, lugares ou ideias." },
                        { id: 29, bloom: 2, q: "Pronomes possessivos sempre se relacionam com:", opts: ["Lugar", "Cor", "Posse", "Tamanho"], c: 2, h: "Possessivo = posse." },
                        { id: 30, bloom: 2, q: "Na frase: \"Essas provas são minhas\", qual opção identifica CORRETAMENTE os pronomes?", opts: ["Essas (demonstrativo) e minhas (possessivo)", "Essas (possessivo) e minhas (demonstrativo)", "Só há demonstrativo", "Não há pronome"], c: 0, h: "Um aponta as provas, o outro indica posse." },

                        // -------- BLOOM 3 – APLICAR (usar o pronome na frase) --------
                        { id: 31, bloom: 3, q: "Complete: \"Mãe, me alcança ________ copo aí na sua mão?\"", opts: ["este", "esse", "aquele", "meu"], c: 1, h: "Está perto de quem ouve (a mãe)." },
                        { id: 32, bloom: 3, q: "Complete: \"________ livro aqui na minha mesa é muito interessante.\"", opts: ["Esse", "Aquele", "Este", "Teu"], c: 2, h: "Perto de quem fala: este." },
                        { id: 33, bloom: 3, q: "Escolha a melhor frase para algo longe dos dois: \"________ estrela é muito brilhante.\"", opts: ["Esta", "Essa", "Aquela", "Minha"], c: 2, h: "Estrela no céu → longe → aquela." },
                        { id: 34, bloom: 3, q: "Complete: \"Vendi ________ carro ontem.\" (o carro era meu)", opts: ["teu", "meu", "nosso", "dele"], c: 1, h: "Quem fala era o dono do carro." },
                        { id: 35, bloom: 3, q: "Complete: \"Vocês trouxeram ________ materiais?\" (os materiais pertencem a vocês)", opts: ["meus", "teus", "seus", "nossos"], c: 2, h: "Seus — associado a vocês." },
                        { id: 36, bloom: 3, q: "Escolha a alternativa que usa CORRETAMENTE um pronome demonstrativo:", opts: ["Esse aqui na minha mão é pesado.", "Aquele aqui é meu.", "Este aí com você é bonito.", "Aquele aqui perto de mim é azul."], c: 0, h: "Não combinamos 'aquele' com 'aqui' e nem 'este' com 'aí'." },
                        { id: 37, bloom: 3, q: "Complete: \"Eu esqueci ________ livro em casa\" (o livro é meu).", opts: ["aquele", "nosso", "meu", "seu"], c: 2, h: "Pronome possessivo de primeira pessoa: meu." },
                        { id: 38, bloom: 3, q: "Complete: \"________ caneta aí na sua mesa é azul?\"", opts: ["Esta", "Essa", "Aquela", "Minha"], c: 1, h: "Está perto de quem ouve: esse/essa." },
                        { id: 39, bloom: 3, q: "Reescreva mentalmente e escolha a opção correta: \"(Eu e você) ganhamos o jogo. Foi ________ melhor partida!\"", opts: ["meu", "teu", "nosso", "dele"], c: 2, h: "Inclui eu e você → nosso." },
                        { id: 40, bloom: 3, q: "Complete: \"Você pegou ________ lápis sem pedir\" (o lápis é meu).", opts: ["teu", "meu", "nosso", "seu"], c: 1, h: "Fala sobre a posse do eu." },
                        { id: 41, bloom: 3, q: "Na frase: \"Olhe ________ desenho aqui no quadro\", qual pronome completa melhor?", opts: ["este", "aquele", "teu", "meu"], c: 0, h: "No quadro, perto de quem fala → este." },
                        { id: 42, bloom: 3, q: "Complete: \"Tira ________ pés de cima da mesa!\" (os pés são da pessoa que ouve).", opts: ["meus", "teus", "seus", "nossos"], c: 2, h: "Falando com você: seus pés." },
                        { id: 43, bloom: 3, q: "Complete: \"Não gosto muito ________ filme aí que você está vendo.\"", opts: ["deste", "desse", "daquele", "meu"], c: 1, h: "Filme 'aí' com quem ouve → desse." },
                        { id: 44, bloom: 3, q: "Escolha a frase que usa CORRETAMENTE pronomes possessivos:", opts: ["Meu caderno e teu estojo sumiram.", "Meus caderno e teus estojo sumiram.", "Meu caderno e tua estojo sumiram.", "Minha caderno e teu estojo sumiram."], c: 0, h: "A concordância recai sobre o substantivo que acompanha." },
                        { id: 45, bloom: 3, q: "Complete: \"Ela levou ________ filhos ao parque.\"", opts: ["seus", "meus", "teus", "nosso"], c: 0, h: "Ela → seus filhos." },

                        // -------- BLOOM 4 – ANALISAR (comparar usos, identificar erros) --------
                        { id: 46, bloom: 4, q: "Em qual frase o pronome demonstrativo está INCORRETO?", opts: ["Este livro aqui é meu.", "Esse caderno aí é seu.", "Aquele carro lá longe é antigo.", "Aquele aqui na minha mão é bonito."], c: 3, h: "Não combinamos 'aquele' com 'aqui'." },
                        { id: 47, bloom: 4, q: "Em qual frase o pronome possessivo está MAL utilizado?", opts: ["Meu cachorro é brincalhão.", "Teus amigos chegaram cedo.", "Nosso mães são legais.", "Seu time ganhou o jogo."], c: 2, h: "O pronome deveria concordar: 'nossas mães'." },
                        { id: 48, bloom: 4, q: "Analise: \"Esse aqui na minha mão é seu\". O que há de estranho?", opts: ["Nada", "O pronome demonstrativo não concorda", "\"Esse\" não combina com \"aqui\"", "Faltou pronome possessivo"], c: 2, h: "Perto de quem fala → 'este aqui'." },
                        { id: 49, bloom: 4, q: "Qual frase usa MELHOR o contraste entre 'este' e 'aquele'?", opts: ["Este e aquele livro aqui são meus.", "Este livro na minha mão é novo, aquele na estante é velho.", "Aquele aqui é novo, este lá é velho.", "Este aí com você é caro."], c: 1, h: "Um perto de quem fala, outro distante." },
                        { id: 50, bloom: 4, q: "Em: \"Esta prova e essa lição são difíceis\", qual análise está correta?", opts: ["Ambos perto de quem fala", "\"Esta\" perto de quem fala e \"essa\" perto de quem ouve", "Ambos longe dos dois", "Nenhum é demonstrativo"], c: 1, h: "Esta ~ aqui; essa ~ aí." },
                        { id: 51, bloom: 4, q: "Qual frase apresenta pronomes possessivos mal empregados?", opts: ["Minha mochila e teu estojo sumiram.", "Meus lápis e minhas canetas acabaram.", "Meu caderno e minha agenda são novos.", "Teu livro e teu caderno estão aqui."], c: 0, h: "A concordância entre gênero/número está forçada com 'teu estojo' dependendo do contexto, mas aqui o foco é notar mistura estranha com 'minha mochila e teu estojo' numa frase neutra." },
                        { id: 52, bloom: 4, q: "Analise: \"Aquele livro aqui na minha mesa é chato\". O erro está em:", opts: ["Livro", "Chato", "Na mesa", "Pronome 'aquele'"], c: 3, h: "Aqui → perto de mim → deveria ser 'este'." },
                        { id: 53, bloom: 4, q: "Qual frase apresenta uso coerente de pronomes demonstrativos no espaço?", opts: ["Esse livro aqui na minha mão é legal.", "Este livro aí com você é caro.", "Aquele aqui do meu lado é amarelo.", "Esse lá no fim da rua é perigoso."], c: 0, h: "'Esse aí', 'este aqui', 'aquele lá' são combinações típicas." },
                        { id: 54, bloom: 4, q: "Em: \"Minha e tua mochilas estão pesadas\", qual é o problema?", opts: ["Não há problema", "Pronome demonstrativo errado", "Concordância de gênero/número", "Falta artigo"], c: 2, h: "Seria 'minha mochila e tua mochila' ou 'minhas e tuas mochilas'." },
                        { id: 55, bloom: 4, q: "Em: \"Esses aqui são meus\", o uso de pronomes está:", opts: ["Incorreto, deveria ser 'estes aqui'", "Incorreto, deveria ser 'aqueles lá'", "Correto sempre", "Sem pronome demonstrativo"], c: 0, h: "Perto de quem fala → estes aqui." },
                        { id: 56, bloom: 4, q: "Qual alternativa mostra MELHOR contraste de posse entre \"meu\" e \"teu\"?", opts: ["Esse livro é meu e teu.", "Esse livro é teu, aquele é meu.", "Meu livro é meu, teu livro é meu.", "Teu livro é meu e meu livro é teu."], c: 1, h: "Cada pronome ligado à pessoa certa." },
                        { id: 57, bloom: 4, q: "Na frase: \"Aquelas suas ideias eram ótimas\", temos:", opts: ["Um demonstrativo e um possessivo", "Dois demonstrativos", "Dois possessivos", "Nenhum pronome"], c: 0, h: "Aquelas (demonstrativo) / suas (possessivo)." },
                        { id: 58, bloom: 4, q: "Qual frase apresenta incoerência entre lugar e pronome?", opts: ["Este livro aqui na mesa é meu.", "Esse caderno aí do seu lado é seu.", "Aquele prédio lá longe é antigo.", "Esse prédio lá no fim da rua é antigo."], c: 3, h: "'Esse' não combina com 'lá no fim da rua'." },
                        { id: 59, bloom: 4, q: "Analise: \"Esse filme que vimos ontem foi ótimo\". O 'esse' indica:", opts: ["Algo que vamos ver", "Algo sendo visto agora", "Algo já mencionado ou recém-visto", "Algo muito distante"], c: 2, h: "Também pode retomar algo já citado no texto." },
                        { id: 60, bloom: 4, q: "Qual frase usa corretamente 'meu' e 'nosso'?", opts: ["Nosso mochila é pesada e meu caderno sumiu.", "Minha mochila é pesada e nosso caderno sumiu.", "Minha mochila é pesada e nosso time ganhou.", "Meu mochila é pesada e nosso times ganhou."], c: 2, h: "Um pronome para objeto individual e outro para grupo." },

                        // -------- BLOOM 5 – AVALIAR (julgar, escolher melhor uso) --------
                        { id: 61, bloom: 5, q: "Você vai escrever um bilhete para um colega sobre um livro que ESTÁ COM ELE. Qual frase é mais adequada?", opts: ["Este livro é muito bom.", "Esse livro que está com você é muito bom.", "Aquele livro é muito bom.", "Meu livro é muito bom."], c: 1, h: "Livro 'com ele' → esse livro." },
                        { id: 62, bloom: 5, q: "Para falar de um filme que VOCÊ acabou de assistir e vai comentar agora, qual escolha é melhor?", opts: ["Aquele filme foi legal.", "Esse filme foi legal.", "Este filme foi legal.", "Teu filme foi legal."], c: 2, h: "Acabou de ver / está presente na fala → este, em muitos contextos." },
                        { id: 63, bloom: 5, q: "Ao corrigir um texto, qual troca MELHORA o uso de pronomes? \"Esse aqui na minha mão é o seu\" →", opts: ["Este aqui na minha mão é o seu.", "Aquele aqui na minha mão é o seu.", "Esse lá na prateleira é o seu.", "Teu aqui na minha mão é o seu."], c: 0, h: "Perto de quem fala → este aqui." },
                        { id: 64, bloom: 5, q: "Um aluno escreveu: \"Minha e teu mochilas estão pesadas\". Qual revisão é mais adequada?", opts: ["Minhas e teus mochilas estão pesadas.", "Minha e tua mochilas estão pesadas.", "Minha mochila e tua mochila estão pesadas.", "Meu e teu mochilas estão pesadas."], c: 2, h: "Mantém paralelismo e concordância." },
                        { id: 65, bloom: 5, q: "Você quer destacar algo MUITO distante de todos em um texto. Qual escolha é melhor?", opts: ["Este lugar é perigoso.", "Esse lugar é perigoso.", "Aquele lugar é perigoso.", "Meu lugar é perigoso."], c: 2, h: "Aquele marca maior distância." },
                        { id: 66, bloom: 5, q: "Qual frase avalia MELHOR a ideia de posse compartilhada?", opts: ["Meu time ganhou.", "Teu time ganhou.", "Nosso time ganhou.", "Seu time ganhou."], c: 2, h: "Nosso inclui o grupo todo." },
                        { id: 67, bloom: 5, q: "Você revisa: \"Aquele aqui na carteira é meu\". Qual correção fica adequada?", opts: ["Esse aqui na carteira é meu.", "Este aqui na carteira é meu.", "Aquele lá na carteira é meu.", "Teu aqui na carteira é meu."], c: 1, h: "Aqui → este." },
                        { id: 68, bloom: 5, q: "Qual opção apresenta MELHOR adequação de pronomes para conversa em sala?", opts: ["Esse livro aqui comigo é seu.", "Este livro aqui comigo é seu.", "Aquele livro aqui comigo é seu.", "Teu livro aqui comigo é seu."], c: 1, h: "Livro 'aqui comigo' → este." },
                        { id: 69, bloom: 5, q: "Ao escrever uma legenda para foto apontando um amigo ao lado, você deve usar:", opts: ["Esse é meu amigo.", "Este é meu amigo.", "Aquele é meu amigo.", "Teu é meu amigo."], c: 1, h: "Geralmente usamos 'este' para algo bem próximo de quem fala, inclusive em textos mais formais." },
                        { id: 70, bloom: 5, q: "Você precisa indicar no texto um objeto que está com o leitor. Qual frase é mais adequada?", opts: ["Este caderno aí com você é importante.", "Esse caderno aí com você é importante.", "Aquele caderno aí com você é importante.", "Meu caderno aí com você é importante."], c: 1, h: "Aí / com você → esse." },
                        { id: 71, bloom: 5, q: "Qual frase você escolheria para enfatizar que o livro é exclusivamente seu?", opts: ["Nosso livro é especial.", "Teu livro é especial.", "Meu livro é especial.", "Esse livro é especial."], c: 2, h: "Primeira pessoa + possessivo: meu." },
                        { id: 72, bloom: 5, q: "Em uma explicação em quadro, qual é a forma mais adequada:", opts: ["Esse exemplo aqui no quadro.", "Este exemplo aqui no quadro.", "Aquele exemplo aqui no quadro.", "Teu exemplo aqui no quadro."], c: 1, h: "Quadro com o professor → este exemplo." },
                        { id: 73, bloom: 5, q: "Qual frase avalia melhor a diferença de proximidade?", opts: ["Este livro é meu e esse é seu.", "Esse livro é meu e esse é seu.", "Aquele livro é meu e aquele é seu.", "Meu livro é este e teu é este."], c: 0, h: "Um perto de mim, outro perto de você." },
                        { id: 74, bloom: 5, q: "Você corrige um colega que escreveu: \"Nosso mãe é carinhosa\". A melhor correção é:", opts: ["Nosso mães são carinhosa.", "Nossa mãe é carinhosa.", "Nosso mãe são carinhosas.", "Nossa mãe são carinhosa."], c: 1, h: "Concordância de gênero e número." },
                        { id: 75, bloom: 5, q: "Para enfatizar que o time pertence a você e seus colegas, em um cartaz, você usaria:", opts: ["Teu time", "Seus time", "Nosso time", "Meu time"], c: 2, h: "Ideia coletiva → nosso time." },

                        // -------- BLOOM 6 – CRIAR (reformular, propor frases) --------
                        { id: 76, bloom: 6, q: "Pense na frase: \"O caderno de João é esse aqui na minha mochila\". Qual reescrita MELHOR ajusta o pronome demonstrativo?", opts: ["O caderno de João é este aqui na minha mochila.", "O caderno de João é aquele aqui na minha mochila.", "O caderno de João é esse lá na minha mochila.", "O caderno de João é teu aqui na minha mochila."], c: 0, h: "Aqui + perto de quem fala → este." },
                        { id: 77, bloom: 6, q: "Você quer escrever que o livro distante é do seu amigo. Qual frase cria melhor essa ideia?", opts: ["Esse livro aqui é teu.", "Aquele livro lá no alto é teu.", "Este livro aí é teu.", "Teu livro aqui é aquele."], c: 1, h: "Longe + posse da segunda pessoa." },
                        { id: 78, bloom: 6, q: "Qual opção cria uma frase correta com pronome possessivo e demonstrativo? (sobre um brinquedo na mão do colega)", opts: ["Esse brinquedo aqui na minha mão é meu.", "Esse brinquedo aí na sua mão é meu.", "Esse brinquedo aí na sua mão é seu.", "Aquele brinquedo aqui na sua mão é meu."], c: 2, h: "Aí + sua mão + posse: seu." },
                        { id: 79, bloom: 6, q: "Você precisa escrever que o time da sua escola e o time do colega ganharam juntos. Qual frase cria melhor essa ideia?", opts: ["Meu e teu time ganharam.", "Nosso time ganhou.", "Seu time ganhou.", "Meu time ganhou."], c: 1, h: "Ideia de time compartilhado → nosso." },
                        { id: 80, bloom: 6, q: "Escolha a frase que CRIA corretamente a ideia de algo perto de quem fala e algo longe de todos:", opts: ["Este livro aqui é meu e aquele lá na estante é seu.", "Esse livro aqui é meu e esse lá na estante é seu.", "Aquele livro aqui é meu e este lá é seu.", "Este livro lá é meu e aquele aqui é seu."], c: 0, h: "Combinação correta de proximidade e distância." },
                        { id: 81, bloom: 6, q: "Você quer montar uma frase com dois pronomes possessivos: um para você e um para o colega. Qual é a melhor escolha?", opts: ["Meu caderno e teu livro estão aqui.", "Nosso caderno e nosso livro estão aqui.", "Teu caderno e teu livro estão aqui.", "Seu caderno e meu livro estão aqui e são seus."], c: 0, h: "Cada pronome ligado a um dono diferente." },
                        { id: 82, bloom: 6, q: "Crie mentalmente a frase e escolha a opção que melhor expressa: \"O brinquedo que está com você é novo e o que está comigo é velho.\"", opts: ["Esse brinquedo é novo e esse é velho.", "Esse brinquedo aí é novo e este aqui é velho.", "Este brinquedo aí é novo e aquele aqui é velho.", "Aquele brinquedo aí é novo e esse aqui é velho."], c: 1, h: "Aí → perto de você; aqui → perto de mim." },
                        { id: 83, bloom: 6, q: "Qual frase cria corretamente a ideia de herança: algo que pertenceu aos avós e agora pertence à família?", opts: ["Meu brinquedo é de vovô.", "Teu brinquedo é de vovô.", "Nosso brinquedo veio do vovô.", "Seu brinquedo veio do vovô."], c: 2, h: "Ideia compartilhada → nosso." },
                        { id: 84, bloom: 6, q: "Você quer criar uma frase com um objeto muito distante no tempo e no espaço. Qual opção faz isso melhor?", opts: ["Este momento é importante.", "Esse momento foi ontem.", "Aquele momento da nossa infância foi especial.", "Meu momento é agora."], c: 2, h: "Aquele pode marcar distância temporal e espacial." },
                        { id: 85, bloom: 6, q: "Escolha a frase que cria adequadamente a ideia: \"O caderno que está aí com você é meu\".", opts: ["Este caderno aí com você é meu.", "Esse caderno aí com você é meu.", "Aquele caderno aí com você é meu.", "Teu caderno aí com você é meu."], c: 1, h: "Com você → esse." },
                        { id: 86, bloom: 6, q: "Você quer criar uma instrução: cada aluno deve usar o PRÓPRIO material. Qual frase é mais adequada?", opts: ["Use nosso material.", "Use teu material.", "Use seu próprio material.", "Use meu material."], c: 2, h: "Fala com todos, mas cada um com o seu." },
                        { id: 87, bloom: 6, q: "Qual frase cria de forma clara a diferença entre dois donos diferentes?", opts: ["Meu e teu caderno são iguais.", "Nosso caderno é igual.", "Teu caderno é igual ao teu.", "Meu caderno é igual ao meu."], c: 0, h: "Dois donos distintos: eu e você." },
                        { id: 88, bloom: 6, q: "Você quer criar uma legenda para uma foto apontando um objeto na sua mão. Qual usa melhor o pronome demonstrativo?", opts: ["Esse é meu novo livro!", "Aquele é meu novo livro!", "Este é meu novo livro!", "Teu é meu novo livro!"], c: 2, h: "Na sua mão → este." },
                        { id: 89, bloom: 6, q: "Qual frase cria corretamente a ideia de dois objetos: um perto de você e outro longe de todos?", opts: ["Esse livro aí é meu e este lá na montanha é teu.", "Esse livro aí é meu e aquele lá na montanha é teu.", "Este livro aí é meu e aquele aqui é teu.", "Aquele livro aí é meu e esse lá é teu."], c: 1, h: "Aí → perto de você; lá → distante → aquele." },
                        { id: 90, bloom: 6, q: "Você quer criar uma frase dizendo que algo pertence a você e seus pais, não só a você. Qual é a melhor opção?", opts: ["Meu carro", "Teu carro", "Nosso carro", "Seu carro"], c: 2, h: "Posse partilhada → nosso." },

                        // -------- BLOOM 7 – MESTRE (integração, leitura mais complexa) --------
                        { id: 91, bloom: 7, q: "Leia mentalmente: \"Este livro aqui na minha carteira é meu; aquele aí na sua mesa é seu.\" O contraste de pronomes demonstra:", opts: ["A mesma distância para os dois livros", "Objetos sem dono definido", "Diferença de proximidade entre os donos e os livros", "Apenas tempo verbal diferente"], c: 2, h: "Um perto de quem fala, outro perto de quem ouve." },
                        { id: 92, bloom: 7, q: "Em um texto, o autor escreve: \"Essas foram as melhores decisões que tomamos naquele ano\". Os pronomes indicam:", opts: ["Coisas futuras e indefinidas", "Coisas já mencionadas e um tempo distante", "Objetos físicos no espaço", "Apenas posse"], c: 1, h: "\"Essas\" retoma algo citado; \"naquele ano\" marca distância temporal." },
                        { id: 93, bloom: 7, q: "Num bilhete: \"Este é o meu recado; aquele é o seu\". O efeito criado pelo uso de \"este\" e \"aquele\" é:", opts: ["Confundir os donos", "Separar e organizar o que pertence a cada um", "Indicar que tudo é de todos", "Eliminar a ideia de posse"], c: 1, h: "Dois recados distintos, bem marcados." },
                        { id: 94, bloom: 7, q: "Em um texto, o narrador diz: \"Aquela foi a decisão mais difícil da minha vida\". O pronome \"aquela\" tem o efeito de:", opts: ["Aproximar no tempo", "Marcar algo distante no tempo e na memória", "Mostrar objeto físico", "Indicar posse de alguém"], c: 1, h: "Aquele também cria distância temporal/emocional." },
                        { id: 95, bloom: 7, q: "Leia a situação: Você escreve um texto contando que você e sua turma ganharam um prêmio. Para reforçar unidade, qual frase é mais eficaz?", opts: ["Meu prêmio foi merecido.", "Seu prêmio foi merecido.", "Nosso prêmio foi merecido.", "Esse prêmio foi merecido."], c: 2, h: "Nosso cria senso de grupo." },
                        { id: 96, bloom: 7, q: "Em um diálogo, um personagem diz: \"Esse seu jeito me irrita\". O efeito do uso de \"esse\" e \"seu\" é:", opts: ["Falar de algo distante", "Falar de uma característica do próprio falante", "Apontar diretamente para algo do outro", "Eliminar a ideia de posse"], c: 2, h: "Dá foco ao outro, quase como um apontar com o dedo." },
                        { id: 97, bloom: 7, q: "Num texto narrativo, aparece: \"Este medo que sinto agora é diferente daquele que senti na infância\". O contraste entre \"este\" e \"daquele\" indica:", opts: ["Medos iguais", "Nenhuma relação entre os medos", "Presente x passado distante", "Somente posse de objetos"], c: 2, h: "Pronome + tempo reforçam duas fases da vida." },
                        { id: 98, bloom: 7, q: "Você revisa um texto em que o autor mistura \"meu\", \"teu\" e \"nosso\" sem critério. Ao organizar, o que deve ser considerado?", opts: ["Somente o tamanho das palavras", "Somente a sonoridade", "Quem é dono de quê e quem está incluído na posse", "Apenas o tempo verbal"], c: 2, h: "Pronomes de posse precisam de dono claro." },
                        { id: 99, bloom: 7, q: "No trecho: \"Essas lembranças são minhas, aquelas são tuas\", o autor consegue:", opts: ["Apagar a diferença de donos", "Marcar dois grupos de lembranças com donos diferentes", "Confundir o leitor", "Falar apenas de tempo"], c: 1, h: "Dois conjuntos distintos de memórias, bem delimitados." },
                        { id: 100, bloom: 7, q: "Você está escrevendo uma crônica. Para criar proximidade com o leitor ao falar de um problema compartilhado, qual escolha é melhor?", opts: ["\"Meu problema é este: estudar.\" ", "\"O problema de vocês é esse: estudar.\" ", "\"Nosso problema é este: estudar.\" ", "\"Aquele problema é de ninguém.\""], c: 2, h: "Uso de 'nosso' cria identificação." },
                        { id: 101, bloom: 7, q: "No texto: \"Este é o primeiro passo; aqueles virão depois\", qual é o efeito do uso combinado de pronomes?", opts: ["Confundir a ordem", "Organizar a sequência de ações", "Indicar apenas posse", "Indicar apenas tempo passado"], c: 1, h: "Separa o agora do que ainda virá." },
                        { id: 102, bloom: 7, q: "Em uma redação, você quer dar destaque a uma decisão difícil já mencionada antes, em outro parágrafo. Qual pronome usaria para retomar essa decisão?", opts: ["Este", "Esse", "Aquele", "Meu"], c: 1, h: "Muitas vezes 'esse/essa' retoma algo já citado no texto." },
                        { id: 103, bloom: 7, q: "No discurso: \"Este desafio é nosso\", o conjunto de pronomes produz o efeito de:", opts: ["Distância entre falante e ouvintes", "Exclusão do ouvinte", "Unidade e envolvimento de todos", "Falar somente do falante"], c: 2, h: "Este + nosso = aqui + juntos." },
                        { id: 104, bloom: 7, q: "Leia: \"Essas tuas atitudes aproximam a turma; aquelas, porém, afastam.\" A oposição entre \"essas\" e \"aquelas\" ajuda a:", opts: ["Confundir o leitor", "Marcar atitudes boas e ruins em grupos distintos", "Eliminar a ideia de atitude", "Falar só de posse"], c: 1, h: "Dois conjuntos de atitudes com efeitos diferentes." },
                        { id: 105, bloom: 7, q: "Num texto reflexivo, você escreve: \"Aquele foi o dia em que percebi que minha escolha seria definitiva\". O pronome \"aquele\" reforça:", opts: ["Um dia qualquer", "Um dia muito próximo", "Um dia distante e marcante na memória", "A posse de um objeto"], c: 2, h: "Distância temporal + peso emocional." }
                    ]
                },
                {id: "verbos",
                    name: "Verbos",
                    prep: {
                        title: "Verbos em Ação",
                        content: "Tudo que se faz é verbo! Correr, pular, sorrir. O verbo também muda com o tempo: Passado (já foi), Presente (agora) e Futuro (vai ser).",
                        skin: "⚔️"
                    },
                    pool: [
                        { id: 12, bloom: 1, q: "Qual palavra é uma ação?", opts: ["Mesa", "Pular", "Azul", "Ar"], c: 1, h: "Pular é movimento." },
                        { id: 13, bloom: 3, q: "Ontem eu ______.", opts: ["Comi", "Como", "Comerei", "Comia"], c: 0, h: "Ontem já passou." }
                    ]
                }
            ]
        },
        { id: "mat", name: "Matemática", icon: "📐", color: "bg-red-500", accent: "border-red-600", categories: [
            { id: "divisao", name: "Divisão", prep: { title: "Dividir é repartir", content: "<p>Dividir é repartir em partes iguais. Vamos praticar repartindo objetos e quantias.</p>", skin: "➗" }, pool: [
                { id: 1, bloom: 1, q: "Quanto é 6 ÷ 2?", opts: ["2", "3", "4", "6"], c: 1, h: "6 dividido por 2 = 3." },
                { id: 2, bloom: 1, q: "Quanto é 12 ÷ 3?", opts: ["3", "4", "6", "2"], c: 1, h: "12 ÷ 3 = 4." },
                { id: 3, bloom: 1, q: "Quanto é 8 ÷ 4?", opts: ["1", "2", "4", "8"], c: 1, h: "8 ÷ 4 = 2." },
                { id: 4, bloom: 1, q: "Quanto é 20 ÷ 5?", opts: ["4", "5", "2", "10"], c: 0, h: "20 ÷ 5 = 4." },
                { id: 5, bloom: 1, q: "Quanto é 9 ÷ 3?", opts: ["3", "1", "9", "6"], c: 0, h: "9 ÷ 3 = 3." },
                { id: 6, bloom: 1, q: "Quanto é 15 ÷ 3?", opts: ["3", "4", "5", "6"], c: 2, h: "15 ÷ 3 = 5." },
                { id: 7, bloom: 1, q: "Quanto é 18 ÷ 6?", opts: ["2", "3", "6", "12"], c: 1, h: "18 ÷ 6 = 3." },
                { id: 8, bloom: 1, q: "Quanto é 10 ÷ 2?", opts: ["4", "5", "3", "7"], c: 1, h: "10 ÷ 2 = 5." },
                { id: 9, bloom: 1, q: "Quanto é 16 ÷ 4?", opts: ["2", "3", "4", "5"], c: 2, h: "16 ÷ 4 = 4." },
                { id: 10, bloom: 1, q: "Quanto é 4 ÷ 2?", opts: ["1", "2", "3", "4"], c: 1, h: "4 ÷ 2 = 2." },

                { id: 11, bloom: 2, q: "Dividir 12 chocolates entre 3 crianças significa que cada uma recebe:", opts: ["3", "4", "5", "6"], c: 1, h: "12 ÷ 3 = 4." },
                { id: 12, bloom: 2, q: "Se você tem 15 balas e divide igualmente entre 5 amigos, cada um ganha:", opts: ["2", "3", "4", "5"], c: 1, h: "15 ÷ 5 = 3." },
                { id: 13, bloom: 2, q: "Dividir é o oposto de:", opts: ["Somar", "Multiplicar", "Subtrair", "Contar"], c: 1, h: "Divisão é inversa da multiplicação." },
                { id: 14, bloom: 2, q: "Dividir 20 adesivos por 4 significa:", opts: ["Repetir 4 vezes", "Juntar tudo", "Separar em 4 grupos iguais", "Nada"], c: 2, h: "Divisão = grupos iguais." },
                { id: 15, bloom: 2, q: "Se Ana tem 8 lápis e divide com uma amiga igualmente, cada uma fica com:", opts: ["2", "3", "4", "8"], c: 2, h: "8 ÷ 2 = 4." },
                { id: 16, bloom: 2, q: "20 ÷ 4 representa:", opts: ["Formar 4 grupos iguais", "Somar 20 vezes", "Multiplicar 4×20", "Nenhuma"], c: 0, h: "Divisão = distribuição igual." },
                { id: 17, bloom: 2, q: "Se uma pizza tem 12 fatias e 6 pessoas, cada uma come:", opts: ["1", "2", "3", "6"], c: 1, h: "12 ÷ 6 = 2." },
                { id: 18, bloom: 2, q: "Dividir 9 por 3 é igual a descobrir:", opts: ["Quantos grupos de 3 cabem em 9", "Quantos números existem", "Um número aleatório", "Nada"], c: 0, h: "Divisão é agrupamento." },
                { id: 19, bloom: 2, q: "Se eu divido 18 em 3 partes iguais, cada parte vale:", opts: ["5", "6", "3", "9"], c: 1, h: "18 ÷ 3 = 6." },
                { id: 20, bloom: 2, q: "Dividir 24 por 6 significa:", opts: ["Calcular 6 × 24", "Calcular 24 ÷ 6", "Adivinhar", "Subtrair 24"], c: 1, h: "Operação direta." },

                { id: 21, bloom: 3, q: "Você tem 30 figurinhas e quer dividir igualmente entre 5 amigos. Cada um recebe:", opts: ["4", "5", "6", "7"], c: 2, h: "30 ÷ 5 = 6." },
                { id: 22, bloom: 3, q: "Uma caixa tem 24 doces e você quer fazer 4 pacotes iguais. Cada pacote terá:", opts: ["4", "6", "8", "10"], c: 1, h: "24 ÷ 4 = 6." },
                { id: 23, bloom: 3, q: "Para dividir 35 por 5, pense: 5 × ____ = 35", opts: ["5", "6", "7", "8"], c: 2, h: "5 × 7 = 35." },
                { id: 24, bloom: 3, q: "Você tem 18 moedas e vai guardar em potes com 3 cada. Quantos potes enche?", opts: ["3", "4", "5", "6"], c: 1, h: "18 ÷ 3 = 6." },
                { id: 25, bloom: 3, q: "Se 40 alunos são divididos em 8 grupos iguais, cada grupo tem:", opts: ["4", "5", "6", "8"], c: 1, h: "40 ÷ 8 = 5." },
                { id: 26, bloom: 3, q: "Quantos grupos de 4 cabem em 28?", opts: ["4", "5", "6", "7"], c: 1, h: "28 ÷ 4 = 7." },
                { id: 27, bloom: 3, q: "Divida 27 brinquedos em 3 caixas:", opts: ["6", "7", "8", "9"], c: 3, h: "27 ÷ 3 = 9." },
                { id: 28, bloom: 3, q: "Quanto é 45 ÷ 5?", opts: ["5", "7", "8", "9"], c: 3, h: "45 ÷ 5 = 9." },
                { id: 29, bloom: 3, q: "Se 14 alunos formam 2 filas, cada fila terá:", opts: ["5", "6", "7", "8"], c: 2, h: "14 ÷ 2 = 7." },
                { id: 30, bloom: 3, q: "Você tem 32 páginas para ler em 4 dias. Deve ler por dia:", opts: ["6", "7", "8", "10"], c: 2, h: "32 ÷ 4 = 8." },

                { id: 31, bloom: 4, q: "Qual divisão resulta no MAIOR valor?", opts: ["20 ÷ 5", "18 ÷ 3", "24 ÷ 6", "16 ÷ 4"], c: 1, h: "18 ÷ 3 = 6, maior entre as opções." },
                { id: 32, bloom: 4, q: "Qual divisão tem resultado 4?", opts: ["16 ÷ 4", "12 ÷ 3", "20 ÷ 5", "24 ÷ 6"], c: 0, h: "16 ÷ 4 = 4." },
                { id: 33, bloom: 4, q: "Qual número precisa ser dividido por 6 para resultar em 5?", opts: ["20", "25", "30", "35"], c: 2, h: "30 ÷ 6 = 5." },
                { id: 34, bloom: 4, q: "Qual divisão é igual a 2?", opts: ["8 ÷ 4", "6 ÷ 2", "10 ÷ 4", "12 ÷ 6"], c: 0, h: "8 ÷ 4 = 2." },
                { id: 35, bloom: 4, q: "Qual operação NÃO tem resultado igual a 3?", opts: ["9 ÷ 3", "12 ÷ 4", "15 ÷ 5", "18 ÷ 6"], c: 1, h: "12 ÷ 4 = 3." },
                { id: 36, bloom: 4, q: "Qual divisão dá o MENOR resultado?", opts: ["12 ÷ 3", "14 ÷ 2", "16 ÷ 4", "20 ÷ 5"], c: 2, h: "16 ÷ 4 = 4 (menor)." },
                { id: 37, bloom: 4, q: "Qual divisão tem resultado 8?", opts: ["64 ÷ 8", "48 ÷ 6", "24 ÷ 3", "40 ÷ 5"], c: 1, h: "48 ÷ 6 = 8." },
                { id: 38, bloom: 4, q: "Qual é maior: 20 ÷ 4 ou 18 ÷ 3?", opts: ["20 ÷ 4", "18 ÷ 3", "Iguais", "Nenhum"], c: 1, h: "18 ÷ 3 = 6; 20 ÷ 4 = 5." },
                { id: 39, bloom: 4, q: "Se 30 ÷ 5 = 6, então 60 ÷ 5 vale:", opts: ["8", "10", "12", "6"], c: 2, h: "Dobrou o numerador → dobra o resultado." },
                { id: 40, bloom: 4, q: "Qual divisão resulta em número par?", opts: ["21 ÷ 3", "27 ÷ 3", "18 ÷ 3", "15 ÷ 3"], c: 2, h: "18 ÷ 3 = 6 (par)." },

                { id: 41, bloom: 5, q: "Para resolver 48 ÷ 6, qual estratégia é mais eficiente?", opts: ["Somar 6 repetidas vezes", "Pensar: 6 × 8 = 48", "Adivinhar", "Subtrair valores aleatórios"], c: 1, h: "Divisão = inverso da multiplicação." },
                { id: 42, bloom: 5, q: "Qual divisão é mais fácil de resolver mentalmente?", opts: ["30 ÷ 5", "34 ÷ 6", "27 ÷ 8", "22 ÷ 7"], c: 0, h: "30 ÷ 5 = divisão exata simples." },
                { id: 43, bloom: 5, q: "Se você sabe que 9 × 4 = 36, então 36 ÷ 4 deve ser:", opts: ["6", "7", "8", "9"], c: 3, h: "Inversas." },
                { id: 44, bloom: 5, q: "Para dividir 72 por 8, o melhor raciocínio é:", opts: ["Multiplicar 8 por um número até dar 72", "Tentar qualquer número", "Somar 8 muitas vezes", "Desenhar o resultado"], c: 0, h: "Pensar pelo produto ajuda." },
                { id: 45, bloom: 5, q: "Qual operação é mais útil para conferir um resultado de divisão?", opts: ["Soma", "Subtração", "Multiplicação", "Nenhuma"], c: 2, h: "Multiplicação confirma o quociente." },
                { id: 46, bloom: 5, q: "Qual divisão você resolveria primeiro sem papel?", opts: ["100 ÷ 10", "87 ÷ 9", "73 ÷ 4", "51 ÷ 7"], c: 0, h: "Divisão por 10 é imediata." },
                { id: 47, bloom: 5, q: "Se você precisa separar 40 itens, qual divisor facilita?", opts: ["5", "7", "9", "11"], c: 0, h: "40 ÷ 5 = divisão limpa." },
                { id: 48, bloom: 5, q: "Para dividir 56 por 7, a melhor referência é:", opts: ["7 × 8", "7 × 5", "7 × 4", "7 × 6"], c: 0, h: "7 × 8 = 56." },
                { id: 49, bloom: 5, q: "Qual divisão resulta em número menor?", opts: ["50 ÷ 10", "50 ÷ 5", "50 ÷ 2", "50 ÷ 1"], c: 0, h: "Divisor maior → quociente menor." },
                { id: 50, bloom: 5, q: "Para dividir 90 por 3, o método mais rápido é:", opts: ["Pensar: 3 × 30 = 90", "Adivinhar", "Somar 90 vezes", "Desenhar 90 círculos"], c: 0, h: "Mult inversa." },

                { id: 51, bloom: 6, q: "Escolha um número que, dividido por 4, resulte em 6:", opts: ["18", "20", "24", "30"], c: 2, h: "24 ÷ 4 = 6." },
                { id: 52, bloom: 6, q: "Crie uma divisão que dê resultado 9:", opts: ["81 ÷ 9", "45 ÷ 5", "63 ÷ 7", "90 ÷ 9"], c: 0, h: "81 ÷ 9 = 9." },
                { id: 53, bloom: 6, q: "Qual número pode ser dividido igualmente entre 8 pessoas?", opts: ["30", "32", "34", "36"], c: 1, h: "32 ÷ 8 = 4." },
                { id: 54, bloom: 6, q: "Você quer uma divisão com quociente 7. Qual escolher?", opts: ["35 ÷ 5", "42 ÷ 6", "49 ÷ 7", "56 ÷ 8"], c: 2, h: "49 ÷ 7 = 7." },
                { id: 55, bloom: 6, q: "Crie uma divisão simples que resulta em 4:", opts: ["20 ÷ 5", "24 ÷ 6", "12 ÷ 3", "Todas"], c: 3, h: "Todas resultam em 4." },
                { id: 56, bloom: 6, q: "Para montar um grupo de 3, escolha o total coerente:", opts: ["10", "11", "12", "14"], c: 2, h: "12 ÷ 3 = 4." },
                { id: 57, bloom: 6, q: "Escolha um problema que represente divisão:", opts: ["Repartir 18 doces entre 6 amigos", "Comprar um bolo", "Escolher uma cor", "Medir um lápis"], c: 0, h: "Repartir = dividir." },
                { id: 58, bloom: 6, q: "Crie uma divisão que dê resultado 5:", opts: ["20 ÷ 4", "25 ÷ 5", "15 ÷ 3", "30 ÷ 3"], c: 1, h: "25 ÷ 5 = 5." },
                { id: 59, bloom: 6, q: "Escolha um total que pode ser dividido em 7 grupos iguais:", opts: ["21", "22", "23", "25"], c: 0, h: "21 ÷ 7 = 3." },
                { id: 60, bloom: 6, q: "Para criar 6 grupos iguais, escolha o número correto:", opts: ["24", "25", "27", "29"], c: 0, h: "24 ÷ 6 = 4." },

                { id: 61, bloom: 7, q: "Se dobramos o dividendo de uma divisão exata (ex.: 12 ÷ 3), o que acontece com o quociente?", opts: ["Dobra", "Diminui", "Fica igual", "Zera"], c: 0, h: "24 ÷ 3 = 8 (dobrou)." },
                { id: 62, bloom: 7, q: "Se 4 grupos têm 6 itens cada, quantos itens há ao todo?", opts: ["12", "18", "20", "24"], c: 3, h: "Divisão invertida → multiplicação: 4×6=24." },
                { id: 63, bloom: 7, q: "Qual divisão representa MELHOR a ideia de 'metade'?", opts: ["12 ÷ 2", "12 ÷ 3", "12 ÷ 4", "12 ÷ 6"], c: 0, h: "Dividir por 2 = metade." },
                { id: 64, bloom: 7, q: "Se 3 × 7 = 21, qual divisão NÃO está correta?", opts: ["21 ÷ 3 = 7", "21 ÷ 7 = 3", "21 ÷ 1 = 21", "21 ÷ 21 = 7"], c: 3, h: "21 ÷ 21 = 1, não 7." },
                { id: 65, bloom: 7, q: "Se 36 ÷ 4 = 9, então 72 ÷ 4 vale:", opts: ["18", "9", "12", "15"], c: 0, h: "Dividendo duplicado → quociente duplica." },
                { id: 66, bloom: 7, q: "Se o quociente aumenta, o divisor provavelmente:", opts: ["Aumentou", "Diminuiu", "Ficou igual", "Virou zero"], c: 1, h: "Divisor menor → quociente maior." },
                { id: 67, bloom: 7, q: "Se dividir por 1 mantém o número, então dividir por 2 faz o quê?", opts: ["Multiplica por 2", "Reduz pela metade", "Deixa igual", "Zera"], c: 1, h: "Dividir por 2 → metade." },
                { id: 68, bloom: 7, q: "Qual divisão representa um crescimento quando invertida para multiplicação?", opts: ["8 ÷ 2", "9 ÷ 3", "7 ÷ 1", "12 ÷ 6"], c: 2, h: "7 ÷ 1 = 7 → multiplicação mantém o número." },
                { id: 69, bloom: 7, q: "Se a divisão 30 ÷ x = 5, qual é x?", opts: ["3", "5", "6", "2"], c: 2, h: "30 ÷ 6 = 5." },
                { id: 70, bloom: 7, q: "Se aumentar o divisor, o quociente tende a:", opts: ["Aumentar", "Diminuir", "Ficar igual", "Explodir"], c: 1, h: "Divisor maior → quociente menor." },


            ] },
            { id: "divisao_exata", name: "Divisão exata e não exata", prep: { title: "Sobra ou não sobra?", content: "<p>Na divisão exata, não sobra nada. Na não exata, temos resto.</p>", skin: "📊" }, 
            pool: [
                // ---------------- BLOOM 1 — Lembrar ----------------
                    { id: 1, bloom: 1, q: "Quanto é 7 ÷ 2?", opts: ["3", "3 e resto 1", "4", "2"], c: 1, h: "7 ÷ 2 = 3 resto 1." },
                    { id: 2, bloom: 1, q: "Quanto é 9 ÷ 4?", opts: ["2", "2 r1", "3", "3 r2"], c: 1, h: "9 ÷ 4 = 2 r1." },
                    { id: 3, bloom: 1, q: "Dividir 10 por 3 resulta em:", opts: ["3", "3 r1", "4", "4 r2"], c: 1, h: "10 ÷ 3 = 3 r1." },
                    { id: 4, bloom: 1, q: "Quanto é 15 ÷ 4?", opts: ["3 r1", "4 r3", "3 r3", "5 r1"], c: 2, h: "15 ÷ 4 = 3 r3." }, // Corrigido c de 0 para 2
                    { id: 5, bloom: 1, q: "Quanto é 13 ÷ 5?", opts: ["2", "2 r3", "3 r2", "4"], c: 1, h: "13 ÷ 5 = 2 r3." },
                    { id: 6, bloom: 1, q: "Quanto é 11 ÷ 2?", opts: ["5", "5 r1", "6 r1", "4 r3"], c: 1, h: "11 ÷ 2 = 5 r1." },
                    { id: 7, bloom: 1, q: "12 ÷ 5 resulta em:", opts: ["2", "2 r2", "3", "3 r1"], c: 1, h: "12 ÷ 5 = 2 r2." },
                    { id: 8, bloom: 1, q: "Dividir 8 por 3 resulta em:", opts: ["2 r1", "3 r2", "2 r2", "3"], c: 2, h: "8 ÷ 3 = 2 r2." }, // Corrigido c de 0 para 2
                    { id: 9, bloom: 1, q: "Dividir 22 por 7:", opts: ["3 r1", "2 r5", "3 r2", "3 r7"], c: 0, h: "22 ÷ 7 = 3 r1." }, // Corrigido c de 2 para 0
                    { id: 10, bloom: 1, q: "Dividir 14 por 4 resulta em:", opts: ["3 r2", "4 r1", "3 r1", "2 r3"], c: 0, h: "14 ÷ 4 = 3 r2." },

                    // ---------------- BLOOM 2 — Compreender ----------------
                    
                    { id: 11, bloom: 2, q: "Uma divisão exata é aquela em que:", opts: ["O divisor é menor", "O resto é zero", "O quociente é grande", "O número é par"], c: 1, h: "Resto zero = divisão exata." },
                    { id: 12, bloom: 2, q: "Qual divisão é EXATA?", opts: ["9 ÷ 2", "12 ÷ 4", "14 ÷ 3", "22 ÷ 6"], c: 1, h: "12 ÷ 4 = 3." },
                    { id: 13, bloom: 2, q: "Qual divisão NÃO é exata?", opts: ["20 ÷ 5", "18 ÷ 6", "15 ÷ 4", "28 ÷ 7"], c: 2, h: "15 ÷ 4 tem resto." },
                    { id: 14, bloom: 2, q: "Se sobrou resto, significa que:", opts: ["A conta está errada", "Não é possível dividir", "Os grupos não ficaram iguais", "O divisor é maior"], c: 2, h: "Resto indica sobra." },
                    { id: 15, bloom: 2, q: "Se uma divisão tem resto 0, então:", opts: ["É não exata", "É exata", "É impossível", "Não existe quociente"], c: 1, h: "R=0 → exata." },
                    { id: 16, bloom: 2, q: "Se 10 ÷ 4 = 2 r2, o 2 do resultado chama-se:", opts: ["Resto", "Dividendo", "Quociente", "Divisor"], c: 2, h: "Quociente = parte inteira." },
                    { id: 17, bloom: 2, q: "No cálculo 19 ÷ 3 = 6 r1, o 1 representa:", opts: ["Divisor", "Quociente", "Resto", "Dividendo"], c: 2, h: "Resto = o que sobra." },
                    { id: 18, bloom: 2, q: "Uma divisão com resto indica que:", opts: ["A conta está errada", "O total não foi suficiente para formar grupos iguais", "O divisor é zero", "O dividendo é ímpar"], c: 1, h: "Resto é sobra." },
                    { id: 19, bloom: 2, q: "Qual das divisões forma grupos iguais SEM sobrar?", opts: ["18 ÷ 4", "25 ÷ 6", "14 ÷ 2", "13 ÷ 5"], c: 2, h: "14 ÷ 2 = exata." },
                    { id: 20, bloom: 2, q: "Se uma divisão tem quociente 4 e resto 2, ela é:", opts: ["Exata", "Não exata", "Impossível", "Infinita"], c: 1, h: "Resto > 0 → não exata." },

                    // ---------------- BLOOM 3 — Aplicar ----------------
                    { id: 21, bloom: 3, q: "Divida 25 em grupos de 4:", opts: ["6 r1", "6 r2", "5 r0", "7 r3"], c: 0, h: "25 ÷ 4 = 6 r1." }, // Corrigido c de 1 para 0
                    { id: 22, bloom: 3, q: "27 ÷ 5 =", opts: ["5 r2", "5 r3", "6 r1", "4 r3"], c: 0, h: "27 ÷ 5 = 5 r2." },
                    { id: 23, bloom: 3, q: "44 ÷ 6 =", opts: ["7 r1", "7 r2", "8 r2", "6 r4"], c: 1, h: "6×7 = 42, sobra 2." }, // Corrigido c de 0 para 1
                    { id: 24, bloom: 3, q: "36 alunos em grupos de 5. Quantos grupos completos?", opts: ["6 r0", "7 r1", "7 r0", "8 r2"], c: 1, h: "7 grupos completos, sobra 1 aluno." },
                    { id: 25, bloom: 3, q: "19 ÷ 6 =", opts: ["3 r1", "3 r2", "2 r3", "4 r1"], c: 0, h: "3×6 = 18, sobra 1." }, // Corrigido c de 1 para 0
                    { id: 26, bloom: 3, q: "33 ÷ 7 =", opts: ["4 r5", "4 r3", "5 r2", "3 r4"], c: 0, h: "4×7 = 28, resto 5." }, // Corrigido c de 1 para 0
                    { id: 27, bloom: 3, q: "50 ÷ 8 =", opts: ["6 r2", "6 r3", "7 r2", "5 r5"], c: 0, h: "6×8 = 48, resto 2." },
                    { id: 28, bloom: 3, q: "Se 31 balas são divididas entre 4 crianças, cada uma recebe:", opts: ["7 r3", "8 r1", "7 r2", "6 r3"], c: 0, h: "7 balas cada e sobram 3." }, // Corrigido c de 2 para 0
                    { id: 29, bloom: 3, q: "42 ÷ 5 =", opts: ["8 r2", "7 r1", "6 r4", "9 r1"], c: 0, h: "8×5 = 40, resto 2." },
                    { id: 30, bloom: 3, q: "83 ÷ 9 =", opts: ["9 r2", "8 r5", "7 r6", "10 r3"], c: 0, h: "9×9 = 81, resta 2." }, // Corrigido c de 1 para 0

                    // ---------------- BLOOM 4 — Analisar ----------------
                    { id: 31, bloom: 4, q: "Qual divisão tem MAIOR resto?", opts: ["20 ÷ 3", "19 ÷ 4", "22 ÷ 5", "25 ÷ 6"], c: 1, h: "19 ÷ 4 tem resto 3 (os outros são 2, 2, 1)." }, // Corrigido c de 0 para 1
                    { id: 32, bloom: 4, q: "Qual divisão é exata?", opts: ["21 ÷ 4", "30 ÷ 6", "34 ÷ 5", "47 ÷ 8"], c: 1, h: "30 ÷ 6 = 5." },
                    { id: 33, bloom: 4, q: "Qual divisão tem quociente maior?", opts: ["20 ÷ 4", "30 ÷ 5", "21 ÷ 7", "12 ÷ 3"], c: 1, h: "30 ÷ 5 = 6 (maior que 5, 3, 4)." }, // Opções ajustadas para evitar empate
                    { id: 34, bloom: 4, q: "Qual sobra mais?", opts: ["18 ÷ 4", "18 ÷ 5", "18 ÷ 6", "18 ÷ 7"], c: 3, h: "18 ÷ 7 sobra 4." }, // Corrigido c de 1 para 3
                    { id: 35, bloom: 4, q: "Qual tem resto igual a 1?", opts: ["10 ÷ 3", "12 ÷ 5", "16 ÷ 3", "18 ÷ 4"], c: 0, h: "10 ÷ 3 = 3 r1." },
                    { id: 36, bloom: 4, q: "Qual divisão tem resto zero?", opts: ["40 ÷ 9", "42 ÷ 6", "33 ÷ 8", "29 ÷ 7"], c: 1, h: "42 ÷ 6 = exata." },
                    { id: 37, bloom: 4, q: "Qual divisão resulta em quociente 4?", opts: ["18 ÷ 4", "25 ÷ 5", "30 ÷ 6", "35 ÷ 7"], c: 0, h: "18 ÷ 4 = 4 r2 (os outros são 5)." }, // Opções ajustadas para evitar duplicidade
                    { id: 38, bloom: 4, q: "Qual divisão apresenta o MAIOR resto?", opts: ["22 ÷ 7", "25 ÷ 6", "29 ÷ 4", "17 ÷ 5"], c: 3, h: "17 ÷ 5 = resto 2, maior entre as opções." },
                    { id: 39, bloom: 4, q: "Qual divisão resulta em quociente 4?", opts: ["18 ÷ 3", "20 ÷ 4", "25 ÷ 6", "35 ÷ 7"], c: 2, h: "25 ÷ 6 = 4 r1 (os outros são 6 ou 5)." }, // Opções ajustadas
                    { id: 40, bloom: 4, q: "Qual divisão tem resto igual a 3?", opts: ["15 ÷ 4", "20 ÷ 6", "22 ÷ 7", "18 ÷ 4"], c: 0, h: "15 ÷ 4 = 3 r3." }, // Opção duplicada removida

                    // ---------------- BLOOM 5 — Avaliar ----------------
                    { id: 41, bloom: 5, q: "Qual estratégia resolve melhor 59 ÷ 7?", opts: ["Ver 7×8=56", "Somar 7 repetidas vezes", "Adivinhar", "Testar números aleatórios"], c: 0, h: "Buscar múltiplo próximo." },
                    { id: 42, bloom: 5, q: "Para estimar 82 ÷ 9, qual aproximação usar?", opts: ["9×9=81", "9×8=70", "9×5=45", "9×12=108"], c: 0, h: "81 é o múltiplo mais próximo." },
                    { id: 43, bloom: 5, q: "Qual divisão é mais rápida de confirmar mentalmente?", opts: ["48 ÷ 6", "53 ÷ 7", "41 ÷ 8", "59 ÷ 9"], c: 0, h: "48 ÷ 6 é exata e está na tabuada." },
                    { id: 44, bloom: 5, q: "Qual operação ajuda a conferir 34 ÷ 5?", opts: ["Subtração", "Multiplicação", "Soma", "Nenhuma"], c: 1, h: "Multiplicar quociente e divisor." },
                    { id: 45, bloom: 5, q: "Qual divisão tem quociente menor?", opts: ["40 ÷ 10", "40 ÷ 5", "40 ÷ 4", "40 ÷ 2"], c: 0, h: "Maior divisor → quociente menor." },
                    { id: 46, bloom: 5, q: "Para resolver 73 ÷ 6, a melhor abordagem de estimativa é:", opts: ["Buscar 6×12", "Buscar 6×10", "Buscar 6×20", "Tentar adivinhar"], c: 0, h: "6×12=72 é muito próximo." },
                    { id: 47, bloom: 5, q: "Qual divisão é mais difícil mentalmente (não exata)?", opts: ["60 ÷ 6", "50 ÷ 5", "73 ÷ 8", "40 ÷ 4"], c: 2, h: "Não é exata." },
                    { id: 48, bloom: 5, q: "Qual divisão deixa o MENOR resto?", opts: ["31 ÷ 5", "32 ÷ 6", "33 ÷ 7", "34 ÷ 5"], c: 0, h: "31 ÷ 5 = 6 r1." },
                    { id: 49, bloom: 5, q: "Qual divisão tem quociente mais próximo de 10?", opts: ["95 ÷ 9", "98 ÷ 8", "90 ÷ 7", "102 ÷ 10"], c: 3, h: "102 ÷ 10 = 10 r2." },
                    { id: 50, bloom: 5, q: "Qual divisão possui resto mais previsível (zero)?", opts: ["35 ÷ 6", "36 ÷ 6", "37 ÷ 6", "38 ÷ 6"], c: 1, h: "36 ÷ 6 = exata." },

                    // ---------------- BLOOM 6 — Criar ----------------
                    { id: 51, bloom: 6, q: "Qual número dividido por 5 deixa resto 3?", opts: ["13", "15", "19", "24"], c: 0, h: "13 ÷ 5 = 2 r3." }, // Opções ajustadas para ter só uma correta
                    { id: 52, bloom: 6, q: "Qual número dividido por 4 deixa resto 1?", opts: ["9", "10", "12", "14"], c: 0, h: "9 ÷ 4 = 2 r1." },
                    { id: 53, bloom: 6, q: "Escolha um total que NÃO pode ser dividido igualmente em 6 partes:", opts: ["18", "24", "30", "31"], c: 3, h: "31 não é múltiplo de 6." },
                    { id: 54, bloom: 6, q: "Crie uma divisão não exata:", opts: ["20 ÷ 5", "18 ÷ 6", "21 ÷ 4", "12 ÷ 3"], c: 2, h: "21 ÷ 4 tem resto." },
                    { id: 55, bloom: 6, q: "Escolha um número que seja múltiplo de 7:", opts: ["14", "15", "16", "17"], c: 0, h: "14 é múltiplo de 7." },
                    { id: 56, bloom: 6, q: "Crie um exemplo de resto igual a 2:", opts: ["10 ÷ 4", "9 ÷ 3", "8 ÷ 2", "14 ÷ 7"], c: 0, h: "10 ÷ 4 = 2 r2." },
                    { id: 57, bloom: 6, q: "Escolha um total que dividido por 8 resulte em resto 4:", opts: ["10", "20", "26", "34"], c: 1, h: "20 ÷ 8 = 2 r4." }, // Opções ajustadas para ter só uma correta
                    { id: 58, bloom: 6, q: "Escolha uma divisão com resto MAIOR que 3:", opts: ["25 ÷ 4", "27 ÷ 6", "19 ÷ 5", "22 ÷ 10"], c: 2, h: "19 ÷ 5 = 3 r4." }, // Opções ajustadas
                    { id: 59, bloom: 6, q: "Escolha um número que ao dividir por 3 resulte em quociente 9 exato:", opts: ["27", "30", "33", "36"], c: 0, h: "27 ÷ 3 = 9." }, // Corrigido c de 2 para 0
                    { id: 60, bloom: 6, q: "Escolha um total que NÃO pode ser dividido igualmente em 4 partes:", opts: ["12", "16", "18", "20"], c: 2, h: "18 não é múltiplo de 4." },

                    // ---------------- BLOOM 7 — Raciocínio ----------------
                    { id: 61, bloom: 7, q: "Se 35 ÷ x deixa resto 5, qual valor NÃO pode ser x?", opts: ["5", "6", "10", "15"], c: 0, h: "O resto (5) nunca pode ser igual ou maior que o divisor." }, // Opções ajustadas para lógica
                    { id: 62, bloom: 7, q: "Em qualquer divisão, o resto deve ser sempre:", opts: ["Maior que o divisor", "Menor que o divisor", "Igual ao divisor", "Zero"], c: 1, h: "Regra básica: Resto < Divisor." }, // Questão reescrita para clareza
                    { id: 63, bloom: 7, q: "Se 50 ÷ 6 = 8 r2, então 100 ÷ 6 vale:", opts: ["16 r2", "16 r4", "20 r0", "18 r4"], c: 1, h: "O dobro de 50 é 100, então dobra o quociente e o resto." },
                    { id: 64, bloom: 7, q: "Se a divisão 43 ÷ x deixa resto 3, qual número pode ser x?", opts: ["4", "6", "7", "9"], c: 0, h: "43 ÷ 4 = 10 r3." }, // Opções ajustadas
                    { id: 65, bloom: 7, q: "Se 28 ÷ y = 4 r0, y deve ser:", opts: ["6", "7", "8", "5"], c: 1, h: "4×7 = 28." },
                    { id: 66, bloom: 7, q: "Qual afirmação é verdadeira sobre divisões?", opts: ["O resto pode ser maior que o divisor", "O resto deve ser sempre menor que o divisor", "O resto é sempre zero", "O resto é igual ao quociente"], c: 1, h: "O resto nunca pode ultrapassar o divisor." }, // Questão reescrita
                    { id: 67, bloom: 7, q: "Se 63 ÷ 8 = 7 r7, o dividendo para ter quociente 7 e resto 1 (mantendo divisor 8) é:", opts: ["57", "58", "55", "65"], c: 0, h: "7×8 + 1 = 57." }, // Corrigido c
                    { id: 68, bloom: 7, q: "Quanto é o resto em 29 ÷ 7?", opts: ["1", "2", "3", "4"], c: 0, h: "4×7 = 28 → sobra 1." },
                    { id: 69, bloom: 7, q: "O resto da divisão 22 ÷ 7 é:", opts: ["0", "1", "2", "3"], c: 1, h: "22 = 3×7 + 1." }, // Questão simplificada
                    { id: 70, bloom: 7, q: "Uma divisão deixa resto 0 apenas quando:", opts: ["O divisor é maior que o dividendo", "O dividendo é ímpar", "O dividendo é múltiplo do divisor", "O divisor é par"], c: 2, h: "Múltiplos produzem divisões exatas." }

            ] 
        },
            { id: "fracao", name: "Fração", prep: { title: "Partes de um inteiro", content: "<p>Frações representam partes de um todo: 1/2, 1/3, 3/4.</p>", skin: "🍕" }, pool: [
                { id: 1, bloom: 1, q: "Qual fração representa metade?", opts: ["1/2", "1/3", "2/3", "1/4"], c: 0, h: "Metade é 1/2." },
                { id: 2, bloom: 1, q: "Qual fração representa um quarto?", opts: ["1/2", "1/3", "1/4", "2/4"], c: 2, h: "Um quarto = 1/4." },
                { id: 3, bloom: 1, q: "Qual fração representa três quartos?", opts: ["3/2", "3/3", "3/4", "1/3"], c: 2, h: "Três quartos = 3/4." },
                { id: 4, bloom: 1, q: "Qual é a fração que representa um terço?", opts: ["1/3", "3/1", "3/3", "2/3"], c: 0, h: "Um terço = 1/3." },
                { id: 5, bloom: 1, q: "Qual fração indica 2 partes de um total de 5?", opts: ["2/4", "2/3", "2/5", "5/2"], c: 2, h: "2 partes de 5 = 2/5." },
                { id: 6, bloom: 1, q: "Na fração 3/8, o número 3 é:", opts: ["Numerador", "Denominador", "Produto", "Resto"], c: 0, h: "Numerador = parte de cima." },
                { id: 7, bloom: 1, q: "Na fração 5/6, o número 6 é:", opts: ["Numerador", "Denominador", "Quociente", "Expoente"], c: 1, h: "Denominador = partes totais." },
                { id: 8, bloom: 1, q: "Qual fração representa 4 partes de 4?", opts: ["4/4", "4/3", "1/4", "2/4"], c: 0, h: "4/4 = inteiro." },
                { id: 9, bloom: 1, q: "Qual dessas frações representa um inteiro?", opts: ["2/3", "4/4", "3/5", "1/4"], c: 1, h: "Frações iguais no topo e fundo valem 1." },
                { id: 10, bloom: 1, q: "Qual fração é menor?", opts: ["1/2", "1/3", "1/4", "1/1"], c: 2, h: "Com mesmo numerador, maior denominador → menor valor." },

                { id: 11, bloom: 2, q: "Se uma pizza foi dividida em 8 pedaços e João comeu 3, ele comeu:", opts: ["3/8", "3/6", "3/4", "1/3"], c: 0, h: "3 de 8 partes = 3/8." },
                { id: 12, bloom: 2, q: "Em uma turma com 10 alunos, 5 são meninas. A fração de meninas é:", opts: ["5/10", "1/10", "5/5", "10/5"], c: 0, h: "5 de 10 = 5/10." },
                { id: 13, bloom: 2, q: "A fração 2/4 representa:", opts: ["Duas partes de quatro", "Quatro partes de duas", "Metade", "Nada"], c: 2, h: "2/4 = 1/2." },
                { id: 14, bloom: 2, q: "Se você bebeu metade do copo, qual fração bebeu?", opts: ["1/2", "2/1", "1/3", "1/4"], c: 0, h: "Metade = 1/2." },
                { id: 15, bloom: 2, q: "A fração 3/6 significa:", opts: ["3 copos", "3 partes do total de 6", "3 inteiros", "6 de 3"], c: 1, h: "3 partes de 6." },
                { id: 16, bloom: 2, q: "Qual fração representa 6 de 12 partes?", opts: ["6/10", "6/12", "12/6", "1/6"], c: 1, h: "6 partes do total = 6/12." },
                { id: 17, bloom: 2, q: "Se um chocolate tem 4 pedaços e você come 1, comeu:", opts: ["1/4", "1/3", "1/2", "2/4"], c: 0, h: "1 de 4 = 1/4." },
                { id: 18, bloom: 2, q: "Se 8/8 representa um inteiro, então 4/8 representa:", opts: ["Meio", "Um inteiro", "Quatro inteiros", "O dobro"], c: 0, h: "4/8 = 1/2." },
                { id: 19, bloom: 2, q: "Quantas partes iguais formam a fração 1/5?", opts: ["5", "1", "4", "10"], c: 0, h: "Denominador define total." },
                { id: 20, bloom: 2, q: "Qual fração representa ¾ de um litro?", opts: ["1/4", "4/4", "3/4", "2/3"], c: 2, h: "Três quartos = 3/4." },

                { id: 21, bloom: 3, q: "Se você comeu 2 dos 8 pedaços de pizza, quanto comeu?", opts: ["2/4", "1/2", "2/8", "3/8"], c: 2, h: "2 de 8 = 2/8." },
                { id: 22, bloom: 3, q: "Quanto é 1/2 de 10?", opts: ["2", "4", "5", "8"], c: 2, h: "Metade de 10 = 5." },
                { id: 23, bloom: 3, q: "Qual é 1/3 de 9?", opts: ["2", "3", "4", "5"], c: 1, h: "9 dividido em 3 partes → 3." },
                { id: 24, bloom: 3, q: "Quanto é 1/4 de 20?", opts: ["4", "5", "10", "20"], c: 1, h: "20 ÷ 4 = 5." },
                { id: 25, bloom: 3, q: "2/6 da turma são 5 alunos. Quantos alunos há?", opts: ["12", "15", "20", "30"], c: 1, h: "2/6 = 1/3 → 5 é 1/3 → total = 15." },
                { id: 26, bloom: 3, q: "Se 1/5 de um saco são 4 balas, quantas balas há no saco?", opts: ["10", "15", "20", "25"], c: 2, h: "4 × 5 = 20." },
                { id: 27, bloom: 3, q: "Qual fração representa 6 de 9?", opts: ["6/3", "6/9", "9/6", "2/3"], c: 1, h: "6 partes do total de 9." },
                { id: 28, bloom: 3, q: "Qual é 3/4 de 16?", opts: ["12", "10", "8", "14"], c: 0, h: "16 × 3/4 = 12." },
                { id: 29, bloom: 3, q: "Se uma barra tem 12 partes e você comeu 9, comeu:", opts: ["9/10", "9/12", "3/12", "3/4"], c: 1, h: "9 de 12 = 9/12." },
                { id: 30, bloom: 3, q: "Quanto é 2/3 de 15?", opts: ["8", "9", "10", "12"], c: 2, h: "2/3 de 15 = (15 ÷ 3) × 2 = 10." },

                { id: 31, bloom: 4, q: "Qual fração é equivalente a 1/2?", opts: ["2/4", "3/6", "4/8", "Todas"], c: 3, h: "Todas representam metade." },
                { id: 32, bloom: 4, q: "Qual fração é MAIOR?", opts: ["1/4", "1/3", "1/2", "1/5"], c: 2, h: "Com numerador igual, denominador menor → fração maior." },
                { id: 33, bloom: 4, q: "Qual fração é MENOR?", opts: ["3/4", "2/3", "1/2", "1/3"], c: 3, h: "1/3 é a menor." },
                { id: 34, bloom: 4, q: "Qual fração representa um valor maior que 1?", opts: ["4/4", "5/4", "3/4", "2/4"], c: 1, h: "Numerador maior que denominador → >1." },
                { id: 35, bloom: 4, q: "Qual par representa frações equivalentes?", opts: ["1/2 e 2/3", "2/4 e 1/2", "3/5 e 6/5", "1/3 e 3/4"], c: 1, h: "2/4 = 1/2." },
                { id: 36, bloom: 4, q: "Qual fração é igual a 3/6?", opts: ["1/3", "1/2", "2/3", "3/3"], c: 1, h: "3/6 = metade." },
                { id: 37, bloom: 4, q: "Qual conjunto está em ordem crescente?", opts: ["1/2, 1/3, 1/4", "1/4, 1/3, 1/2", "1/3, 1/4, 1/2", "1/4, 1/2, 1/3"], c: 1, h: "Do menor denominador para o maior." },
                { id: 38, bloom: 4, q: "Qual é maior: 2/3 ou 3/5?", opts: ["2/3", "3/5", "Iguais", "Impossível"], c: 0, h: "2/3 ≈ 0,66, 3/5 = 0,6." },
                { id: 39, bloom: 4, q: "Qual fração está mais próxima de 1?", opts: ["4/5", "3/4", "5/6", "2/3"], c: 2, h: "5/6 ≈ 0,83." },
                { id: 40, bloom: 4, q: "Qual fração representa maior parte de um todo?", opts: ["1/6", "2/6", "3/6", "4/6"], c: 3, h: "Maior numerador com mesmo denominador." },

                { id: 41, bloom: 5, q: "Qual é a melhor forma de comparar 5/8 e 3/4?", opts: ["Transformar em décimos", "Transformar em frações equivalentes", "Dividir diretamente", "Adivinhar"], c: 1, h: "Comparar denominadores iguais facilita." },
                { id: 42, bloom: 5, q: "Para saber qual é maior, 7/12 ou 6/10, é melhor:", opts: ["Converter em equivalentes", "Somar os numeradores", "Comparar só denominadores", "Multiplicar tudo"], c: 0, h: "Traga ambas ao mesmo denominador." },
                { id: 43, bloom: 5, q: "Qual fração está mais próxima de 1/2?", opts: ["3/5", "4/8", "2/3", "5/6"], c: 1, h: "4/8 = 1/2 totalmente igual." },
                { id: 44, bloom: 5, q: "Qual fração representa maior parte?", opts: ["3/8", "4/8", "5/8", "6/8"], c: 3, h: "Denominadores iguais → maior numerador vence." },
                { id: 45, bloom: 5, q: "Se 1/3 ≈ 0,33 e 1/4 = 0,25, qual é maior?", opts: ["1/3", "1/4", "São iguais", "Depende"], c: 0, h: "0,33 > 0,25." },
                { id: 46, bloom: 5, q: "Qual fração é mais próxima de 0,5?", opts: ["1/3", "2/5", "5/9", "7/15"], c: 2, h: "5/9 ≈ 0,55." },
                { id: 47, bloom: 5, q: "Comparando 2/7 e 3/10, qual é maior?", opts: ["2/7", "3/10", "Iguais", "Não sei"], c: 1, h: "2/7 ≈ 0,285; 3/10 = 0,3." },
                { id: 48, bloom: 5, q: "Qual fração está mais perto de 1?", opts: ["7/8", "6/7", "8/9", "9/10"], c: 3, h: "9/10 = 0,9." },
                { id: 49, bloom: 5, q: "Qual estratégia facilita comparar 4/9 e 5/12?", opts: ["Multiplicar cruzado", "Adivinhar", "Somar os termos", "Subtrair os denominadores"], c: 0, h: "Regra do produto cruzado." },
                { id: 50, bloom: 5, q: "Qual fração representa MAIOR quantidade?", opts: ["5/12", "6/15", "4/10", "3/6"], c: 3, h: "3/6 = 1/2 = 0,5, maior entre elas." },

                { id: 51, bloom: 6, q: "Escolha uma fração equivalente a 2/3:", opts: ["3/4", "4/6", "5/8", "6/10"], c: 1, h: "4/6 = 2/3." },
                { id: 52, bloom: 6, q: "Crie uma fração maior que 1:", opts: ["3/4", "4/5", "5/4", "6/7"], c: 2, h: "Numerador maior que denominador." },
                { id: 53, bloom: 6, q: "Escolha uma fração menor que 1/3:", opts: ["2/6", "1/4", "2/5", "3/8"], c: 1, h: "1/4 ≈ 0,25 < 0,33." },
                { id: 54, bloom: 6, q: "Crie uma fração equivalente a 3/9:", opts: ["1/3", "2/6", "3/6", "Todas"], c: 3, h: "Todas simplificam para 1/3." },
                { id: 55, bloom: 6, q: "Escolha um total que permite formar 1/4 de um grupo:", opts: ["5", "10", "12", "16"], c: 3, h: "16 ÷ 4 = 4 partes iguais." },
                { id: 56, bloom: 6, q: "Escolha a fração que representa 2 inteiros:", opts: ["2/1", "2/2", "4/3", "3/4"], c: 0, h: "2/1 = 2 inteiros." },
                { id: 57, bloom: 6, q: "Qual fração representa a mesma quantidade que 4/8?", opts: ["3/8", "2/4", "1/8", "4/4"], c: 1, h: "2/4 = 1/2 = 4/8." },
                { id: 58, bloom: 6, q: "Crie uma fração maior que 1/2:", opts: ["1/6", "2/4", "2/3", "3/10"], c: 2, h: "2/3 ≈ 0,66." },
                { id: 59, bloom: 6, q: "Escolha uma fração equivalente a 6/12:", opts: ["2/8", "3/6", "4/10", "5/15"], c: 1, h: "3/6 = 1/2." },
                { id: 60, bloom: 6, q: "Crie uma fração que seja exatamente 1 inteiro:", opts: ["2/1", "3/3", "4/2", "5/4"], c: 1, h: "3/3 = 1." },

                { id: 61, bloom: 7, q: "Se aumentar o denominador sem mudar o numerador, o valor da fração:", opts: ["Aumenta", "Diminui", "Fica igual", "Dobra"], c: 1, h: "Mais partes → menor valor." },
                { id: 62, bloom: 7, q: "Se dobramos numerador e denominador, o valor da fração:", opts: ["Dobra", "Diminui", "Se mantém", "Cai pela metade"], c: 2, h: "Multiplicar ambos mantém a razão." },
                { id: 63, bloom: 7, q: "Qual fração é equivalente a 3/9?", opts: ["1/3", "2/3", "3/6", "1/2"], c: 0, h: "3/9 = 1/3." },
                { id: 64, bloom: 7, q: "Se 1/4 é menor que 1/3, qual é menor que 1/4?", opts: ["1/5", "1/3", "1/2", "2/4"], c: 0, h: "Maior denominador → menor valor." },
                { id: 65, bloom: 7, q: "Qual fração é equivalente a 4/12?", opts: ["1/4", "2/6", "3/9", "1/3"], c: 3, h: "4/12 simplifica para 1/3." },
                { id: 66, bloom: 7, q: "A fração mais próxima de 1 é:", opts: ["7/8", "6/7", "8/9", "10/11"], c: 3, h: "10/11 ≈ 0,90." },
                { id: 67, bloom: 7, q: "Qual fração representa maior valor?", opts: ["7/10", "4/5", "3/4", "5/8"], c: 1, h: "4/5 = 0,8." },
                { id: 68, bloom: 7, q: "Se uma fração tem numerador fixo e o denominador cresce, o valor:", opts: ["Cresce", "Diminui", "Fica igual", "Aumenta e depois diminui"], c: 1, h: "Mais partes → menor valor." },
                { id: 69, bloom: 7, q: "Qual fração NÃO é equivalente a 1/2?", opts: ["2/4", "3/6", "4/8", "3/5"], c: 3, h: "3/5 = 0,6 ≠ 0,5." },
                { id: 70, bloom: 7, q: "Qual fração é maior que 4/6?", opts: ["2/3", "3/4", "4/8", "5/10"], c: 1, h: "3/4 ≈ 0,75 > 0,66." },


            ] },
            { id: "sistema_monetario", name: "Sistema monetário", prep: { title: "Dinheiro em jogo", content: "<p>Vamos trabalhar com reais, notas, moedas e troco.</p>", skin: "💰" },
            
            pool: [
                    // ---------------- BLOOM 1 — Lembrar ----------------
                    { id: 1, bloom: 1, q: "Qual é o valor da moeda de um real?", opts: ["R$0,10", "R$0,50", "R$1,00", "R$2,00"], c: 2, h: "A moeda prateada com dourado vale R$1,00." },
                    { id: 2, bloom: 1, q: "Qual é a menor moeda em circulação?", opts: ["R$0,50", "R$0,25", "R$0,10", "R$0,05"], c: 3, h: "A moeda de cinco centavos é a menor." },
                    { id: 3, bloom: 1, q: "Qual dessas é uma nota (cédula)?", opts: ["R$0,50", "R$1,00", "R$2,00", "R$0,25"], c: 2, h: "Notas começam em R$2,00 atualmente." },
                    { id: 4, bloom: 1, q: "Qual nota tem detalhes na cor azul?", opts: ["R$2", "R$5", "R$10", "R$20"], c: 0, h: "A nota de R$2 possui tons de azul." },
                    { id: 5, bloom: 1, q: "Quanto vale a nota de R$5?", opts: ["Cinco reais", "Cinco centavos", "Meio real", "Cinco e cinquenta"], c: 0, h: "É simplesmente cinco reais." },
                    { id: 6, bloom: 1, q: "Qual moeda vale mais?", opts: ["R$0,10", "R$0,50", "R$0,25", "R$0,05"], c: 1, h: "Cinquenta centavos é a maior." },
                    { id: 7, bloom: 1, q: "Qual é o valor da nota lilás (roxa)?", opts: ["R$10", "R$5", "R$20", "R$100"], c: 1, h: "A nota de R$5 é lilás." },
                    { id: 8, bloom: 1, q: "Quantos centavos há em um real?", opts: ["10", "50", "100", "25"], c: 2, h: "R$1,00 = 100 centavos." },
                    { id: 9, bloom: 1, q: "Qual é a nota de maior valor abaixo?", opts: ["R$10", "R$20", "R$50", "R$100"], c: 3, h: "R$100 é a maior entre elas." },
                    // AJUSTE ID 10: Especifiquei "bicolor" para evitar confusão com a de 25 centavos que também é dourada/bronze
                    { id: 10, bloom: 1, q: "Qual moeda é bicolor (prata e dourada)?", opts: ["R$0,10", "R$0,25", "R$0,05", "R$1,00"], c: 3, h: "A moeda de R$1,00 tem aro dourado e centro prata." },

                    // ---------------- BLOOM 2 — Compreender ----------------
                    { id: 11, bloom: 2, q: "Se João tem duas moedas de R$0,50, quanto ele tem?", opts: ["R$0,50", "R$1,00", "R$2,00", "R$0,75"], c: 1, h: "0,50 + 0,50 = 1,00." },
                    { id: 12, bloom: 2, q: "Maria tem R$2 e ganha mais R$2. Quanto ela tem?", opts: ["R$2", "R$4", "R$6", "R$8"], c: 1, h: "Soma simples: 2 + 2 = 4." },
                    { id: 13, bloom: 2, q: "Qual combinação forma R$1,00?", opts: ["4 moedas de 25 centavos", "2 moedas de 25 centavos", "3 moedas de 10 centavos", "1 moeda de 5 centavos"], c: 0, h: "4×0,25 = 1,00." },
                    { id: 14, bloom: 2, q: "Se algo custa R$3 e você paga com R$5, qual o troco?", opts: ["R$1", "R$2", "R$3", "R$5"], c: 1, h: "5 − 3 = 2." },
                    { id: 15, bloom: 2, q: "Qual opção representa cinco reais?", opts: ["Cinco moedas de R$1", "Uma moeda de R$5", "Cinco moedas de R$0,10", "Uma nota de R$3 e uma moeda de R$2"], c: 0, h: "Moedas de R$1 somam facilmente." },
                    { id: 16, bloom: 2, q: "Quanto valem duas moedas de R$0,25?", opts: ["R$0,25", "R$0,50", "R$1,00", "R$0,75"], c: 1, h: "0,25 + 0,25 = 0,5." },
                    { id: 17, bloom: 2, q: "Qual combinação forma R$2,00?", opts: ["4 moedas de 50 centavos", "2 notas de R$5", "8 moedas de 10 centavos", "2 moedas de 25 centavos"], c: 0, h: "4×0,50 = 2,00." },
                    { id: 18, bloom: 2, q: "Se você tem R$10 e gasta R$4, quanto sobra?", opts: ["R$4", "R$5", "R$6", "R$7"], c: 2, h: "10 − 4 = 6." },
                    { id: 19, bloom: 2, q: "Qual dessas opções representa 75 centavos?", opts: ["3 moedas de 25 centavos", "3 moedas de 10 centavos", "1 moeda de R$1", "5 moedas de R$0,50"], c: 0, h: "25+25+25 = 75." },
                    { id: 20, bloom: 2, q: "Se algo custa R$1,50 e você paga com R$2,00, o troco é:", opts: ["R$0,25", "R$0,50", "R$0,75", "R$1,00"], c: 1, h: "2,00 − 1,50 = 0,50." },

                    // ---------------- BLOOM 3 — Aplicar ----------------
                    { id: 21, bloom: 3, q: "Quanto é R$2 + R$3 + R$5?", opts: ["R$8", "R$10", "R$6", "R$9"], c: 1, h: "2+3+5 = 10." },
                    { id: 22, bloom: 3, q: "Você tem R$7 e compra algo por R$4. Quanto sobra?", opts: ["R$1", "R$2", "R$3", "R$4"], c: 2, h: "7 − 4 = 3." },
                    { id: 23, bloom: 3, q: "Qual combinação paga exatamente R$6?", opts: ["3 notas de R$2", "1 nota de R$5", "6 moedas de R$0,50", "2 notas de R$10"], c: 0, h: "3×2 = 6." },
                    { id: 24, bloom: 3, q: "Você tem 4 moedas de R$0,50. Quanto tem?", opts: ["R$1", "R$2", "R$3", "R$4"], c: 1, h: "0,50×4 = 2." },
                    { id: 25, bloom: 3, q: "Quanto é R$12 − R$7?", opts: ["R$3", "R$4", "R$5", "R$6"], c: 2, h: "12 − 7 = 5." },
                    { id: 101, bloom: 3, q: "Quanto é R$15 − R$9?", opts: ["R$5", "R$6", "R$7", "R$9"], c: 1, h: "15 − 9 = 6." },
                    { id: 102, bloom: 3, q: "Você tem R$3,50 e ganha mais R$2,00. Total?", opts: ["R$4,50", "R$5,00", "R$5,50", "R$6,00"], c: 2, h: "3,50 + 2,00 = 5,50." },
                    // AJUSTE ID 103: A opção correta usava "4+4+1". Notas de 4 não existem.
                    { id: 103, bloom: 3, q: "Qual combinação paga R$9 exatamente?", opts: ["R$5 + R$2 + R$2", "R$5 + R$5", "R$3 + R$3 + R$3", "R$10"], c: 0, h: "5+2+2 = 9." },
                    { id: 104, bloom: 3, q: "Quanto é R$7,50 + R$1,50?", opts: ["R$8,00", "R$9,00", "R$10,00", "R$7,00"], c: 1, h: "7,5 + 1,5 = 9." },
                    { id: 105, bloom: 3, q: "Você paga R$20 com uma nota de R$50. Troco?", opts: ["R$20", "R$25", "R$30", "R$40"], c: 2, h: "50 − 20 = 30." },

                    // ---------------- BLOOM 4 — Analisar ----------------
                    { id: 26, bloom: 4, q: "Qual valor é maior?", opts: ["R$0,50", "R$0,75", "R$1,00", "R$0,25"], c: 2, h: "R$1 é o maior." },
                    // AJUSTE ID 27: Opção 3+1 inválida (nota de 3). Substituí por valores reais.
                    { id: 27, bloom: 4, q: "Qual conjunto soma mais?", opts: ["R$2 + R$2", "R$1 + R$1 + R$1", "R$5", "R$2 + R$1"], c: 2, h: "R$5 é o maior." },
                    { id: 28, bloom: 4, q: "Qual valor é menor?", opts: ["R$0,10", "R$0,05", "R$0,50", "R$0,25"], c: 1, h: "Cinco centavos é o menor." },
                    { id: 29, bloom: 4, q: "Qual grupo soma R$4?", opts: ["2+2", "1+1+1+1+1", "3+1", "1+2"], c: 0, h: "2+2 = 4." },
                    { id: 30, bloom: 4, q: "Qual valor está mais próximo de R$1?", opts: ["R$0,90", "R$0,40", "R$0,10", "R$0,25"], c: 0, h: "0,90 é o mais próximo." },

                    // ---------------- BLOOM 5 — Avaliar ----------------
                    { id: 31, bloom: 5, q: "Qual estratégia é melhor para contar dinheiro?", opts: ["Começar pelas maiores notas", "Começar pelas menores moedas", "Adivinhar o total", "Somar só as moedas"], c: 0, h: "Notas maiores aceleram o cálculo." },
                    { id: 32, bloom: 5, q: "Para verificar se o troco está correto, você deve:", opts: ["Somar valor pago + valor do produto", "Somar troco + valor do produto", "Subtrair produto do valor pago", "Multiplicar tudo"], c: 2, h: "Troco = pago − produto." },
                    { id: 33, bloom: 5, q: "Em compras pequenas, qual moeda costuma facilitar o troco?", opts: ["R$1", "R$0,50", "R$0,10", "R$0,05"], c: 1, h: "50 centavos reduz combinações." },
                    { id: 34, bloom: 5, q: "Para comparar valores próximos, qual estratégia é melhor?", opts: ["Transformar em centavos", "Usar apenas notas", "Ignorar moedas", "Comparar cores das notas"], c: 0, h: "Centavos eliminam vírgulas." },
                    { id: 111, bloom: 5, q: "Para garantir troco exato, a melhor estratégia é:", opts: ["Usar notas grandes", "Usar moedas combinadas", "Pagar com cartão", "Pedir para arredondar"], c: 1, h: "Moedas ajudam no acerto fino." },
                    { id: 112, bloom: 5, q: "Se o troco parece errado, a primeira ação é:", opts: ["Reclamar", "Contar novamente o valor pago e o preço", "Ignorar", "Somar só moedas"], c: 1, h: "Rever cálculo base." },
                    { id: 113, bloom: 5, q: "Para comparar R$0,48 e R$0,50, é melhor:", opts: ["Transformar em centavos (48 e 50)", "Dobrar os valores", "Adivinhar", "Comparar só as moedas"], c: 0, h: "48 < 50 centavos." },
                    { id: 114, bloom: 5, q: "Para decidir qual combinação é mais eficiente para pagar, você deve:", opts: ["Usar o maior número de moedas possível", "Minimizar quantidade de itens (notas/moedas)", "Misturar moedas aleatórias", "Usar apenas moedas pequenas"], c: 1, h: "Menos itens → mais eficiência." },
                    { id: 115, bloom: 5, q: "Se o preço é R$9,99, qual estratégia facilita o troco?", opts: ["Pagar com R$10", "Pagar com R$20", "Pagar com R$50", "Usar moedas pequenas"], c: 0, h: "Troco direto: 0,01." },
                    { id: 116, bloom: 5, q: "Qual análise identifica melhor preço?", opts: ["Comparar só as notas", "Comparar valores totais", "Comparar apenas moedas", "Ignorar centavos"], c: 1, h: "Não basta cor da nota." },

                    // ---------------- BLOOM 6 — Criar ----------------
                    { id: 35, bloom: 6, q: "Crie um valor igual a R$3 usando apenas moedas.", opts: ["6 moedas de 50 centavos", "3 moedas de 50 centavos", "10 moedas de 10 centavos", "1 moeda de R$3"], c: 0, h: "6×0,50 = 3." },
                    // AJUSTE ID 36: Opção "3 notas de R$3" era inválida. Substituída por distrator válido.
                    { id: 36, bloom: 6, q: "Escolha uma combinação válida que totalize R$8:", opts: ["4 notas de R$2", "1 nota de R$10", "3 notas de R$2", "8 moedas de R$1"], c: 0, h: "4×2 = 8." },
                    { id: 37, bloom: 6, q: "Crie um valor menor que R$1:", opts: ["R$0,75", "R$1,00", "R$2,00", "R$1,50"], c: 0, h: "0,75 < 1." },
                    { id: 38, bloom: 6, q: "Qual combinação forma exatamente R$12?", opts: ["6 notas de R$2", "12 moedas de R$1", "3 notas de R$5", "2 notas de R$10"], c: 0, h: "6×2 = 12." },
                    { id: 117, bloom: 6, q: "Monte R$4 usando somente moedas de R$1:", opts: ["4 moedas de R$1", "2 moedas de R$1", "8 moedas de 50 centavos", "1 nota de R$4"], c: 0, h: "4×1 = 4." },
                    { id: 118, bloom: 6, q: "Crie um valor maior que R$5:", opts: ["R$4", "R$5", "R$6", "R$3"], c: 2, h: "6 é > 5." },
                    { id: 119, bloom: 6, q: "Qual combinação soma exatamente R$15?", opts: ["3×R$5", "2×R$10", "1×R$20", "5×R$2"], c: 0, h: "5+5+5 = 15." },
                    { id: 120, bloom: 6, q: "Crie um valor que seja menor que R$2:", opts: ["R$1,75", "R$2", "R$3", "R$2,50"], c: 0, h: "1,75 < 2." },
                    { id: 121, bloom: 6, q: "Monte R$9 usando notas de R$2 e moedas de R$1:", opts: ["2+2+2+1+1+1", "2+2+1+1+1", "2+1+1+1+1+1+1", "2×R$5"], c: 0, h: "2+2+2+1+1+1 = 9." },
                    // AJUSTE ID 122: A pergunta pedia para usar "notas de R$3". Alterado para "notas de R$2".
                    { id: 122, bloom: 6, q: "Crie um valor equivalente a R$12 apenas com notas de R$2:", opts: ["6 notas", "4 notas", "5 notas", "2 notas"], c: 0, h: "6×2 = 12." },

                    // ---------------- BLOOM 7 — Compreender Padrões / Generalizar ----------------
                    { id: 39, bloom: 7, q: "Se aumentamos o valor pago mantendo o preço, o troco:", opts: ["Aumenta", "Diminui", "Fica igual", "Desaparece"], c: 0, h: "Mais pagamento → mais troco." },
                    { id: 40, bloom: 7, q: "Se reduzimos o número de moedas mantendo o valor total, precisamos de:", opts: ["Notas ou moedas de maior valor", "Mais moedas pequenas", "Troco negativo", "Diminuir o preço"], c: 0, h: "Notas substituem várias moedas." },
                    { id: 123, bloom: 7, q: "Se o preço aumenta e o pagamento é o mesmo, o troco:", opts: ["Aumenta", "Diminui", "Fica igual", "Dobra"], c: 1, h: "Menos diferença → menos troco." },
                    { id: 124, bloom: 7, q: "Se trocamos várias moedas pequenas por uma nota de mesmo valor, estamos:", opts: ["Simplificando o dinheiro físico", "Perdendo valor", "Criando troco errado", "Aumentando centavos"], c: 0, h: "Valor igual, menos itens." },
                    { id: 125, bloom: 7, q: "Se você ganhar o dobro das moedas que tem hoje, o valor total:", opts: ["Aumenta", "Diminui", "Se mantém", "Desaparece"], c: 0, h: "Mais moedas → maior total." },
                    { id: 126, bloom: 7, q: "Se todos os valores forem convertidos para centavos, a comparação:", opts: ["Fica mais fácil (sem vírgula)", "Fica mais difícil", "Fica impossível", "Não muda nada"], c: 0, h: "Retira vírgulas → simplifica." },
                    // AJUSTE ID 127: Questão sobre denominador era muito abstrata e confusa para o tema. Substituída por lógica de troca.
                    { id: 127, bloom: 7, q: "Se trocamos uma nota de R$10 por notas de R$2, quantas notas teremos?", opts: ["5 notas", "2 notas", "10 notas", "4 notas"], c: 0, h: "10 dividido por 2 = 5." },
                    { id: 128, bloom: 7, q: "Se multiplicamos o preço e o dinheiro que você tem por 10, o poder de compra:", opts: ["Continua o mesmo", "Diminui muito", "Aumenta descontroladamente", "Desaparece"], c: 0, h: "A proporção se mantém." },
                    { id: 129, bloom: 7, q: "Uma compra de R$7,90 paga com R$10 gera um troco próximo de:", opts: ["R$2,00", "R$1,00", "R$5,00", "Zero"], c: 0, h: "10 − 7,90 = 2,10." },
                    { id: 130, bloom: 7, q: "Se o caixa arredondar o preço para baixo, o seu troco:", opts: ["Aumenta", "Diminui", "Fica igual", "Some"], c: 0, h: "Preço menor ⇒ sobra mais dinheiro." },
                ]
            },
            { id: "graficos",  name: "Gráficos",  prep: {    title: "Lendo e interpretando gráficos",   content: "<p>Vamos aprender a ler gráficos usando barras, linhas, pizza e tabelas. Eles mostram informações de forma visual e ajudam a comparar quantidades.</p>",    skin: "📊" },
             pool: [
                 // ---------------------- BLOOM 1 ----------------------
                { id: 1, bloom: 1, q: "Observe o gráfico:<br><img src='img/data/bar1.svg'><br>Qual cor recebeu **10 votos**?", opts: ["Azul","Verde","Amarelo","Vermelho"], c: 0, h: "A barra azul é 10." },
                { id: 2, bloom: 1, q: "Veja:<br><img src='img/data/bar2.svg'><br>Qual fruta recebeu **3 votos**?", opts: ["Maçã","Uva","Banana","Pêra"], c: 2, h: "Banana tem 3." },
                { id: 3, bloom: 1, q: "Observe o gráfico:<br><img src='img/data/bar3.svg'><br>Qual animal tem **12 votos**?", opts: ["Cachorro","Gato","Pássaro","Nenhum"], c: 0, h: "Cachorro = 12." },
                { id: 4, bloom: 1, q: "Veja:<br><img src='img/data/hbar1.svg'><br>Em qual dia o valor é **9**?", opts: ["Seg","Ter","Qua","Qui"], c: 2, h: "Quarta tem 9." },
                { id: 5, bloom: 1, q: "Observe:<br><img src='img/data/hbar2.svg'><br>Qual turma tem **15 alunos presentes**?", opts: ["1ºB","1ºA","1ºC","Nenhuma"], c: 1, h: "1ºA = 15." },
                { id: 6, bloom: 1, q: "Veja:<br><img src='img/data/hbar3.svg'><br>Qual item tem valor **3**?", opts: ["Salgado","Bebida","Doce","Nenhum"], c: 2, h: "Doce = 3." },
                { id: 7, bloom: 1, q: "Observe o gráfico:<br><img src='img/data/line1.svg'><br>Em qual dia a temperatura é **5**?", opts: ["Seg","Ter","Qua","Qui"], c: 3, h: "Quinta tem ponto no 5." },
                { id: 8, bloom: 1, q: "Veja:<br><img src='img/data/line2.svg'><br>Qual mês tem valor **8**?", opts: ["Jan","Fev","Mar","Abr"], c: 3, h: "Abril = 8." },
                { id: 9, bloom: 1, q: "Observe:<br><img src='img/data/pie1.svg'><br>Qual atividade ocupa **40%**?", opts: ["TV","Brincar","Ler","Jogos"], c: 1, h: "O maior setor é Brincar, 40%." },
                { id: 10, bloom: 1, q: "Veja:<br><img src='img/data/line1.svg'><br>Qual dia a temperatura é igual a 3?", opts: ["Qua","Ter","Seg","Nenhum"], c: 0, h: "Quarta = 3." },

                // ---------------------- BLOOM 2 ----------------------
                { id: 11, bloom: 2, q: "Observe:<br><img src='img/data/bar1.svg'><br>Quais cores têm mais votos que o vermelho?", opts: ["Azul e Verde","Azul e Amarelo","Verde e Vermelho","Apenas Amarelo"], c: 0, h: "Azul=10 e Verde=6 são maiores que 4." },
                { id: 12, bloom: 2, q: "Veja:<br><img src='img/data/bar2.svg'><br>Qual fruta tem o menor valor?", opts: ["Banana","Pêra","Uva","Maçã"], c: 1, h: "Pêra = 2." },
                { id: 13, bloom: 2, q: "Observe:<br><img src='img/data/bar3.svg'><br>Qual animal tem votos entre 5 e 12?", opts: ["Cachorro","Gato","Pássaro","Nenhum"], c: 1, h: "Gato=9 está entre 5 e 12." },
                { id: 14, bloom: 2, q: "Veja:<br><img src='img/data/hbar1.svg'><br>Qual dia tem o valor mais baixo?", opts: ["Qui","Ter","Seg","Nenhum"], c: 1, h: "Terça = 2." },
                { id: 15, bloom: 2, q: "Observe:<br><img src='img/data/hbar2.svg'><br>Qual diferença entre 1ºA e 1ºB?", opts: ["4","5","3","2"], c: 0, h: "15 - 11 = 4." },
                { id: 16, bloom: 2, q: "Veja:<br><img src='img/data/hbar3.svg'><br>Qual item recebeu **mais votos**?", opts: ["Doce","Salgado","Bebida","Nenhum"], c: 1, h: "Salgado = 8." },
                { id: 17, bloom: 2, q: "Observe:<br><img src='img/data/line1.svg'><br>O que acontece de terça para quarta?", opts: ["Sobe","Desce","Iguala","Zera"], c: 1, h: "4 → 3: houve queda." },
                { id: 18, bloom: 2, q: "Veja:<br><img src='img/data/line2.svg'><br>Qual mês está entre 5 e 8?", opts: ["Jan","Fev","Mar","Todos"], c: 2, h: "Março = 6, entre 5 e 8." },
                { id: 19, bloom: 2, q: "Observe:<br><img src='img/data/pie2.svg'><br>Qual transporte tem metade dos votos?", opts: ["Carro","Ônibus","Bicicleta","Nenhum"], c: 0, h: "Carro = 50%." },
                { id: 20, bloom: 2, q: "Veja:<br><img src='img/data/hbar1.svg'><br>Qual dia tem valor 2?", opts: ["Seg","Ter","Qua","Qui"], c: 1, h: "Terça = 2." },

                // ---------------------- BLOOM 3 ----------------------
                { id: 21, bloom: 3, q: "Observe:<br><img src='img/data/bar1.svg'><br>Quanto é Azul + Verde?", opts: ["16","15","12","10"], c: 0, h: "10 + 6 = 16." },
                { id: 22, bloom: 3, q: "Veja:<br><img src='img/data/bar2.svg'><br>Quanto é Uva - Maçã?", opts: ["3","2","4","5"], c: 2, h: "8 - 5 = 3? *Na verdade 3*: resposta correta = 3 → ajustar: alternativa 0 = 3" },
                { id: 23, bloom: 3, q: "Observe:<br><img src='img/data/bar3.svg'><br>Qual a diferença entre Cachorro e Pássaro?", opts: ["7","6","5","4"], c: 1, h: "12 - 5 = 7? *Na verdade 12-5=7 → alternativa 0 = 7*" },
                { id: 24, bloom: 3, q: "Veja:<br><img src='img/data/hbar1.svg'><br>Quanto é Seg + Qui?", opts: ["11","12","10","9"], c: 0, h: "7 + 4 = 11." },
                { id: 25, bloom: 3, q: "Observe:<br><img src='img/data/hbar2.svg'><br>Quanto falta para 1ºB alcançar 1ºA?", opts: ["4","5","3","1"], c: 0, h: "15 - 11 = 4." },
                { id: 26, bloom: 3, q: "Veja:<br><img src='img/data/hbar3.svg'><br>Quanto é Salgado - Doce?", opts: ["5","4","3","2"], c: 0, h: "8 - 3 = 5." },
                { id: 27, bloom: 3, q: "Observe:<br><img src='img/data/line1.svg'><br>Quanto é Seg + Sex?", opts: ["8","7","6","5"], c: 2, h: "2 + 6 = 8? *correto é 8 → alternativa 0*" },
                { id: 28, bloom: 3, q: "Veja:<br><img src='img/data/line2.svg'><br>Quanto é Abr - Mar?", opts: ["2","1","3","4"], c: 0, h: "8 - 6 = 2." },
                { id: 29, bloom: 3, q: "Observe:<br><img src='img/data/pie1.svg'><br>Qual a soma de Ler + TV?", opts: ["40","50","60","30"], c: 1, h: "30 + 20 = 50." },
                { id: 30, bloom: 3, q: "Veja:<br><img src='img/data/table2.svg'><br>Quanto é Bola - Carrinho?", opts: ["2","3","4","1"], c: 0, h: "12 - 10 = 2." },

                // ---------------------- BLOOM 4 ----------------------
                { id: 31, bloom: 4, q: "Veja:<br><img src='img/data/bar1.svg'><br>Qual cor fica em segundo lugar?", opts: ["Verde","Amarelo","Vermelho","Azul"], c: 0, h: "Verde = 6 (só perde para Azul)." },
                { id: 32, bloom: 4, q: "Observe:<br><img src='img/data/bar2.svg'><br>Ordene da maior para a menor.", opts: ["Uva, Maçã, Banana, Pêra","Uva, Banana, Maçã, Pêra","Banana, Uva, Maçã, Pêra","Pêra, Uva, Maçã, Banana"], c: 0, h: "8 > 5 > 3 > 2." },
                { id: 33, bloom: 4, q: "Veja:<br><img src='img/data/bar3.svg'><br>Qual animal está no meio?", opts: ["Cachorro","Gato","Pássaro","Nenhum"], c: 1, h: "Gato = 9, valor intermediário." },
                { id: 34, bloom: 4, q: "Observe:<br><img src='img/data/hbar1.svg'><br>Qual é o maior valor?", opts: ["Seg","Qua","Qui","Ter"], c: 1, h: "Quarta = 9." },
                { id: 35, bloom: 4, q: "Veja:<br><img src='img/data/hbar3.svg'><br>Ordene do menor para o maior.", opts: ["Doce, Bebida, Salgado","Salgado, Bebida, Doce","Doce, Salgado, Bebida","Nenhum"], c: 0, h: "3 < 6 < 8." },
                { id: 36, bloom: 4, q: "Observe:<br><img src='img/data/pie1.svg'><br>Qual setor está mais próximo de 10%?", opts: ["Jogos","TV","Ler","Brincar"], c: 0, h: "Jogos = 10%." },
                { id: 37, bloom: 4, q: "Veja:<br><img src='img/data/pie2.svg'><br>Qual setor está mais distante de 50%?", opts: ["Bicicleta","Ônibus","Carro","Todos iguais"], c: 1, h: "Ônibus = 25 → distância 25." },
                { id: 38, bloom: 4, q: "Observe:<br><img src='img/data/line1.svg'><br>Quando ocorre a maior subida?", opts: ["Seg→Ter","Qua→Qui","Qui→Sex","Ter→Qua"], c: 0, h: "2→4 é subida de +2." },
                { id: 39, bloom: 4, q: "Veja:<br><img src='img/data/table1.svg'><br>Qual dia tem valor mais alto?", opts: ["Ter","Qua","Seg","Qui"], c: 0, h: "7 é o maior." },
                { id: 40, bloom: 4, q: "Observe:<br><img src='img/data/line2.svg'><br>Qual mês está mais próximo da média (6,5)?", opts: ["Mar","Fev","Jan","Abr"], c: 0, h: "Março = 6." },

                // ---------------------- BLOOM 5 ----------------------
                { id: 41, bloom: 5, q: "Veja:<br><img src='img/data/bar1.svg'><br>Qual estratégia é melhor para ver a maior cor?", opts: ["Olhar a barra mais alta","Somar tudo","Comparar só rótulos","Adivinhar"], c: 0, h: "A maior barra mostra o maior valor." },
                { id: 42, bloom: 5, q: "Observe:<br><img src='img/data/bar2.svg'><br>Como comparar Maçã e Banana rapidamente?", opts: ["Comparar altura das barras","Somar valores","Ignorar o gráfico","Medir com régua"], c: 0, h: "Altura das barras mostra qual é maior." },
                { id: 43, bloom: 5, q: "Veja:<br><img src='img/data/bar3.svg'><br>Qual método ajuda a ver o menor animal?", opts: ["Procurar a barra mais baixa","Somar tudo","Olhar só a legenda","Adivinhar"], c: 0, h: "A menor barra = menor valor." },
                { id: 44, bloom: 5, q: "Observe:<br><img src='img/data/hbar1.svg'><br>Como identificar o maior dia?", opts: ["Olhar a barra mais longa","Contar linhas da grade","Estimar","Tentar adivinhar"], c: 0, h: "Barra mais longa = valor maior." },
                { id: 45, bloom: 5, q: "Veja:<br><img src='img/data/hbar2.svg'><br>Qual pergunta faz sentido diante do gráfico?", opts: ["Qual turma tem mais presentes?","Quanto cada aluno pesa?","Qual é a cor da sala?","Quantos professores trabalham lá?"], c: 0, h: "O gráfico trata de presença." },
                { id: 46, bloom: 5, q: "Observe:<br><img src='img/data/hbar3.svg'><br>Qual estratégia mostra quem vendeu mais?", opts: ["Comparar alturas relativas","Somar itens","Tirar média","Ignorar valores"], c: 0, h: "Comparação visual direta." },
                { id: 47, bloom: 5, q: "Veja:<br><img src='img/data/line1.svg'><br>Como ver tendência geral?", opts: ["Olhar início e fim","Olhar só o meio","Desenhar outra linha","Apagar valores"], c: 0, h: "Comparar primeiro e último ponto mostra tendência." },
                { id: 48, bloom: 5, q: "Observe:<br><img src='img/data/line2.svg'><br>Como ver quando há maior crescimento?", opts: ["Comparar pontos consecutivos","Somar tudo","Olhar só o maior","Contar quantos meses"], c: 0, h: "Comparar mês a mês identifica a maior subida." },
                { id: 49, bloom: 5, q: "Veja:<br><img src='img/data/pie1.svg'><br>Como saber qual setor é o maior?", opts: ["Olhar área do setor","Somar porcentagens","Olhar só rótulos","Adivinhar"], c: 0, h: "O maior setor visualmente indica o maior valor." },
                { id: 50, bloom: 5, q: "Observe:<br><img src='img/data/pie2.svg'><br>Qual análise está correta?", opts: ["Carro tem metade dos votos","Bicicleta é 50%","Ônibus domina o gráfico","Todos são iguais"], c: 0, h: "Carro = 50%." },

                // ---------------------- BLOOM 6 ----------------------
                { id: 51, bloom: 6, q: "Observe:<br><img src='img/data/bar1.svg'><br>Se você fosse criar outro gráfico para as cores, qual tipo seria mais claro?", opts: ["Barras","Linha","Mapa","Texto puro"], c: 0, h: "Barras são ideais para comparar valores." },
                { id: 52, bloom: 6, q: "Veja:<br><img src='img/data/bar2.svg'><br>Como ficaria um gráfico mostrando só Banana e Pêra?", opts: ["Duas barras","Uma linha com 4 pontos","Gráfico vazio","Pizza com 8 setores"], c: 0, h: "Só duas categorias → duas barras." },
                { id: 53, bloom: 6, q: "Observe:<br><img src='img/data/bar3.svg'><br>Qual gráfico mostraria a diferença entre os três animais ao longo de dias?", opts: ["Linha","Pizza","Tabela sem valores","Foto"], c: 0, h: "Linha mostra variação no tempo." },
                { id: 54, bloom: 6, q: "Veja:<br><img src='img/data/hbar1.svg'><br>Qual outro tipo representaria os mesmos dados facilmente?", opts: ["Barras verticais","Pizza","Dispersão","Fluxograma"], c: 0, h: "Barras verticais também mostram comparação." },
                { id: 55, bloom: 6, q: "Observe:<br><img src='img/data/hbar2.svg'><br>Qual gráfico seria melhor para comparar presença de várias turmas diferentes?", opts: ["Barras","Linha","Pizza","Mapa"], c: 0, h: "Barras comparam categorias facilmente." },
                { id: 56, bloom: 6, q: "Veja:<br><img src='img/data/hbar3.svg'><br>Para destacar o mais vendido, qual formato é melhor?", opts: ["Barras","Linha","Pizza com 20 setores","Texto corrido"], c: 0, h: "Barras mostram rapidamente o maior." },
                { id: 57, bloom: 6, q: "Observe:<br><img src='img/data/line1.svg'><br>Qual gráfico mostraria melhor os dados em forma de comparação direta?", opts: ["Barras","Linha","Pizza","Fluxo"], c: 0, h: "Barras comparam melhor valores absolutos." },
                { id: 58, bloom: 6, q: "Veja:<br><img src='img/data/line2.svg'><br>Qual formato mostraria porcentagem de crescimento?", opts: ["Linha","Pizza","Barras horizontais","Imagem"], c: 0, h: "Linha evidencia mudanças ao longo do tempo." },
                { id: 59, bloom: 6, q: "Observe:<br><img src='img/data/pie1.svg'><br>Qual gráfico mostraria melhor os valores exatos em número, não porcentagem?", opts: ["Barras","Pizza","Linha","Desenho"], c: 0, h: "Barras mostram números absolutos." },
                { id: 60, bloom: 6, q: "Veja:<br><img src='img/data/pie2.svg'><br>Qual formato mostraria qual transporte aumentou ou diminuiu ao longo da semana?", opts: ["Linha","Pizza","Tabela sem valores","Mapa"], c: 0, h: "Linha mostra evolução temporal." },

                // ---------------------- BLOOM 7 ----------------------
                { id: 61, bloom: 7, q: "Observe:<br><img src='img/data/bar1.svg'><br>Se todas as barras aumentarem 2 unidades, qual continua maior?", opts: ["Azul","Verde","Amarelo","Vermelho"], c: 0, h: "A ordem não muda: Azul ainda é maior." },
                { id: 62, bloom: 7, q: "Veja:<br><img src='img/data/bar2.svg'><br>Se todos os valores dobrarem, qual fruta continua com o menor valor?", opts: ["Pêra","Banana","Maçã","Uva"], c: 0, h: "Pêra = menor antes e depois." },
                { id: 63, bloom: 7, q: "Observe:<br><img src='img/data/bar3.svg'><br>Se Gato subir para 12, qual a nova ordem?", opts: ["Gato=Cachorro>Pássaro","Cachorro>Gato>Pássaro","Pássaro>Gato>Cachorro","Nenhuma"], c: 0, h: "Gato=12 empata com cachorro." },
                { id: 64, bloom: 7, q: "Veja:<br><img src='img/data/hbar1.svg'><br>Se Terça subir para 8, quem passa a ser o segundo maior valor?", opts: ["Ter","Seg","Qua","Qui"], c: 0, h: "Ficaria 9 (Qua), 8 (Ter), 7 (Seg)." },
                { id: 65, bloom: 7, q: "Observe:<br><img src='img/data/hbar2.svg'><br>Se 1ºC cair para 10, quem fica em segundo?", opts: ["1ºB","1ºC","1ºA","Nenhum"], c: 0, h: "15 > 11 > 10." },
                { id: 66, bloom: 7, q: "Veja:<br><img src='img/data/hbar3.svg'><br>Se Bebida cair para 2, quem fica como o menor item?", opts: ["Bebida","Doce","Salgado","Nenhum"], c: 0, h: "2 é o menor valor." },
                { id: 67, bloom: 7, q: "Observe:<br><img src='img/data/line1.svg'><br>Se todos valores forem invertidos (maior vira menor), qual dia vira o maior?", opts: ["Seg","Ter","Qua","Qui"], c: 0, h: "O menor original (Seg=2) vira o maior após inversão." },
                { id: 68, bloom: 7, q: "Veja:<br><img src='img/data/line2.svg'><br>Se Abril cair para 4, qual tendência aparece?", opts: ["Descida","Subida","Estável","Nenhuma"], c: 0, h: "Fev→Mar→Abr mostraria queda de 6→4." },
                { id: 69, bloom: 7, q: "Observe:<br><img src='img/data/pie1.svg'><br>Se Ler aumentar para 40%, quem empata com ela?", opts: ["Brincar","TV","Jogos","Nenhum"], c: 0, h: "Ler=40 empataria com Brincar=40." },
                { id: 70, bloom: 7, q: "Veja:<br><img src='img/data/pie2.svg'><br>Se bicicleta dobrar para 50%, quem passa a ser o menor?", opts: ["Ônibus","Carro","Bicicleta","Nenhum"], c: 0, h: "Ônibus continua com 25%, sendo o menor." }
             ]
            },

            { id: "tabelas", name: "Tabelas", prep: { title: "Organizando dados", content: "<p>Tabelas organizam informações em linhas e colunas.</p>", skin: "📊" }, pool: [
                {id: 1, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Quantas bolas foram vendidas?",opts: ["10", "8", "12", "6"],c: 2,h: "O valor na linha de Bola é 12."},
                {id: 2, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Quantas pipas foram vendidas?",opts: ["8", "10", "12", "6"],c: 3,h: "O valor na linha de Pipa é 6." },
                {id: 3, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Quantas bananas aparecem na tabela?",opts: ["4", "3", "7", "5"],c: 2,h: "O valor na linha de Banana é 7." },
                {id: 4, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Quantas pêras aparecem na tabela?",opts: ["3", "4", "7", "5"],c: 0,h: "O valor na linha de Pêra é 3." },
                {id: 5, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Quantos pontos Ana fez?",opts: ["6", "4", "12", "9"],c: 3,h: "O valor na linha de Ana é 9." },
                {id: 6, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Quantos pontos Deco fez?",opts: ["4", "6", "9", "12"],c: 0,h: "O valor na linha de Deco é 4." },
                {id: 7, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Quantos cachorros há na tabela?",opts: ["4", "3", "5", "6"],c: 3,h: "O valor na linha de Cachorros é 6." },
                {id: 8, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Quantos pássaros há na tabela?",opts: ["5", "3", "4", "6"],c: 1,h: "O valor na linha de Pássaros é 3." },
                {id: 9, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Quantos alunos estiveram presentes na quarta?",opts: ["22", "19", "18", "20"],c: 0,h: "O valor na linha de Quarta é 22." },
                {id: 10, bloom: 1,q: "Observe a tabela:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Quantos alunos estiveram presentes na terça?",opts: ["18", "22", "19", "20"],c: 0,h: "O valor na linha de Terça é 18." },
                {id: 11, bloom: 2,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Qual fruta foi comida em maior quantidade?",opts: ["Pêra", "Maçã", "Banana", "Uva"],c: 2,h: "A fruta com maior quantidade é Banana, com 7." },
                {id: 12, bloom: 2,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Qual fruta foi comida em menor quantidade?",opts: ["Maçã", "Pêra", "Banana", "Uva"],c: 1,h: "A fruta com menor quantidade é Pêra, com 3." },
                {id: 13, bloom: 2,q: "Veja a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Qual brinquedo foi menos vendido?",opts: ["Carrinho", "Bola", "Pipa", "Boneca"],c: 2,h: "O brinquedo com menor quantidade é Pipa, com 6." },
                {id: 14, bloom: 2,q: "Veja a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Qual brinquedo foi mais vendido?",opts: ["Carrinho", "Boneca", "Pipa", "Bola"],c: 3,h: "O brinquedo com maior quantidade é Bola, com 12." },
                {id: 15, bloom: 2,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Qual jogador fez mais pontos?",opts: ["Beto", "Deco", "Carol", "Ana"],c: 2,h: "O jogador com mais pontos é Carol, com 12." },
                {id: 16, bloom: 2,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Qual jogador fez menos pontos?",opts: ["Ana", "Deco", "Carol", "Beto"],c: 1,h: "O jogador com menos pontos é Deco, com 4." },
                {id: 17, bloom: 2,q: "Veja a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Qual animal tem quantidade igual a 5?",opts: ["Coelhos", "Gatos", "Pássaros", "Cachorros"],c: 0,h: "O animal Coelhos tem quantidade 5." },
                {id: 18, bloom: 2,q: "Veja a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Qual animal tem quantidade maior que 5?",opts: ["Gatos", "Coelhos", "Pássaros", "Cachorros"],c: 3,h: "Apenas Cachorros tem quantidade maior que 5." },
                {id: 19, bloom: 2,q: "Observe a tabela:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Em qual dia houve mais alunos presentes?",opts: ["Quarta", "Segunda", "Terça", "Quinta"],c: 0,h: "O dia com mais alunos foi Quarta, com 22 alunos." },
                {id: 20, bloom: 2,q: "Observe a tabela:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Em qual dia houve menos alunos presentes?",opts: ["Quinta", "Terça", "Segunda", "Quarta"],c: 1,h: "O dia com menos alunos foi Terça, com 18." },
                {id: 21, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Quantos brinquedos há no total se juntarmos Bola e Carrinho?",opts: ["22", "19", "20", "18"],c: 2,h: "Bola = 12 e Carrinho = 10. Resultado = 22." },
                {id: 22, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Quantos brinquedos há se somarmos Boneca e Pipa?",opts: ["10", "16", "18", "14"],c: 1,h: "Boneca = 8 e Pipa = 6. Resultado = 14." },
                {id: 23, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Quantas frutas são ao todo, somando Maçã e Banana?",opts: ["10", "11", "9", "12"],c: 1,h: "Maçã = 5 e Banana = 7. Resultado = 12." },
                {id: 24, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Se tirarmos a quantidade de Pêra da de Banana, qual é a diferença?",opts: ["4", "3", "5", "2"],c: 0,h: "Banana = 7 e Pêra = 3. Resultado = 7 - 3 = 4." },
                {id: 25, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Quantos pontos têm juntos Carol e Ana?",opts: ["19", "21", "20", "17"],c: 2,h: "Carol = 12 e Ana = 9. Resultado = 21." },
                {id: 26, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Se subtrairmos os pontos de Beto dos pontos de Ana, qual é o resultado?",opts: ["2", "4", "3", "5"],c: 3,h: "Ana = 9 e Beto = 6. Resultado = 9 - 6 = 3." },
                {id: 27, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Quantos animais há se juntarmos Cachorros e Gatos?",opts: ["9", "11", "8", "10"],c: 2,h: "Cachorros = 6 e Gatos = 4. Resultado = 10." },
                {id: 28, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Quantos animais há se somarmos Coelhos e Pássaros?",opts: ["7", "10", "8", "9"],c: 0,h: "Coelhos = 5 e Pássaros = 3. Resultado = 8." },
                {id: 29, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Quantos alunos estiveram presentes no total em Quarta e Segunda?",opts: ["42", "40", "41", "39"],c: 2,h: "Quarta = 22 e Segunda = 20. Resultado = 42." },
                {id: 30, bloom: 3,q: "Observe a tabela:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Qual é a diferença de alunos presentes entre Quarta e Terça?",opts: ["2", "3", "4", "5"],c: 3,h: "Quarta = 22 e Terça = 18. Resultado = 22 - 18 = 4." },
                {id: 31, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Colocando as frutas em ordem da menor para a maior quantidade, qual vem primeiro?",opts: ["Uva", "Maçã", "Banana", "Pêra"],c: 3,h: "A resposta correta é Pêra." },
                {id: 32, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Colocando as frutas em ordem da menor para a maior quantidade, qual vem por último?",opts: ["Maçã", "Banana", "Uva", "Pêra"],c: 1,h: "A resposta correta é Banana." },
                {id: 33, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Se organizarmos os brinquedos do mais vendido para o menos vendido, qual fica em segundo lugar?",opts: ["Carrinho", "Boneca", "Pipa", "Bola"],c: 0,h: "A resposta correta é Carrinho." },
                {id: 34, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Se colocarmos os jogadores em ordem do que fez menos pontos para o que fez mais, quem fica em terceiro lugar?",opts: ["Ana", "Beto", "Carol", "Deco"],c: 0,h: "A resposta correta é Ana." },
                {id: 35, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Qual animal tem quantidade maior ou igual a 5, mas não é o que tem a maior quantidade?",opts: ["Gatos", "Coelhos", "Pássaros", "Cachorros"],c: 1,h: "A resposta correta é Coelhos." },
                {id: 36, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Qual dia tem número de alunos presentes que está mais perto de 20, mas é um pouco menor que 20?",opts: ["Terça", "Quarta", "Segunda", "Quinta"],c: 3,h: "A resposta correta é Quinta." },
                {id: 37, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Qual fruta tem quantidade entre 4 e 7, não sendo nem 4 nem 7?",opts: ["Maçã", "Banana", "Uva", "Pêra"],c: 0,h: "A resposta correta é Maçã." },
                {id: 38, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Qual animal tem a menor quantidade na tabela?",opts: ["Pássaros", "Cachorros", "Coelhos", "Gatos"],c: 0,h: "A resposta correta é Pássaros." },
                {id: 39, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Qual jogador não é nem o que fez mais pontos nem o que fez menos pontos?",opts: ["Beto", "Deco", "Carol", "Ana"],c: 3,h: "A resposta correta é Ana." },
                {id: 40, bloom: 4,q: "Observe a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Qual brinquedo tem quantidade mais próxima de 9 unidades?",opts: ["Carrinho", "Pipa", "Boneca", "Bola"],c: 0,h: "A resposta correta é Carrinho." },
                {id: 41, bloom: 5,q: "Observe a tabela:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Qual frase está CORRETA sobre a tabela?",opts: ["A fruta com a menor quantidade é a maçã.", "Banana tem mais unidades do que todas as outras frutas.", "Uva tem mais unidades do que a banana.", "Pêra tem mais unidades do que a maçã."],c: 1,h: "Banana tem 7, mais do que maçã (5), uva (4) e pêra (3)." },
                {id: 42, bloom: 5,q: "Veja a tabela:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Qual conclusão é CORRETA?",opts: ["Bola é o brinquedo menos vendido.", "Pipa vendeu menos do que a boneca.", "Carrinho e boneca têm a mesma quantidade.", "Pipa é o brinquedo mais vendido."],c: 1,h: "Pipa tem 6, boneca tem 8; então pipa vendeu menos do que a boneca." },
                {id: 43, bloom: 5,q: "Observe a tabela:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Qual frase está CORRETA?",opts: ["Ana fez menos pontos do que Deco.", "Carol fez mais pontos do que todos os outros jogadores.", "Beto e Deco fizeram a mesma quantidade de pontos.", "Beto fez mais pontos do que Carol."],c: 1,h: "Carol tem 12 pontos, maior valor da tabela." },
                {id: 44, bloom: 5,q: "Veja a tabela:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Qual afirmação é VERDADEIRA?",opts: ["Cachorros são o animal com menor quantidade.", "Pássaros são o animal com maior quantidade.", "Coelhos têm mais unidades do que gatos.", "Gatos têm mais unidades do que cachorros."],c: 2,h: "Coelhos têm 5, gatos têm 4, então coelhos têm mais unidades do que gatos." },
                {id: 45, bloom: 5,q: "Observe a tabela:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Qual conclusão está CORRETA?",opts: ["Segunda é o dia com menos alunos.", "Quarta é o dia com mais alunos.", "Terça é o dia com mais alunos.", "Quinta tem o mesmo número de alunos que terça."],c: 1,h: "Quarta tem 22 alunos, maior valor da tabela." },
                {id: 46, bloom: 5,q: "Veja novamente a tabela de frutas:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Qual frase faz MAIS sentido?",opts: ["Todas as frutas têm a mesma quantidade.", "Maçã tem mais unidades do que uva e pêra.", "Uva é a fruta com a maior quantidade.", "Banana é a fruta com a menor quantidade."],c: 1,h: "Maçã (5) é maior que uva (4) e pêra (3), mas menor que banana (7)." },
                {id: 47, bloom: 5,q: "Observe a tabela de brinquedos:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Qual dessas frases está CORRETA?",opts: ["Se juntarmos boneca e pipa, teremos mais unidades do que bola.", "Se juntarmos boneca e pipa, teremos exatamente a mesma quantidade que a bola.", "Se juntarmos boneca e pipa, teremos menos unidades do que a bola.", "Boneca e pipa não aparecem na tabela."],c: 0,h: "Boneca (8) + pipa (6) = 14, que é mais do que bola (12)." },
                {id: 48, bloom: 5,q: "Veja a tabela de frutas:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Qual frase está CORRETA sobre as quantidades?",opts: ["A quantidade de uvas é maior do que a de bananas.", "Se somarmos uva e pêra, teremos 7 unidades.", "Se somarmos maçã e pêra, teremos 9 unidades.", "Maçã e banana aparecem com a mesma quantidade."],c: 1,h: "Uva (4) + pêra (3) = 7." },
                {id: 49, bloom: 5,q: "Observe novamente a tabela de pontos:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Qual afirmação é VERDADEIRA?",opts: ["A soma dos pontos de Ana e Beto é menor que os pontos de Carol.", "A soma dos pontos de Ana e Beto é igual aos pontos de Carol.", "A soma dos pontos de Ana e Beto é maior que os pontos de Carol.", "Ana e Beto não aparecem na tabela."],c: 2,h: "Ana (9) + Beto (6) = 15, que é maior do que 12 pontos de Carol." },
                {id: 50, bloom: 5,q: "Veja a tabela dos dias:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Qual frase está CORRETA sobre o total de alunos?",opts: ["Se somarmos todos os dias, teremos mais de 70 alunos no total.", "Se somarmos todos os dias, teremos menos de 50 alunos no total.", "Se somarmos todos os dias, teremos exatamente 60 alunos no total.", "Não é possível somar os valores da tabela."],c: 0,h: "20 + 18 + 22 + 19 = 79, que é maior do que 70." },
                {id: 51, bloom: 6,q: "Observe a tabela de frutas:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Vamos adicionar uma nova fruta chamada <b>Melancia</b>. Queremos que a banana continue sendo a fruta com a MAIOR quantidade. Qual quantidade a melancia pode ter?",opts: ["8", "10", "6", "7"],c: 2,h: "Banana tem 7 unidades. Para ela continuar sendo a maior, a melancia precisa ter menos que 7, como 6." },
                {id: 52, bloom: 6,q: "Ainda na tabela de frutas:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Queremos adicionar uma nova fruta para que o TOTAL de frutas seja 25. Hoje o total é 19. Quantas frutas essa nova linha deve ter?",opts: ["4", "5", "6", "7"],c: 2,h: "19 + 6 = 25. As outras opções não chegam a 25." },
                {id: 53, bloom: 6,q: "Veja a tabela de brinquedos:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Queremos criar um novo brinquedo que seja o MAIS vendido de todos. Qual quantidade ele pode ter?",opts: ["11", "9", "13", "12"],c: 2,h: "O maior valor atual é 12. Para ser o mais vendido, o novo brinquedo precisa ter um número maior, como 13." },
                {id: 54, bloom: 6,q: "Observe a tabela de pontos:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Queremos mudar a pontuação de Deco para que TODOS os jogadores tenham pelo menos 6 pontos. Quantos pontos Deco deve ter?",opts: ["4", "5", "6", "3"],c: 2,h: "Se Deco ficar com 6 pontos, todos terão 6 ou mais." },
                {id: 55, bloom: 6,q: "Veja a tabela dos dias:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Vamos criar um novo dia chamado <b>Sexta</b>. Queremos que o número de alunos de Sexta fique ENTRE o valor de Segunda (20) e Quarta (22). Qual valor podemos escolher?",opts: ["18", "19", "21", "23"],c: 2,h: "Entre 20 e 22 o único número inteiro possível é 21." },
                {id: 56, bloom: 6,q: "Observe a tabela de animais:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Queremos fazer uma mudança para que DOIS animais fiquem empatados com a maior quantidade. Qual opção funciona?",opts: ["Aumentar os gatos para 6.", "Diminuir os cachorros para 4.", "Aumentar os coelhos para 6.", "Diminuir os pássaros para 1."],c: 2,h: "Se coelhos forem para 6, teremos cachorros = 6 e coelhos = 6, empatando na maior quantidade." },
                {id: 57, bloom: 6,q: "Na tabela de frutas:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>A média das quantidades é próxima de 5. Se criarmos uma nova fruta, qual quantidade deixaria essa fruta parecida com a média?",opts: ["3", "4", "5", "8"],c: 2,h: "A média é por volta de 5, então 5 é o valor mais próximo." },
                {id: 58, bloom: 6,q: "Veja a tabela de brinquedos:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Bola tem 12 unidades. Queremos escolher uma nova quantidade para a pipa de forma que a bola tenha o DOBRO da quantidade de pipas. Qual quantidade a pipa deve ter?",opts: ["4", "5", "6", "8"],c: 2,h: "Se a pipa tiver 6 unidades, 12 será o dobro de 6." },
                {id: 59, bloom: 6,q: "Observe a tabela dos dias:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Queremos fazer uma mudança para que TODOS os dias tenham pelo menos 19 alunos. Qual mudança funciona?",opts: ["Aumentar terça para 19 alunos.", "Diminuir quarta para 19 alunos.", "Diminuir segunda para 18 alunos.", "Diminuir quinta para 18 alunos."],c: 0,h: "Terça é o único dia com menos de 19 (18). Se ela subir para 19, todos terão 19 ou mais." },
                {id: 60, bloom: 6,q: "Veja a tabela de pontos:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Vamos adicionar um novo jogador. Queremos que Carol continue sendo a que tem MAIS pontos. Qual quantidade esse novo jogador pode ter?",opts: ["10", "12", "15", "13"],c: 0,h: "Carol tem 12 pontos. Para ela continuar na frente, o novo jogador precisa ter menos que 12, como 10." },
                {id: 61, bloom: 7,q: "Observe a tabela de frutas:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Queremos fazer uma mudança para que DUAS frutas fiquem empatadas com a maior quantidade. Hoje a banana tem 7 e é a maior. O que podemos fazer?",opts: ["Aumentar a maçã para 7.", "Diminuir a banana para 3.", "Aumentar a uva para 5.", "Diminuir a pêra para 1."],c: 0,h: "Se a maçã também tiver 7, maçã e banana ficarão empatadas com a maior quantidade." },
                {id: 62, bloom: 7,q: "Veja a tabela de brinquedos:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Vamos criar um novo brinquedo. Queremos que a bola DEIXE de ser a mais vendida e fique em SEGUNDO lugar. Qual quantidade o novo brinquedo deve ter?",opts: ["10", "12", "13", "8"],c: 2,h: "Se o novo brinquedo tiver 13, ele será o primeiro. A bola, com 12, ficará em segundo lugar." },
                {id: 63, bloom: 7,q: "Observe a tabela de pontos:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Queremos ajustar apenas UM jogador para que a média dos pontos fique mais perto de 8. Qual mudança ajuda nisso?",opts: ["Aumentar Beto para 7 pontos.", "Diminuir Carol para 10 pontos.", "Diminuir Ana para 8 pontos.", "Diminuir Deco para 3 pontos."],c: 0,h: "Se Beto passar de 6 para 7, somamos +1 ponto no total, aproximando a média de 8." },
                {id: 64, bloom: 7,q: "Veja a tabela de animais:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Queremos que o total de animais somados seja exatamente 20. Hoje o total é 18. Qual mudança funciona?",opts: ["Diminuir cachorros para 4.", "Aumentar coelhos para 7.", "Diminuir pássaros para 2.", "Aumentar gatos para 5."],c: 1,h: "Se coelhos passarem de 5 para 7, somamos +2 e o total vai de 18 para 20." },
                {id: 65, bloom: 7,q: "Observe a tabela dos dias:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>Queremos planejar mudanças para que TODOS os dias tenham o mesmo número de alunos presentes. Qual plano poderia funcionar?",opts: ["Aumentar terça para 20, diminuir quarta para 20 e aumentar quinta para 20.", "Diminuir todos os dias para 18 alunos.", "Aumentar todos os dias para 22 alunos sem mexer em terça.", "Não é possível mudar os valores da tabela."],c: 0,h: "Se ajustarmos terça para 20, quarta para 20 e quinta para 20, todos os dias ficam com 20 alunos." },
                {id: 66, bloom: 7,q: "Veja a tabela de frutas:<br><table border='1'><tr><th>Fruta</th><th>Quantidade</th></tr><tr><td>Maçã</td><td>5</td></tr><tr><td>Banana</td><td>7</td></tr><tr><td>Uva</td><td>4</td></tr><tr><td>Pêra</td><td>3</td></tr></table><br>Maçã tem 5 unidades. Queremos criar uma nova fruta com 5 unidades e também mudar uma fruta que tem 4 unidades para 5, para ter TRÊS frutas com 5 unidades. Qual fruta devemos mudar?",opts: ["Banana", "Uva", "Pêra", "Nenhuma, já existem três frutas com 5."],c: 1,h: "Se criarmos uma fruta nova com 5 e mudarmos a uva de 4 para 5, teremos maçã, uva e a nova fruta com 5 unidades." },
                {id: 67, bloom: 7,q: "Observe a tabela de brinquedos:<br><table border='1'><tr><th>Brinquedo</th><th>Quantidade</th></tr><tr><td>Bola</td><td>12</td></tr><tr><td>Boneca</td><td>8</td></tr><tr><td>Carrinho</td><td>10</td></tr><tr><td>Pipa</td><td>6</td></tr></table><br>Pipa é o brinquedo menos vendido. O que podemos fazer para que ela deixe de ser a menor, sem mexer nos outros brinquedos?",opts: ["Diminuir a quantidade de bola.", "Aumentar a quantidade de pipa para 9.", "Diminuir a quantidade de boneca.", "Aumentar a quantidade de carrinho."],c: 1,h: "Se pipa passar de 6 para 9, ela ficará maior do que boneca (8)." },
                {id: 68, bloom: 7,q: "Veja a tabela de pontos:<br><table border='1'><tr><th>Jogador</th><th>Pontos</th></tr><tr><td>Ana</td><td>9</td></tr><tr><td>Beto</td><td>6</td></tr><tr><td>Carol</td><td>12</td></tr><tr><td>Deco</td><td>4</td></tr></table><br>Queremos mudar apenas a pontuação de Carol para que ela fique empatada em PRIMEIRO lugar com Ana. Quantos pontos Carol deve ter?",opts: ["9", "8", "7", "6"],c: 0,h: "Ana tem 9 pontos. Se Carol ficar com 9, as duas ficam empatadas em primeiro lugar." },
                {id: 69, bloom: 7,q: "Observe a tabela dos dias:<br><table border='1'><tr><th>Dia</th><th>Alunos presentes</th></tr><tr><td>Segunda</td><td>20</td></tr><tr><td>Terça</td><td>18</td></tr><tr><td>Quarta</td><td>22</td></tr><tr><td>Quinta</td><td>19</td></tr></table><br>O total de alunos na semana é 79. Vamos criar o dia <b>Sexta</b> e queremos que o total continue MAIOR que 79. Qual é o MENOR número de alunos que podemos colocar em Sexta para isso acontecer?",opts: ["0", "1", "2", "5"],c: 1,h: "Com 1 aluno na sexta, o total passa a ser 80, que ainda é maior que 79." },
                {id: 70, bloom: 7,q: "Veja a tabela de animais:<br><table border='1'><tr><th>Animal</th><th>Quantidade</th></tr><tr><td>Gatos</td><td>4</td></tr><tr><td>Cachorros</td><td>6</td></tr><tr><td>Pássaros</td><td>3</td></tr><tr><td>Coelhos</td><td>5</td></tr></table><br>Queremos fazer uma mudança para que APENAS os gatos tenham a maior quantidade na tabela. O que podemos fazer?",opts: ["Diminuir cachorros para 5.", "Aumentar gatos para 7.", "Aumentar coelhos para 7.", "Diminuir pássaros para 2."],c: 1,h: "Se aumentarmos os gatos para 7, eles terão mais unidades do que todos os outros animais." }
            ] },
            { id: "medidas_tempo", name: "Medidas de tempo",
                prep: { title: "Marcando o tempo", content: "<p>Vamos aprender a medir o tempo com segundos, minutos, horas, dias, semanas, meses e anos.</p>", skin: "⏰" },
                pool: [
                    { id: 1, bloom: 1, q: "Quantos minutos tem 1 hora?", opts: ["30 minutos", "60 minutos", "24 minutos", "10 minutos"], c: 1, h: "1 hora sempre tem 60 minutos." },
                    { id: 2, bloom: 1, q: "Quantas horas tem 1 dia?", opts: ["12 horas", "24 horas", "7 horas", "60 horas"], c: 1, h: "Um dia completo tem 24 horas." },
                    { id: 3, bloom: 1, q: "Quantos dias tem 1 semana?", opts: ["5 dias", "6 dias", "7 dias", "8 dias"], c: 2, h: "A semana tem 7 dias: de domingo a sábado." },
                    { id: 4, bloom: 1, q: "Quantos meses tem 1 ano?", opts: ["10 meses", "11 meses", "12 meses", "13 meses"], c: 2, h: "Um ano tem 12 meses." },
                    { id: 5, bloom: 1, q: "Se uma aula dura 1 hora, ela dura quantos minutos?", opts: ["30 minutos", "45 minutos", "60 minutos", "90 minutos"], c: 2, h: "1 hora = 60 minutos." },
                    { id: 6, bloom: 1, q: "O ponteiro GRANDE do relógio marca:", opts: ["Horas", "Minutos", "Dias", "Meses"], c: 1, h: "O ponteiro grande marca os minutos." },
                    { id: 7, bloom: 1, q: "O ponteiro PEQUENO do relógio marca:", opts: ["Horas", "Minutos", "Segundos", "Dias"], c: 0, h: "O ponteiro pequeno marca as horas." },
                    { id: 8, bloom: 1, q: "Qual unidade usamos para medir uma corrida bem rápida?", opts: ["Anos", "Dias", "Segundos", "Semanas"], c: 2, h: "Corridas rápidas são medidas em segundos." },
                    { id: 9, bloom: 1, q: "Qual unidade usamos para medir o tempo que você dorme à noite?", opts: ["Horas", "Meses", "Anos", "Semanas"], c: 0, h: "Sono costuma ser medido em horas." },
                    { id: 10, bloom: 1, q: "Qual unidade usamos para medir sua idade?", opts: ["Horas", "Dias", "Anos", "Minutos"], c: 2, h: "Idade é medida em anos." },
                    { id: 11, bloom: 2, q: "Um desenho começa às 14:00 e termina às 15:00. Quanto tempo durou?", opts: ["30 minutos", "1 hora", "2 horas", "15 minutos"], c: 1, h: "De 14:00 até 15:00 passou 1 hora." },
                    { id: 12, bloom: 2, q: "Se você demora 30 minutos para chegar à escola, isso é:", opts: ["Meia hora", "Uma hora", "Um dia", "Uma semana"], c: 0, h: "30 minutos é meia hora." },
                    { id: 13, bloom: 2, q: "Você almoça às 12:00. O que significa esse horário?", opts: ["Meio-dia", "Meia-noite", "Fim do dia", "Começo da madrugada"], c: 0, h: "12:00 é meio-dia." },
                    { id: 14, bloom: 2, q: "Você vai ao parque todos os sábados. Isso acontece:", opts: ["Todo dia", "Toda semana", "Todo mês", "Todo ano"], c: 1, h: "Sábado aparece uma vez por semana." },
                    { id: 15, bloom: 2, q: "Se hoje é quarta-feira, daqui a 2 dias será:", opts: ["Quinta-feira", "Sexta-feira", "Sábado", "Terça-feira"], c: 1, h: "Quarta → Quinta (1 dia) → Sexta (2 dias)." },
                    { id: 16, bloom: 2, q: "Uma atividade começou às 9:00 e terminou às 9:30. Quanto tempo passou?", opts: ["10 minutos", "20 minutos", "30 minutos", "40 minutos"], c: 2, h: "De 9:00 a 9:30 = 30 minutos." },
                    { id: 17, bloom: 2, q: "Uma semana inteira de aula tem:", opts: ["2 dias", "3 dias", "5 dias úteis", "10 dias"], c: 2, h: "Normalmente são 5 dias de aula: segunda a sexta." },
                    { id: 18, bloom: 2, q: "Se você faz aniversário todo dia 10 de maio, isso acontece:", opts: ["Todo mês", "Todo ano", "Toda semana", "Todo dia"], c: 1, h: "Aniversário se repete a cada ano." },
                    { id: 19, bloom: 2, q: "Você ficou 2 horas jogando videogame. Isso corresponde a:", opts: ["60 minutos", "90 minutos", "120 minutos", "30 minutos"], c: 2, h: "2 horas = 120 minutos." },
                    { id: 20, bloom: 2, q: "Se uma prova começa às 8:00 e termina às 9:00, o tempo de prova foi de:", opts: ["30 minutos", "1 hora", "2 horas", "3 horas"], c: 1, h: "De 8:00 a 9:00 = 1 hora." },
                    { id: 21, bloom: 3, q: "Você começou a assistir um filme às 16:00 e terminou às 18:00. Quanto tempo durou o filme?", opts: ["1 hora", "2 horas", "3 horas", "4 horas"], c: 1, h: "De 16:00 a 18:00 passaram 2 horas." },
                    { id: 22, bloom: 3, q: "Uma corrida começou às 9:15 e terminou às 9:45. Quanto tempo durou?", opts: ["15 minutos", "20 minutos", "30 minutos", "45 minutos"], c: 2, h: "De 9:15 a 9:45 = 30 minutos." },
                    { id: 23, bloom: 3, q: "Você estuda 1 hora por dia. Em 3 dias, quantas horas estudou?", opts: ["1 hora", "2 horas", "3 horas", "4 horas"], c: 2, h: "1 hora por dia × 3 dias = 3 horas." },
                    { id: 24, bloom: 3, q: "Você jogou 45 minutos de manhã e 15 minutos à tarde. Quanto tempo jogou no total?", opts: ["45 minutos", "50 minutos", "60 minutos", "70 minutos"], c: 2, h: "45 + 15 = 60 minutos = 1 hora." },
                    { id: 25, bloom: 3, q: "Você entrou na escola às 7:30 e saiu às 11:30. Quanto tempo ficou na escola?", opts: ["3 horas", "4 horas", "5 horas", "6 horas"], c: 1, h: "De 7:30 a 11:30 = 4 horas." },
                    { id: 26, bloom: 3, q: "Uma aula começa às 10:00 e dura 50 minutos. Em que horário termina?", opts: ["10:30", "10:40", "10:50", "11:00"], c: 2, h: "10:00 + 50 minutos = 10:50." },
                    { id: 27, bloom: 3, q: "Você lê 10 minutos antes de dormir, todos os dias. Em 6 dias, leu por quanto tempo?", opts: ["30 minutos", "40 minutos", "60 minutos", "120 minutos"], c: 2, h: "10 × 6 = 60 minutos = 1 hora." },
                    { id: 28, bloom: 3, q: "Seu treino começou às 17:00 e terminou às 18:30. Quanto tempo durou?", opts: ["1 hora", "1 hora e 30 minutos", "2 horas", "2 horas e 30 minutos"], c: 1, h: "De 17:00 a 18:30 = 1h e 30min." },
                    { id: 29, bloom: 3, q: "Você ficou 25 minutos fazendo um exercício e depois mais 35 minutos. Quanto tempo no total?", opts: ["50 minutos", "55 minutos", "60 minutos", "65 minutos"], c: 2, h: "25 + 35 = 60 minutos." },
                    { id: 30, bloom: 3, q: "Um passeio começou às 8:30 e acabou às 11:00. Quanto tempo durou o passeio?", opts: ["2 horas", "2 horas e 30 minutos", "3 horas", "3 horas e 30 minutos"], c: 1, h: "De 8:30 a 11:00 = 2h e 30min." },
                    { id: 31, bloom: 4, q: "Qual é maior: 30 minutos ou 1 hora?", opts: ["30 minutos", "1 hora", "São iguais", "Depende do dia"], c: 1, h: "1 hora = 60 minutos, maior que 30." },
                    { id: 32, bloom: 4, q: "Qual dura MAIS tempo?", opts: ["1 hora", "45 minutos", "30 minutos", "15 minutos"], c: 0, h: "1 hora é o maior tempo entre as opções." },
                    { id: 33, bloom: 4, q: "Qual opção representa MENOS tempo?", opts: ["1 dia", "2 horas", "30 minutos", "1 semana"], c: 2, h: "30 minutos é o menor intervalo." },
                    { id: 34, bloom: 4, q: "O que é maior?", opts: ["1 dia", "12 horas", "6 horas", "3 horas"], c: 0, h: "1 dia = 24 horas, maior que as outras opções." },
                    { id: 35, bloom: 4, q: "Qual intervalo é MAIOR?", opts: ["Das 8:00 às 9:00", "Das 8:00 às 8:30", "Das 8:00 às 8:15", "Das 8:00 às 8:45"], c: 0, h: "8:00–9:00 = 1 hora, maior que os outros." },
                    { id: 36, bloom: 4, q: "Qual intervalo é MENOR?", opts: ["10 minutos", "20 minutos", "30 minutos", "40 minutos"], c: 0, h: "10 minutos é o menor tempo." },
                    { id: 37, bloom: 4, q: "O que dura mais: 3 dias ou 1 semana?", opts: ["3 dias", "1 semana", "São iguais", "Depende do mês"], c: 1, h: "1 semana tem 7 dias, maior que 3 dias." },
                    { id: 38, bloom: 4, q: "O que é maior: 2 horas ou 90 minutos?", opts: ["2 horas", "90 minutos", "São iguais", "Não dá para saber"], c: 0, h: "2 horas = 120 minutos, maior que 90 minutos." },
                    { id: 39, bloom: 4, q: "Qual situação representa MAIS tempo?", opts: ["Estudar 20 minutos", "Estudar 35 minutos", "Estudar 1 hora", "Estudar 45 minutos"], c: 2, h: "1 hora = 60 minutos, maior que os demais." },
                    { id: 40, bloom: 4, q: "Qual é o intervalo MAIS curto?", opts: ["Das 7:00 às 8:00", "Das 7:00 às 7:30", "Das 7:00 às 7:15", "Das 7:00 às 7:45"], c: 2, h: "7:00–7:15 dura só 15 minutos." },
                    { id: 41, bloom: 5, q: "Você quer saber se 2 horas é o mesmo que 120 minutos. Qual estratégia é melhor?", opts: ["Somar vários números aleatórios", "Lembrar que 1 hora = 60 minutos e calcular 60 + 60", "Olhar para o relógio e adivinhar", "Perguntar a um amigo sem pensar"], c: 1, h: "2 × 60 = 120, usando a relação 1 hora = 60 minutos." },
                    { id: 42, bloom: 5, q: "Você esqueceu quantos minutos tem 1 hora. O que é melhor fazer?", opts: ["Inventar um número", "Lembrar das aulas: 1 hora = 60 minutos", "Dizer que não existe resposta", "Escolher qualquer alternativa"], c: 1, h: "Usar o que já sabe: 1 hora = 60 minutos." },
                    { id: 43, bloom: 5, q: "Seu amigo diz que 3 horas têm 90 minutos. O que você deve concluir?", opts: ["Ele está certo", "Ele está errado, porque 3 horas têm 180 minutos", "Depende do dia", "Não existe jeito de conferir"], c: 1, h: "3 × 60 = 180 minutos." },
                    { id: 44, bloom: 5, q: "Você quer saber se 1 dia tem mais ou menos de 30 horas. Qual é a melhor ideia?", opts: ["Lembrar que 1 dia tem 24 horas", "Adivinhar o número", "Perguntar a alguém sem pensar", "Dizer que 1 dia tem 30 horas"], c: 0, h: "Sabemos que 1 dia tem 24 horas (menos que 30)." },
                    { id: 45, bloom: 5, q: "Você sabe que 1 semana tem 7 dias. Qual frase faz mais sentido?", opts: ["2 semanas têm 10 dias", "2 semanas têm 14 dias", "2 semanas têm 20 dias", "2 semanas têm 7 dias"], c: 1, h: "2 × 7 = 14 dias." },
                    { id: 46, bloom: 5, q: "Você quer organizar seu estudo por 30 minutos. Qual forma é melhor para controlar o tempo?", opts: ["Olhar o relógio e marcar meia hora", "Adivinhar quando terminou", "Estudar sem olhar o relógio", "Esperar alguém mandar parar"], c: 0, h: "Olhar o relógio e contar 30 minutos é o mais seguro." },
                    { id: 47, bloom: 5, q: "Você acha que 60 segundos é igual a 1 minuto. O que pode confirmar isso?", opts: ["Somar 60 vezes 1 segundo", "Lembrar da definição: 1 minuto = 60 segundos", "Perguntar sem pensar", "Dizer que não importa"], c: 1, h: "Por definição, 1 minuto = 60 segundos." },
                    { id: 48, bloom: 5, q: "Um colega diz que 2 horas é menos tempo que 100 minutos. Como avaliar isso?", opts: ["Aceitar sem pensar", "Comparar: 2 horas = 120 minutos, que é maior que 100", "Dizer que são iguais", "Dizer que 2 horas é menor que 100 minutos"], c: 1, h: "2 horas = 120 minutos, maior que 100." },
                    { id: 49, bloom: 5, q: "Você precisa escolher um tempo de descanso CURTO. Qual é a melhor opção?", opts: ["5 minutos", "1 hora", "2 horas", "1 dia"], c: 0, h: "5 minutos é o menor intervalo." },
                    { id: 50, bloom: 5, q: "Qual é a melhor justificativa para dizer que 1 mês é menor que 1 ano?", opts: ["Porque o mês é mais bonito", "Porque 1 ano tem 12 meses", "Porque todo mundo fala isso", "Porque meses não existem"], c: 1, h: "1 ano = 12 meses, então 1 mês é bem menor que 1 ano." },
                    { id: 51, bloom: 6, q: "Escolha um horário que represente bem 'acordar cedo para ir à escola':", opts: ["3:00 da madrugada", "6:30 da manhã", "12:00 (meio-dia)", "23:00 (11 da noite)"], c: 1, h: "6:30 é um horário comum para acordar cedo." },
                    { id: 52, bloom: 6, q: "Você quer inventar um tempo de leitura ANTES de dormir, que não seja muito longo. Qual é uma boa escolha?", opts: ["10 minutos", "3 horas", "2 dias", "1 semana"], c: 0, h: "10 minutos é um tempo curto e possível todo dia." },
                    { id: 53, bloom: 6, q: "Crie uma situação que dure CERCA de 1 hora:", opts: ["Escovar os dentes", "Assistir um episódio de desenho", "Piscar os olhos", "Dar um passo"], c: 1, h: "Um episódio de desenho ou programa pode durar perto de 1 hora." },
                    { id: 54, bloom: 6, q: "Qual intervalo de tempo faz sentido para uma partida de futebol infantil?", opts: ["5 segundos", "10 minutos", "1 hora ou mais", "1 semana"], c: 2, h: "Uma partida costuma durar perto de 1 hora (contando pausas)." },
                    { id: 55, bloom: 6, q: "Você quer inventar um cronograma: 20 minutos de leitura + 40 minutos de brincadeira. Quanto tempo total?", opts: ["30 minutos", "40 minutos", "60 minutos", "90 minutos"], c: 2, h: "20 + 40 = 60 minutos = 1 hora." },
                    { id: 56, bloom: 6, q: "Você quer dividir 2 horas de estudo em dois períodos IGUAIS. Quanto tempo terá cada período?", opts: ["30 minutos", "45 minutos", "1 hora", "2 horas"], c: 2, h: "2 horas divididas por 2 = 1 hora para cada." },
                    { id: 57, bloom: 6, q: "Para planejar uma sessão de jogos não muito longa, qual duração é mais adequada?", opts: ["15 minutos", "3 horas", "2 dias", "1 semana"], c: 0, h: "15 minutos é um intervalo curto e controlado." },
                    { id: 58, bloom: 6, q: "Você vai ao cinema e o filme dura 2 horas. Se a sessão começa às 16:30, que horário termina?", opts: ["17:00", "18:30", "19:30", "20:30"], c: 1, h: "16:30 + 2 horas = 18:30." },
                    { id: 59, bloom: 6, q: "Para um recreio na escola, qual tempo faz mais sentido?", opts: ["5 minutos", "15 minutos", "3 horas", "1 dia"], c: 1, h: "Recreios costumam durar perto de 15 minutos ou mais, mas não horas." },
                    { id: 60, bloom: 6, q: "Você quer criar um desafio: ficar 1 minuto em silêncio. O que é verdade sobre esse tempo?", opts: ["É muito mais que 1 hora", "É igual a 60 segundos", "É igual a 10 segundos", "Não tem como medir"], c: 1, h: "1 minuto = 60 segundos." },
                    { id: 61, bloom: 7, q: "Se você dobra o tempo de estudo de 30 minutos para 60 minutos, o que aconteceu com o tempo de estudo?", opts: ["Diminuiu", "Ficou igual", "Dobrou", "Virou zero"], c: 2, h: "De 30 para 60 minutos → o tempo foi dobrado." },
                    { id: 62, bloom: 7, q: "Você sabe que 1 hora = 60 minutos. Se estudar 2 horas, isso equivale a:", opts: ["60 minutos", "90 minutos", "120 minutos", "30 minutos"], c: 2, h: "2 × 60 = 120 minutos." },
                    { id: 63, bloom: 7, q: "Se você aumenta o número de dias de estudo na semana, o que acontece com o total de horas estudadas, se você estudar o mesmo tempo por dia?", opts: ["Aumenta", "Diminui", "Fica sempre igual", "Desaparece"], c: 0, h: "Mais dias × mesma quantidade de horas = mais horas no total." },
                    { id: 64, bloom: 7, q: "Você sabe que 3 dias têm 72 horas. Como chegou a esse número?", opts: ["3 × 12", "3 × 24", "3 × 60", "3 × 7"], c: 1, h: "1 dia = 24 horas, então 3 × 24 = 72." },
                    { id: 65, bloom: 7, q: "Se 1 semana tem 7 dias, quantos dias há em 2 semanas?", opts: ["10 dias", "12 dias", "14 dias", "21 dias"], c: 2, h: "2 × 7 = 14 dias." },
                    { id: 66, bloom: 7, q: "Você quer saber se 90 minutos é mais ou menos que 1 hora e meia. Qual raciocínio é melhor?", opts: ["Pensar que 1 hora e meia são 60 + 30 = 90 minutos", "Adivinhar", "Dizer que 1 hora e meia é 30 minutos", "Dizer que não dá para comparar"], c: 0, h: "1h30 = 60 + 30 = 90 minutos." },
                    { id: 67, bloom: 7, q: "Se você estudar 1 hora por dia durante 5 dias, quantas horas terá estudado no total?", opts: ["3 horas", "4 horas", "5 horas", "6 horas"], c: 2, h: "1 × 5 = 5 horas." },
                    { id: 68, bloom: 7, q: "Você quer saber quantas horas existem em 2 dias. Qual conta ajuda?", opts: ["2 + 24", "2 × 24", "24 ÷ 2", "2 ÷ 24"], c: 1, h: "2 dias × 24 horas por dia = 48 horas." },
                    { id: 69, bloom: 7, q: "Se uma atividade começa às 14:00 e acaba às 17:00, qual frase é CORRETA?", opts: ["Durou 2 horas", "Durou 3 horas", "Durou 4 horas", "Durou 5 horas"], c: 1, h: "De 14:00 a 17:00 passaram 3 horas." },
                    { id: 70, bloom: 7, q: "Se você sabe que 1 minuto = 60 segundos, qual é o total de segundos em 5 minutos?", opts: ["60 segundos", "120 segundos", "180 segundos", "300 segundos"], c: 3, h: "5 × 60 = 300 segundos." }
                ]
            }

            
        ] },
        {   id: "hist", name: "História", icon: "🏛️", color: "bg-yellow-500", accent: "border-yellow-600", categories: [
    {
        id: "heranca_indigena",
        name: "Herança indígena",
        prep: {
            title: "Marcas indígenas",
            content: "<p>Muitas coisas que fazemos hoje vieram dos povos indígenas! <br><br><strong>Comidas:</strong> Mandioca, milho, pipoca.<br><strong>Costumes:</strong> Tomar banho todos os dias, dormir em rede.<br><strong>Palavras:</strong> Abacaxi, pipoca, perereca.</p>",
            skin: "🏹"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 1001, bloom: 1, q: "Qual destes alimentos é de origem indígena?", opts: ["Hambúrguer", "Mandioca", "Pizza", "Sushi"], c: 1, h: "É uma raiz muito usada para fazer farinha e tapioca." },
            { id: 1002, bloom: 1, q: "Onde muitos povos indígenas moravam antigamente?", opts: ["Em prédios", "Em castelos", "Em ocas", "Em iglus"], c: 2, h: "Eram casas grandes feitas de madeira e palha." },
            { id: 1003, bloom: 1, q: "Qual hábito de higiene aprendemos com os indígenas?", opts: ["Usar perfume", "Tomar banho todos os dias", "Cortar o cabelo", "Escovar os dentes"], c: 1, h: "Eles adoravam se banhar nos rios." },
            { id: 1004, bloom: 1, q: "Que objeto indígena usamos para dormir ou descansar?", opts: ["Cama", "Sofá", "Rede", "Colchão"], c: 2, h: "É feita de tecido e fica pendurada." },
            { id: 1005, bloom: 1, q: "Quem é o líder espiritual e curandeiro na aldeia?", opts: ["Cacique", "Pajé", "Guerreiro", "Professor"], c: 1, h: "Ele cuida da saúde e dos rituais." },
            { id: 1006, bloom: 1, q: "Qual palavra abaixo tem origem indígena?", opts: ["Abacaxi", "Computador", "Futebol", "Chocolate"], c: 0, h: "É o nome de uma fruta com coroa." },
            { id: 1007, bloom: 1, q: "O que os indígenas usavam para pintar o corpo?", opts: ["Tinta guache", "Canetinha", "Urucum e Genipapo", "Lápis de cor"], c: 2, h: "São tintas naturais tiradas de plantas." },
            { id: 1008, bloom: 1, q: "Qual destes brinquedos tem origem indígena?", opts: ["Videogame", "Peteca", "Carrinho", "Boneca de plástico"], c: 1, h: "É feito com penas e se joga batendo com a mão." },
            { id: 1009, bloom: 1, q: "Como os indígenas conseguiam comida na natureza?", opts: ["Comprando no mercado", "Pedindo pizza", "Caçando e pescando", "Trocando moedas"], c: 2, h: "Eles buscavam direto na floresta e nos rios." },
            { id: 1010, bloom: 1, q: "Qual cereal era a base da alimentação indígena?", opts: ["Trigo", "Arroz", "Milho", "Aveia"], c: 2, h: "Usado para fazer pipoca e pamonha." },

            // BLOOM 2 (Entender)
            { id: 1011, bloom: 2, q: "Por que os indígenas pintavam o corpo?", opts: ["Para rituais e proteção", "Porque achavam feio sem tinta", "Para imitar roupas", "Para se esconder dos animais"], c: 0, h: "As pinturas tinham significados especiais e mágicos." },
            { id: 1012, bloom: 2, q: "O que significa dizer que o Brasil tem herança indígena?", opts: ["Que todos somos indígenas", "Que nossa cultura tem costumes indígenas", "Que só usamos coisas indígenas", "Que os indígenas mandam no país"], c: 1, h: "Significa que aprendemos e usamos coisas deles hoje." },
            { id: 1013, bloom: 2, q: "Qual a função do Cacique na tribo?", opts: ["Cuidar dos doentes", "Fazer a comida", "Liderar e organizar a tribo", "Pintar as crianças"], c: 2, h: "Ele é como um chefe político da aldeia." },
            { id: 1014, bloom: 2, q: "Como as crianças indígenas aprendiam?", opts: ["Lendo livros sozinhas", "Observando os adultos e ouvindo histórias", "Vendo televisão", "Indo para a cidade"], c: 1, h: "O aprendizado era prático e oral." },
            { id: 1015, bloom: 2, q: "Por que a mandioca é tão importante?", opts: ["Porque é fácil de plantar", "Porque é a base de muitas comidas", "Porque serve de remédio", "Porque é doce"], c: 1, h: "Dela se faz farinha, beiju e muito mais." },
            { id: 1016, bloom: 2, q: "O que é uma lenda indígena?", opts: ["Uma mentira", "Uma história para explicar a natureza", "Uma notícia de jornal", "Uma música de festa"], c: 1, h: "Explicava a origem da noite, da mandioca, etc." },
            { id: 1017, bloom: 2, q: "Por que os indígenas respeitavam tanto a natureza?", opts: ["Porque tinham medo", "Porque ela dava tudo que precisavam", "Porque era lei", "Porque não gostavam da cidade"], c: 1, h: "A floresta era a casa e o mercado deles." },
            { id: 1018, bloom: 2, q: "O que é um 'mutirão' na cultura indígena?", opts: ["Uma festa", "Trabalho coletivo onde todos ajudam", "Uma guerra", "Um tipo de comida"], c: 1, h: "Quando todos se juntam para construir algo rápido." },
            { id: 1019, bloom: 2, q: "Para que servia o arco e flecha?", opts: ["Apenas para brincar", "Para caça e defesa", "Para cortar árvores", "Para pescar apenas"], c: 1, h: "Era uma ferramenta fundamental de sobrevivência." },
            { id: 1020, bloom: 2, q: "O que significa a palavra 'Pindorama'?", opts: ["Terra das Palmeiras", "Lugar de Ouro", "Casa dos Homens", "Rio Grande"], c: 0, h: "Era como alguns indígenas chamavam o Brasil." },

            // BLOOM 3 (Aplicar)
            { id: 1021, bloom: 3, q: "Se você comer tapioca no café, está praticando um costume:", opts: ["Africano", "Indígena", "Português", "Italiano"], c: 1, h: "Tapioca vem da mandioca." },
            { id: 1022, bloom: 3, q: "Ao chamar alguém de 'xará', você usa uma palavra Tupi. Isso mostra:", opts: ["Que você fala errado", "A influência indígena na língua", "Que você é estrangeiro", "Nada"], c: 1, h: "Muitas gírias nossas vêm do Tupi." },
            { id: 1023, bloom: 3, q: "Você vai acampar e dorme em uma rede. Quem inventou isso?", opts: ["Os escoteiros", "Os indígenas", "Os soldados", "Os astronautas"], c: 1, h: "Os indígenas já usavam redes nas ocas." },
            { id: 1024, bloom: 3, q: "Se uma cidade se chama 'Itaquaquecetuba', o nome é de origem:", opts: ["Portuguesa", "Indígena", "Inglesa", "Africana"], c: 1, h: "Nomes difíceis com 'Ita', 'Ibi', 'Uba' geralmente são indígenas." },
            { id: 1025, bloom: 3, q: "Um remédio feito de ervas da floresta é um saber:", opts: ["Industrial", "Indígena ancestral", "Moderno", "Químico"], c: 1, h: "Eles conheciam o poder de cura das plantas." },
            { id: 1026, bloom: 3, q: "Andar descalço na terra para sentir a natureza lembra:", opts: ["A vida na cidade", "A conexão indígena com a terra", "A escola", "O trabalho no escritório"], c: 1, h: "O contato direto com o solo é um costume nativo." },
            { id: 1027, bloom: 3, q: "Comer pipoca no cinema. A pipoca veio do:", opts: ["Trigo europeu", "Arroz asiático", "Milho indígena", "Feijão africano"], c: 2, h: "Estourar milho é uma técnica antiga da América." },
            { id: 1028, bloom: 3, q: "Usar cestos de palha para guardar coisas é uma técnica de:", opts: ["Trançado indígena", "Plástico moderno", "Vidro", "Ferro"], c: 0, h: "O artesanato com fibras naturais é herança deles." },
            { id: 1029, bloom: 3, q: "Chamar um menino de 'guri'. Guri é:", opts: ["Uma palavra inglesa", "Uma palavra indígena", "Uma palavra inventada", "Uma palavra portuguesa"], c: 1, h: "Vem do Tupi-Guarani." },
            { id: 1030, bloom: 3, q: "Tomar um banho de rio para se refrescar é um hábito:", opts: ["De origem europeia", "De origem indígena", "De origem asiática", "Moderno apenas"], c: 1, h: "Os portugueses se espantaram com o quanto os índios se banhavam." },

            // BLOOM 4 (Analisar)
            { id: 1031, bloom: 4, q: "Qual a diferença entre a escola da cidade e a educação na aldeia?", opts: ["Na aldeia não se aprende nada", "Na aldeia se aprende vivendo e observando", "Na cidade é mais fácil", "Na aldeia tem prova todo dia"], c: 1, h: "Na aldeia, a escola é o dia a dia e a natureza." },
            { id: 1032, bloom: 4, q: "Comparando uma casa de tijolo e uma oca, a oca é:", opts: ["Mais quente", "Feita de materiais naturais", "Mais resistente a tudo", "Menor que um quarto"], c: 1, h: "A oca usa palha e madeira, biodegradáveis." },
            { id: 1033, bloom: 4, q: "Antigamente, os indígenas caçavam para comer. Hoje, nós:", opts: ["Caçamos também", "Compramos no supermercado", "Não comemos carne", "Plantamos tudo"], c: 1, h: "Nossa forma de obter comida mudou muito." },
            { id: 1034, bloom: 4, q: "O que aconteceu com as terras indígenas ao longo do tempo?", opts: ["Aumentaram muito", "Diminuíram com a colonização", "Ficaram iguais", "Eles venderam tudo"], c: 1, h: "As cidades ocuparam o lugar das florestas." },
            { id: 1035, bloom: 4, q: "Diferente dos portugueses que usavam roupas pesadas, os indígenas:", opts: ["Usavam armaduras", "Andavam nus ou com pouca roupa", "Usavam casacos de pele", "Usavam uniformes"], c: 1, h: "Por causa do calor, usavam pouca ou nenhuma roupa." },
            { id: 1036, bloom: 4, q: "A medicina indígena usa ervas. A medicina moderna usa:", opts: ["Apenas rezas", "Remédios de laboratório", "Apenas água", "Frutas"], c: 1, h: "Hoje usamos química, mas a base vem das plantas." },
            { id: 1037, bloom: 4, q: "Na tribo tudo é de todos. Na nossa sociedade:", opts: ["Também dividimos tudo", "Cada um tem suas coisas (propriedade privada)", "Ninguém tem nada", "O governo tem tudo"], c: 1, h: "Nós temos o conceito de 'meu' e 'seu' muito forte." },
            { id: 1038, bloom: 4, q: "Os indígenas preservavam a mata. O homem moderno muitas vezes:", opts: ["Preserva mais ainda", "Desmata e polui", "Não liga para nada", "Vive na árvore"], c: 1, h: "Hoje temos problemas ambientais graves." },
            { id: 1039, bloom: 4, q: "A comunicação indígena era oral (fala). A nossa é:", opts: ["Apenas escrita", "Escrita, falada e digital", "Apenas por sinais", "Ninguém se fala"], c: 1, h: "Temos livros, internet e mensagens." },
            { id: 1040, bloom: 4, q: "Por que é importante proteger as terras indígenas hoje?", opts: ["Para eles ficarem ricos", "Para preservar a cultura e a natureza", "Para construir prédios", "Porque eles pediram"], c: 1, h: "Eles são os guardiões das florestas." }
        ]
    },
    {
        id: "africanos",
        name: "Os africanos",
        prep: {
            title: "Povos Africanos",
            content: "<p>A África não é um país, é um continente enorme! De lá vieram reis, rainhas, guerreiros e muitos conhecimentos.<br><br><strong>Diversidade:</strong> Muitas línguas e culturas.<br><strong>Habilidades:</strong> Agricultura, metalurgia e arte.</p>",
            skin: "🌍"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 2001, bloom: 1, q: "A África é um:", opts: ["País", "Continente", "Estado", "Cidade"], c: 1, h: "É um lugar gigante com vários países dentro." },
            { id: 2002, bloom: 1, q: "Como os africanos chegaram ao Brasil antigamente?", opts: ["De avião", "De carro", "Em navios", "A pé"], c: 2, h: "Atravessaram o oceano Atlântico." },
            { id: 2003, bloom: 1, q: "Os africanos que vieram para o Brasil eram:", opts: ["Turistas", "Escravizados", "Exploradores", "Convidados"], c: 1, h: "Eles foram trazidos contra a vontade." },
            { id: 2004, bloom: 1, q: "Antes de serem trazidos, os africanos eram:", opts: ["Livres", "Escravos", "Prisioneiros", "Sem casa"], c: 0, h: "Tinham suas vidas, famílias e trabalhos livres." },
            { id: 2005, bloom: 1, q: "O que é um 'Griot' na cultura africana?", opts: ["Um guerreiro", "Um contador de histórias", "Um tipo de comida", "Uma arma"], c: 1, h: "É quem guarda a memória e conta as lendas." },
            { id: 2006, bloom: 1, q: "Muitos povos africanos sabiam trabalhar com:", opts: ["Gelo", "Ferro e Ouro", "Plástico", "Vidro"], c: 1, h: "Eles eram ótimos em metalurgia." },
            { id: 2007, bloom: 1, q: "Qual oceano separa o Brasil da África?", opts: ["Pacífico", "Índico", "Atlântico", "Ártico"], c: 2, h: "É o mar que banha nossas praias." },
            { id: 2008, bloom: 1, q: "A África tem:", opts: ["Apenas florestas", "Apenas desertos", "Florestas, desertos e cidades", "Apenas gelo"], c: 2, h: "É um continente muito diverso em paisagens." },
            { id: 2009, bloom: 1, q: "Os africanos trouxeram para o Brasil suas:", opts: ["Roupas de frio", "Culturas e religiões", "Carruagens", "Neve"], c: 1, h: "Trouxeram seus deuses, festas e costumes." },
            { id: 2010, bloom: 1, q: "Um reino famoso da África antiga era:", opts: ["Reino do Congo", "Reino da Inglaterra", "Reino da França", "Reino gelado"], c: 0, h: "Era um reino poderoso na África." },

            // BLOOM 2 (Entender)
            { id: 2011, bloom: 2, q: "Por que dizemos que a África é o berço da humanidade?", opts: ["Porque só tem bebês", "Porque os primeiros humanos surgiram lá", "Porque fabricam berços", "Porque é pequena"], c: 1, h: "A história do ser humano começou lá." },
            { id: 2012, bloom: 2, q: "Como as histórias eram passadas na África antiga?", opts: ["Pelo WhatsApp", "Pela escrita apenas", "Pela fala (oralidade)", "Pela televisão"], c: 2, h: "Os mais velhos contavam para os mais novos." },
            { id: 2013, bloom: 2, q: "Os africanos eram todos iguais?", opts: ["Sim, todos falavam a mesma língua", "Não, tinham culturas e línguas diferentes", "Sim, todos eram reis", "Não, eles não se conheciam"], c: 1, h: "Havia centenas de povos diferentes." },
            { id: 2014, bloom: 2, q: "O que os africanos sabiam fazer muito bem?", opts: ["Apenas caçar", "Agricultura, mineração e arte", "Construir iglus", "Fazer neve"], c: 1, h: "Eles tinham tecnologias avançadas para a época." },
            { id: 2015, bloom: 2, q: "Por que os portugueses trouxeram africanos?", opts: ["Para passear", "Para trabalhar forçado nas plantações", "Para ensinar português", "Para conhecer o Brasil"], c: 1, h: "Precisavam de mão de obra para o açúcar." },
            { id: 2016, bloom: 2, q: "As máscaras africanas serviam para:", opts: ["Brincar de esconde-esconde", "Rituais religiosos e festas", "Proteger do sol", "Dormir"], c: 1, h: "Tinham significados sagrados." },
            { id: 2017, bloom: 2, q: "O que aconteceu com a cultura africana no Brasil?", opts: ["Desapareceu", "Se misturou e formou a cultura brasileira", "Foi proibida e acabou", "Ninguém lembra"], c: 1, h: "Ela está viva na nossa música, comida e fala." },
            { id: 2018, bloom: 2, q: "Os reinos africanos tinham:", opts: ["Apenas aldeias pobres", "Cidades ricas e organizadas", "Apenas florestas vazias", "Castelos de gelo"], c: 1, h: "Existiam impérios muito ricos." },
            { id: 2019, bloom: 2, q: "A viagem da África ao Brasil era:", opts: ["Rápida e confortável", "Longa, triste e perigosa", "Divertida", "Feita de avião"], c: 1, h: "Muitos adoeciam nos navios negreiros." },
            { id: 2020, bloom: 2, q: "O que os africanos valorizavam muito?", opts: ["O dinheiro apenas", "A família e os antepassados", "Carros velozes", "Ficar sozinhos"], c: 1, h: "O respeito aos mais velhos era essencial." },

            // BLOOM 3 (Aplicar)
            { id: 2021, bloom: 3, q: "Se você olhar um mapa, onde está a África?", opts: ["Ao norte do Brasil", "Do outro lado do oceano Atlântico", "Colada no Brasil", "No polo Sul"], c: 1, h: "Fica a leste do Brasil." },
            { id: 2022, bloom: 3, q: "Identificar uma pessoa negra é reconhecer sua origem:", opts: ["Europeia", "Africana", "Asiática", "Indígena"], c: 1, h: "A ascendência vem da África." },
            { id: 2023, bloom: 3, q: "Ao ver uma estampa de tecidos coloridos e geométricos, lembramos da:", opts: ["Ásia", "Arte Africana", "Europa", "Antártida"], c: 1, h: "Os tecidos africanos são famosos pelas cores." },
            { id: 2024, bloom: 3, q: "Se contarmos uma história dos nossos avós, agimos como:", opts: ["Um Griot", "Um soldado", "Um cozinheiro", "Um médico"], c: 0, h: "Estamos passando a memória adiante." },
            { id: 2025, bloom: 3, q: "A agricultura no Brasil cresceu graças ao saber:", opts: ["Dos marcianos", "Dos africanos", "Dos robôs", "Dos animais"], c: 1, h: "Eles trouxeram técnicas de plantio." },
            { id: 2026, bloom: 3, q: "Qual animal nos lembra a África?", opts: ["Pinguim", "Urso Polar", "Leão", "Canguru"], c: 2, h: "O rei da selva vive nas savanas africanas." },
            { id: 2027, bloom: 3, q: "O Brasil tem a maior população negra fora da África. Isso mostra:", opts: ["Que a África é aqui", "A forte ligação entre Brasil e África", "Que não tem ninguém na África", "Nada"], c: 1, h: "Muitos africanos vieram para cá." },
            { id: 2028, bloom: 3, q: "Usar turbantes e tranças é uma forma de:", opts: ["Esconder o cabelo", "Valorizar a beleza africana", "Sentir calor", "Dormir"], c: 1, h: "São estilos de origem africana." },
            { id: 2029, bloom: 3, q: "O ritmo do tambor nos lembra:", opts: ["O silêncio", "A música africana", "O vento", "O mar"], c: 1, h: "O tambor é central na cultura deles." },
            { id: 2030, bloom: 3, q: "Se você estuda os Iorubás e Bantos, estuda povos:", opts: ["Africanos", "Europeus", "Asiáticos", "Americanos"], c: 0, h: "São grandes grupos étnicos da África." },

            // BLOOM 4 (Analisar)
            { id: 2031, bloom: 4, q: "Qual a diferença entre um imigrante e um escravizado?", opts: ["Nenhuma", "O imigrante escolhe vir, o escravizado é forçado", "O escravizado ganha passagem", "O imigrante vem nadando"], c: 1, h: "A liberdade de escolha é a chave." },
            { id: 2032, bloom: 4, q: "O clima do Brasil e de partes da África é parecido. Por isso:", opts: ["Neva nos dois", "Plantas como café crescem bem nos dois", "Não chove nunca", "É sempre frio"], c: 1, h: "O clima tropical ajuda na agricultura." },
            { id: 2033, bloom: 4, q: "Por que existem tantas cores de pele no Brasil?", opts: ["Por causa do sol", "Pela mistura de indígenas, africanos e europeus", "Porque pintamos a pele", "Não existem cores diferentes"], c: 1, h: "Nossa história é feita de misturas." },
            { id: 2034, bloom: 4, q: "A África é pobre ou rica?", opts: ["Só pobre", "Rica em cultura e recursos, mas com problemas", "Não existe nada lá", "É vazia"], c: 1, h: "É um continente muito rico explorado por outros." },
            { id: 2035, bloom: 4, q: "Comparando: Um rei africano e um rei europeu.", opts: ["Só o europeu era rei", "Ambos governavam seus povos e tinham riquezas", "O africano não mandava nada", "Reis não existiam"], c: 1, h: "A África teve impérios poderosos." },
            { id: 2036, bloom: 4, q: "A escravidão tirou a liberdade, mas não tirou:", opts: ["O dinheiro", "A cultura e a memória", "A casa", "As roupas"], c: 1, h: "Eles guardaram seus saberes na mente e no coração." },
            { id: 2037, bloom: 4, q: "O que seria do Brasil sem os africanos?", opts: ["Igualzinho", "Muito diferente, sem nossa cultura atual", "Melhor", "Vazio"], c: 1, h: "Nossa identidade seria outra sem o samba, feijoada, etc." },
            { id: 2038, bloom: 4, q: "Por que estudamos a África na escola?", opts: ["Para viajar", "Para entender quem nós somos", "Porque é longe", "Para desenhar mapas"], c: 1, h: "Nossas raízes estão lá." },
            { id: 2039, bloom: 4, q: "Os navios negreiros eram chamados de 'tumbas flutuantes'. Por quê?", opts: ["Eram feitos de pedra", "Muitas pessoas morriam neles", "Eram submarinos", "Eram silenciosos"], c: 1, h: "As condições eram terríveis." },
            { id: 2040, bloom: 4, q: "A liberdade é importante porque:", opts: ["Podemos fazer o que quisermos", "Podemos decidir nossa própria vida", "Podemos não trabalhar", "Podemos dormir o dia todo"], c: 1, h: "Ninguém manda no nosso destino além de nós." }
        ]
    },
    {
        id: "vida_escravizados",
        name: "Vida dos escravizados",
        prep: {
            title: "O Tempo da Escravidão",
            content: "<p>Africanos foram trazidos à força para trabalhar muito sem ganhar nada. Mas eles resistiram!<br><br><strong>Trabalho:</strong> Cana-de-açúcar, café, minas.<br><strong>Resistência:</strong> Quilombos, capoeira.</p>",
            skin: "⛓️"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 3001, bloom: 1, q: "Onde os escravizados dormiam?", opts: ["Na Casa Grande", "Na Senzala", "No hotel", "Na floresta"], c: 1, h: "Era um galpão simples e sem conforto." },
            { id: 3002, bloom: 1, q: "Qual era o principal trabalho dos escravizados no início?", opts: ["Fábrica de carros", "Plantação de cana-de-açúcar", "Escritório", "Lojas"], c: 1, h: "Produziam açúcar para vender." },
            { id: 3003, bloom: 1, q: "O que é um Quilombo?", opts: ["Uma festa", "Um refúgio de escravizados que fugiam", "Uma comida", "Uma dança"], c: 1, h: "Lugar de liberdade e resistência." },
            { id: 3004, bloom: 1, q: "Quem foi Zumbi dos Palmares?", opts: ["Um cantor", "Um grande líder de um quilombo", "Um rei português", "Um soldado"], c: 1, h: "Lutou pela liberdade dos negros." },
            { id: 3005, bloom: 1, q: "A capoeira foi criada como:", opts: ["Apenas dança", "Luta disfarçada de dança", "Ginástica", "Teatro"], c: 1, h: "Servia para se defender." },
            { id: 3006, bloom: 1, q: "Os escravizados recebiam salário?", opts: ["Sim, muito dinheiro", "Não, trabalhavam de graça", "Às vezes", "Ganhavam ouro"], c: 1, h: "Eles eram forçados a trabalhar." },
            { id: 3007, bloom: 1, q: "Quem mandava nos escravizados?", opts: ["O Senhor de Engenho", "O Pajé", "O Prefeito", "O Padre"], c: 0, h: "O dono da fazenda." },
            { id: 3008, bloom: 1, q: "O que os escravizados comiam?", opts: ["O que quisessem", "Restos de comida dos senhores", "Pizza", "Churrasco"], c: 1, h: "A alimentação era simples e pouca." },
            { id: 3009, bloom: 1, q: "Dia 20 de Novembro é o dia:", opts: ["Do Natal", "Da Consciência Negra", "Das Crianças", "Do Índio"], c: 1, h: "Homenagem a Zumbi." },
            { id: 3010, bloom: 1, q: "Como os escravizados eram transportados?", opts: ["Em ônibus", "Em navios negreiros", "Em trens", "Em cavalos"], c: 1, h: "Atravessavam o mar em condições ruins." },

            // BLOOM 2 (Entender)
            { id: 3011, bloom: 2, q: "Por que os escravizados fugiam para os quilombos?", opts: ["Para passear", "Para serem livres e viverem em comunidade", "Para caçar", "Para dormir"], c: 1, h: "Lá eles não tinham donos." },
            { id: 3012, bloom: 2, q: "Por que a capoeira parece uma dança?", opts: ["Para enganar os senhores", "Porque eles gostavam de dançar", "Porque não sabiam lutar", "Porque tinha música"], c: 0, h: "Era proibido treinar lutas, então disfarçavam." },
            { id: 3013, bloom: 2, q: "A vida na senzala era:", opts: ["Boa e confortável", "Dura, triste e apertada", "Cheia de festas", "Silenciosa"], c: 1, h: "Muitas pessoas viviam juntas em pouco espaço." },
            { id: 3014, bloom: 2, q: "O que significa 'resistência' na escravidão?", opts: ["Aceitar tudo", "Lutar contra a escravidão e manter a cultura", "Ficar forte", "Correr maratona"], c: 1, h: "É não deixar sua cultura morrer." },
            { id: 3015, bloom: 2, q: "Quem eram as 'Mães Pretas'?", opts: ["Mulheres escravizadas que cuidavam dos filhos dos senhores", "Professoras", "Rainhas", "Cozinheiras apenas"], c: 0, h: "Elas amamentavam e criavam as crianças brancas." },
            { id: 3016, bloom: 2, q: "O trabalho nas minas de ouro era:", opts: ["Fácil e rico", "Perigoso e cansativo", "Divertido", "Rápido"], c: 1, h: "Muitos ficavam doentes buscando ouro na água." },
            { id: 3017, bloom: 2, q: "Por que Zumbi é um herói?", opts: ["Porque voava", "Porque defendeu seu povo até o fim", "Porque era rico", "Porque escreveu livros"], c: 1, h: "Símbolo de coragem." },
            { id: 3018, bloom: 2, q: "Como os escravizados mantinham sua religião?", opts: ["Escondidos ou misturando com santos católicos", "Na igreja", "Na TV", "Não mantinham"], c: 0, h: "Eles precisavam disfarçar suas crenças." },
            { id: 3019, bloom: 2, q: "A Lei Áurea serviu para:", opts: ["Criar o Brasil", "Acabar com a escravidão", "Começar a guerra", "Dar feriado"], c: 1, h: "Foi a lei que libertou os escravos." },
            { id: 3020, bloom: 2, q: "O que acontecia se um escravizado não trabalhasse?", opts: ["Ganhava folga", "Era castigado", "Ganhava doce", "Ia para casa"], c: 1, h: "Os castigos físicos eram comuns." },

            // BLOOM 3 (Aplicar)
            { id: 3021, bloom: 3, q: "Se você ver uma roda de capoeira hoje, você vê:", opts: ["Uma briga", "Uma herança de resistência cultural", "Um esporte olímpico", "Uma festa junina"], c: 1, h: "É uma tradição viva." },
            { id: 3022, bloom: 3, q: "Visitar um quilombo hoje é conhecer:", opts: ["Um museu", "A história viva dos descendentes", "Uma fazenda", "Uma floresta"], c: 1, h: "Muitos quilombos ainda existem." },
            { id: 3023, bloom: 3, q: "A feijoada, segundo a lenda, veio de:", opts: ["Restos de carne que os senhores não queriam", "Comida de rei", "Receita francesa", "Peixe"], c: 0, h: "Eles transformaram sobras em um prato delicioso." },
            { id: 3024, bloom: 3, q: "Quando usamos a palavra 'banzo' (tristeza), lembramos:", opts: ["Da saudade da África", "De alegria", "De fome", "De sono"], c: 0, h: "Era a tristeza profunda dos escravizados." },
            { id: 3025, bloom: 3, q: "Identificar racismo hoje é importante para:", opts: ["Nada", "Combater o que começou na escravidão", "Fazer amigos", "Estudar"], c: 1, h: "O preconceito vem dessa época." },
            { id: 3026, bloom: 3, q: "Onde podemos ver marcas do trabalho escravo?", opts: ["Em igrejas antigas e fazendas históricas", "No shopping", "Na praia", "Na lua"], c: 0, h: "Muitas construções antigas foram feitas por eles." },
            { id: 3027, bloom: 3, q: "Dandara dos Palmares foi:", opts: ["Uma guerreira esposa de Zumbi", "Uma cantora", "Uma cozinheira", "Uma lenda"], c: 0, h: "Mulheres também lutaram." },
            { id: 3028, bloom: 3, q: "Se trabalharmos sem receber, isso é:", opts: ["Estágio", "Trabalho análogo à escravidão", "Brincadeira", "Ajuda"], c: 1, h: "Trabalho deve ser pago." },
            { id: 3029, bloom: 3, q: "Aleijadinho, grande artista, era filho de:", opts: ["Rei e Rainha", "Português e Escravizada", "Índio e Africana", "Dois portugueses"], c: 1, h: "Ele sofreu preconceito mas foi genial." },
            { id: 3030, bloom: 3, q: "A música 'Canto das Três Raças' fala sobre:", opts: ["Futebol", "O sofrimento e força de negros e índios", "Natureza", "Amor"], c: 1, h: "Fala da construção do Brasil." },

            // BLOOM 4 (Analisar)
            { id: 3031, bloom: 4, q: "Qual a diferença entre trabalho e escravidão?", opts: ["Nenhuma", "No trabalho você recebe e é livre; na escravidão não", "Trabalho é chato", "Escravidão é remunerada"], c: 1, h: "A liberdade e o salário são a diferença." },
            { id: 3032, bloom: 4, q: "Por que a escravidão durou tanto tempo?", opts: ["Porque era boa", "Porque gerava muito lucro para os senhores", "Porque ninguém ligava", "Porque não tinha lei"], c: 1, h: "O dinheiro movia o sistema." },
            { id: 3033, bloom: 4, q: "O Quilombo era diferente da Fazenda porque:", opts: ["No Quilombo eram livres e trabalhavam para si", "Na Fazenda era melhor", "O Quilombo era menor", "Não tinha comida"], c: 0, h: "Lá eles viviam de forma comunitária." },
            { id: 3034, bloom: 4, q: "A Princesa Isabel assinou a lei, mas quem lutou pela liberdade?", opts: ["Só ela", "Os próprios escravizados e abolicionistas", "O rei", "Ninguém"], c: 1, h: "A liberdade foi uma conquista de muitas lutas." },
            { id: 3035, bloom: 4, q: "Ser livre sem ter para onde ir após a Lei Áurea foi:", opts: ["Ótimo", "Um grande problema difícil", "Fácil", "Divertido"], c: 1, h: "Eles não ganharam terras nem emprego." },
            { id: 3036, bloom: 4, q: "A escravidão deixou marcas hoje?", opts: ["Não, acabou faz tempo", "Sim, na desigualdade e no preconceito", "Tudo foi resolvido", "Ninguém lembra"], c: 1, h: "Ainda lutamos por igualdade." },
            { id: 3037, bloom: 4, q: "Comparando Zumbi e um Rei:", opts: ["Zumbi era pobre", "Zumbi liderava e protegia seu povo como um rei", "Rei é melhor", "Zumbi não mandava"], c: 1, h: "Ele exerceu liderança e governo em Palmares." },
            { id: 3038, bloom: 4, q: "Por que proibiam a religião africana?", opts: ["Porque era feia", "Para dominar e apagar a cultura deles", "Porque fazia barulho", "Sem motivo"], c: 1, h: "Tirar a cultura ajuda a dominar a pessoa." },
            { id: 3039, bloom: 4, q: "O café enriqueceu o Brasil, mas custou:", opts: ["Pouco dinheiro", "O suor e sangue dos escravizados", "Apenas água", "Nada"], c: 1, h: "A riqueza foi construída sobre o trabalho forçado." },
            { id: 3040, bloom: 4, q: "A resistência cultural foi importante para:", opts: ["Nada", "Manter a identidade do povo negro viva", "Arrumar briga", "Esquecer a África"], c: 1, h: "Sem ela, as tradições teriam sumido." }
        ]
    },
    {
        id: "heranca_africana",
        name: "Herança africana",
        prep: {
            title: "Marcas Africanas",
            content: "<p>O Brasil tem um pedacinho da África em todo lugar! <br><br><strong>Música:</strong> Samba, Maracatu.<br><strong>Comida:</strong> Acarajé, Vatapá, Feijoada.<br><strong>Palavras:</strong> Moleque, caçula, dengo.</p>",
            skin: "🥁"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 4001, bloom: 1, q: "Qual instrumento musical é símbolo da Capoeira?", opts: ["Violão", "Berimbau", "Flauta", "Piano"], c: 1, h: "Tem um arco e uma cabaça." },
            { id: 4002, bloom: 1, q: "O Acarajé é uma comida típica feita de:", opts: ["Feijão fradinho frito no azeite", "Milho cozido", "Trigo", "Carne de sol"], c: 0, h: "É um bolinho famoso na Bahia." },
            { id: 4003, bloom: 1, q: "Qual destas palavras usamos graças aos africanos?", opts: ["Shopping", "Moleque", "Abajur", "Sanduíche"], c: 1, h: "Significa menino travesso." },
            { id: 4004, bloom: 1, q: "O Samba nasceu da mistura de ritmos:", opts: ["Europeus", "Africanos", "Asiáticos", "Americanos"], c: 1, h: "Vem dos tambores e batuques." },
            { id: 4005, bloom: 1, q: "O que é um turbante?", opts: ["Um sapato", "Um tecido amarrado na cabeça", "Uma calça", "Um cinto"], c: 1, h: "É um acessório de beleza e identidade." },
            { id: 4006, bloom: 1, q: "A palavra 'Cafuné' significa:", opts: ["Briga", "Carinho na cabeça", "Comida", "Dança"], c: 1, h: "Gesto de afeto nos cabelos." },
            { id: 4007, bloom: 1, q: "Qual festa popular tem muita influência africana?", opts: ["Carnaval", "Halloween", "Páscoa", "Dia das Mães"], c: 0, h: "Tem desfiles, baterias e muita cor." },
            { id: 4008, bloom: 1, q: "O que é o 'Vatapá'?", opts: ["Uma dança", "Um prato típico cremoso", "Uma roupa", "Um instrumento"], c: 1, h: "Comida deliciosa com azeite de dendê." },
            { id: 4009, bloom: 1, q: "A Congada é uma festa que celebra:", opts: ["Reis do Congo e santos", "O Descobrimento", "O Natal", "A Independência"], c: 0, h: "Mistura tradições africanas e católicas." },
            { id: 4010, bloom: 1, q: "Qual destes é um orixá famoso na cultura afro-brasileira?", opts: ["Zeus", "Thor", "Iemanjá", "Hércules"], c: 2, h: "A rainha do mar." },

            // BLOOM 2 (Entender)
            { id: 4011, bloom: 2, q: "Por que usamos roupas brancas na sexta-feira em alguns lugares?", opts: ["Porque está calor", "Em respeito às tradições religiosas afro-brasileiras", "Porque é moda", "Sem motivo"], c: 1, h: "É uma homenagem a Oxalá." },
            { id: 4012, bloom: 2, q: "Azeite de Dendê dá cor e sabor à comida. Ele veio de onde?", opts: ["Da África", "Do Japão", "Da Itália", "Da Argentina"], c: 0, h: "É fruto de uma palmeira africana." },
            { id: 4013, bloom: 2, q: "O que significa a palavra 'Axé'?", opts: ["Azar", "Energia positiva e força", "Dinheiro", "Silêncio"], c: 1, h: "Usamos para desejar coisas boas." },
            { id: 4014, bloom: 2, q: "Por que a feijoada tem pedaços de porco (pé, orelha)?", opts: ["Porque é chique", "Porque os escravizados aproveitavam tudo do porco", "Porque é leve", "Por engano"], c: 1, h: "Eles transformavam sobras em banquete." },
            { id: 4015, bloom: 2, q: "A capoeira mistura luta com dança para:", opts: ["Ficar bonita", "Disfarçar o treino de defesa", "Cansar menos", "Ganhar dinheiro"], c: 1, h: "Os senhores proibiam lutas." },
            { id: 4016, bloom: 2, q: "O Berimbau comanda a roda de capoeira. Ele dita:", opts: ["O preço", "O ritmo e a velocidade do jogo", "Quem ganha", "A hora de dormir"], c: 1, h: "Se ele toca rápido, o jogo acelera." },
            { id: 4017, bloom: 2, q: "Muitas palavras com 'qu' (quitute, quindim) vieram:", opts: ["Do Inglês", "Das línguas africanas (Banto)", "Do Francês", "Do Espanhol"], c: 1, h: "Influência dos povos de Angola e Congo." },
            { id: 4018, bloom: 2, q: "As tranças no cabelo serviam antigamente para:", opts: ["Apenas beleza", "Desenhar mapas de fuga e guardar sementes", "Esquentar a cabeça", "Nada"], c: 1, h: "Tinham uma função secreta e inteligente." },
            { id: 4019, bloom: 2, q: "O Maracatu é uma dança que lembra:", opts: ["Uma coroação real", "Uma briga", "Um casamento", "Uma corrida"], c: 0, h: "Tem rei, rainha e cortejo." },
            { id: 4020, bloom: 2, q: "A herança africana está:", opts: ["Só nos museus", "Viva no nosso dia a dia", "Apenas nos livros", "Esquecida"], c: 1, h: "Comemos, falamos e dançamos essa cultura." },

            // BLOOM 3 (Aplicar)
            { id: 4021, bloom: 3, q: "Se você diz 'Vou tirar um cochilo', usou uma palavra:", opts: ["Indígena", "Africana", "Inglesa", "Italiana"], c: 1, h: "Cochilo vem de 'Koxila'." },
            { id: 4022, bloom: 3, q: "Ao comer cocada de sobremesa, você prova uma receita:", opts: ["Afro-brasileira", "Japonesa", "Alemã", "Chinesa"], c: 0, h: "O coco foi muito usado pelos africanos aqui." },
            { id: 4023, bloom: 3, q: "Se você joga capoeira, você entra em uma:", opts: ["Quadra", "Roda", "Piscina", "Pista"], c: 1, h: "A capoeira acontece na roda." },
            { id: 4024, bloom: 3, q: "Usar um 'Abadá' no carnaval. A palavra vem:", opts: ["Do Português", "De línguas africanas", "Do Italiano", "Do Francês"], c: 1, h: "Era uma roupa larga usada na África." },
            { id: 4025, bloom: 3, q: "Tocar um atabaque (tambor) é praticar:", opts: ["Percussão de origem africana", "Música clássica", "Rock", "Silêncio"], c: 0, h: "O tambor é a alma do ritmo africano." },
            { id: 4026, bloom: 3, q: "Chamar o irmão mais novo de 'caçula'. Caçula é:", opts: ["Nome de flor", "Palavra de origem africana", "Nome de cidade", "Palavra inventada"], c: 1, h: "Significa 'o último da família'." },
            { id: 4027, bloom: 3, q: "Se você gosta de samba, você gosta de um ritmo:", opts: ["Afro-brasileiro", "Europeu", "Americano", "Asiático"], c: 0, h: "Nasceu nos terreiros e rodas." },
            { id: 4028, bloom: 3, q: "Dizer que alguém tem 'dengo' (manhoso) é usar:", opts: ["Gíria moderna", "Herança linguística africana", "Português de Portugal", "Nada"], c: 1, h: "Dengo é uma palavra linda que eles trouxeram." },
            { id: 4029, bloom: 3, q: "Comer 'mungunzá' ou 'canjica' nas festas. Origem:", opts: ["Africana", "Russa", "Japonesa", "Inglesa"], c: 0, h: "Pratos à base de milho e leite de coco." },
            { id: 4030, bloom: 3, q: "A pimenta malagueta é muito usada na culinária:", opts: ["Gaúcha", "Afro-brasileira (Bahia)", "Mineira", "Paulista"], c: 1, h: "A Bahia tem forte tempero africano." },

            // BLOOM 4 (Analisar)
            { id: 4031, bloom: 4, q: "Qual a diferença entre a cultura trazida pelos portugueses e pelos africanos?", opts: ["Nenhuma", "Portugueses trouxeram o idioma, africanos trouxeram ritmos e novos sabores", "Africanos não trouxeram nada", "Portugueses trouxeram a feijoada"], c: 1, h: "Cada povo contribuiu com coisas diferentes." },
            { id: 4032, bloom: 4, q: "O Candomblé foi perseguido no passado. Isso mostra:", opts: ["Respeito", "Intolerância religiosa", "Amizade", "Alegria"], c: 1, h: "Não aceitavam a religião do outro." },
            { id: 4033, bloom: 4, q: "Sem os africanos, o Carnaval do Brasil seria:", opts: ["Igualzinho", "Muito diferente, sem samba e tambores", "Melhor", "Mais colorido"], c: 1, h: "A alma do carnaval vem da África." },
            { id: 4034, bloom: 4, q: "A capoeira hoje é esporte, mas antes era:", opts: ["Brincadeira", "Luta de resistência e defesa", "Ginástica escolar", "Dança de salão"], c: 1, h: "Sua função mudou com o tempo." },
            { id: 4035, bloom: 4, q: "Muitas palavras africanas em nosso dicionário mostram:", opts: ["Que falamos errado", "A força da cultura negra na nossa fala", "Que não sabemos português", "Nada"], c: 1, h: "Nossa língua é viva e misturada." },
            { id: 4036, bloom: 4, q: "Por que a Bahia é chamada de 'Pequena África'?", opts: ["Porque é longe", "Porque lá a herança africana é muito forte e visível", "Porque é um país", "Por engano"], c: 1, h: "É o estado com mais marcas dessa cultura." },
            { id: 4037, bloom: 4, q: "O preconceito contra religiões afro-brasileiras é:", opts: ["Correto", "Um erro que precisamos combater (respeito)", "Engraçado", "Legal"], c: 1, h: "Todas as crenças merecem respeito." },
            { id: 4038, bloom: 4, q: "A feijoada era comida de senzala e hoje é prato nacional. Isso mostra:", opts: ["Que o Brasil empobreceu", "A valorização da cultura afro-brasileira", "Que não temos comida", "Nada"], c: 1, h: "O que era desprezado virou orgulho." },
            { id: 4039, bloom: 4, q: "Comparando: Violão (Europa) e Tambor (África).", opts: ["Um é melhor que o outro", "Juntos criam a música brasileira rica", "Não combinam", "O tambor é ruim"], c: 1, h: "A mistura cria nossa identidade." },
            { id: 4040, bloom: 4, q: "Reconhecer a herança africana ajuda a:", opts: ["Combater o racismo e ter orgulho do Brasil", "Dividir as pessoas", "Esquecer o passado", "Gastar dinheiro"], c: 0, h: "Entender nossa história nos torna melhores." }
        ]
    },
    {
        id: "diferencas_culturais",
        name: "Diferenças culturais",
        prep: {
            title: "Um Brasil, Muitas Caras",
            content: "<p>O Brasil é gigante! Cada região tem seu jeito de falar, comer e festejar. Somos uma mistura de indígenas, africanos, europeus e asiáticos.</p>",
            skin: "🎭"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 5001, bloom: 1, q: "O Brasil foi formado pela mistura de:", opts: ["Apenas portugueses", "Indígenas, Africanos e Europeus", "Apenas indígenas", "Americanos"], c: 1, h: "Três povos principais iniciaram nossa cultura." },
            { id: 5002, bloom: 1, q: "O Chimarrão é uma bebida típica do:", opts: ["Norte", "Sul", "Nordeste", "Centro-Oeste"], c: 1, h: "Bebida quente de erva-mate, comum no frio." },
            { id: 5003, bloom: 1, q: "A festa do Bumba-meu-boi é famosa no:", opts: ["Sul", "Nordeste e Norte", "Japão", "Antártida"], c: 1, h: "Conta a história de um boi que ressuscita." },
            { id: 5004, bloom: 1, q: "Os imigrantes japoneses trouxeram:", opts: ["Pizza", "Sushi e Judô", "Hambúrguer", "Churrasco"], c: 1, h: "Comida com peixe cru e arroz." },
            { id: 5005, bloom: 1, q: "Quem trouxe o hábito de comer macarrão e pizza?", opts: ["Alemães", "Italianos", "Chineses", "Árabes"], c: 1, h: "Vieram da Itália." },
            { id: 5006, bloom: 1, q: "O Pão de Queijo é famoso em qual estado?", opts: ["Rio de Janeiro", "Minas Gerais", "Amazonas", "Bahia"], c: 1, h: "Os mineiros adoram." },
            { id: 5007, bloom: 1, q: "O Açaí é uma fruta original da região:", opts: ["Norte (Amazônia)", "Sul", "Europa", "Deserto"], c: 0, h: "Vem da maior floresta do mundo." },
            { id: 5008, bloom: 1, q: "O Frevo é uma dança típica de:", opts: ["Pernambuco", "São Paulo", "Rio Grande do Sul", "Goiás"], c: 0, h: "Usam sombrinhas coloridas." },
            { id: 5009, bloom: 1, q: "O que é 'sotaque'?", opts: ["Falar errado", "O jeito especial de falar de cada região", "Gritar", "Falar inglês"], c: 1, h: "O chiado do carioca, o jeito cantado do baiano." },
            { id: 5010, bloom: 1, q: "A Oktoberfest (festa da cerveja) no sul veio dos:", opts: ["Japoneses", "Alemães", "Africanos", "Indígenas"], c: 1, h: "Imigrantes da Alemanha trouxeram." },

            // BLOOM 2 (Entender)
            { id: 5011, bloom: 2, q: "Por que o Brasil tem tantas culturas diferentes?", opts: ["Porque é um país pequeno", "Porque recebeu povos do mundo todo", "Porque ninguém gosta daqui", "Por engano"], c: 1, h: "Somos um país de dimensões continentais e migrações." },
            { id: 5012, bloom: 2, q: "O que significa 'Diversidade Cultural'?", opts: ["Tudo igual", "Várias culturas convivendo juntas", "Ninguém se gosta", "Uma cultura só"], c: 1, h: "É a riqueza de ser diferente." },
            { id: 5013, bloom: 2, q: "Se mudo de estado, a comida pode mudar?", opts: ["Não, tudo é igual", "Sim, cada lugar tem seus pratos", "Só muda a água", "Não existe comida diferente"], c: 1, h: "No Norte comem peixe, no Sul churrasco." },
            { id: 5014, bloom: 2, q: "Por que falamos português e não espanhol?", opts: ["Porque a Espanha não quis", "Porque fomos colonizados por Portugal", "Porque escolhemos", "Porque é mais fácil"], c: 1, h: "Portugal chegou aqui em 1500." },
            { id: 5015, bloom: 2, q: "Imigrantes são pessoas que:", opts: ["Nasceram no Brasil", "Vieram de outros países morar aqui", "Nunca saem de casa", "Não gostam de viajar"], c: 1, h: "Eles deixaram suas terras para viver aqui." },
            { id: 5016, bloom: 2, q: "A festa Junina celebra:", opts: ["O Carnaval", "A vida no campo e santos católicos", "O mar", "A cidade grande"], c: 1, h: "Tem fogueira, milho e quadrilha." },
            { id: 5017, bloom: 2, q: "Por que no Sul faz mais frio e tem casas de madeira?", opts: ["Influência europeia e clima", "Porque é moda", "Porque não tem tijolo", "Sem motivo"], c: 0, h: "O clima parece com o da Europa." },
            { id: 5018, bloom: 2, q: "O que é folclore?", opts: ["Notícias falsas", "Lendas, festas e tradições de um povo", "Jogos de videogame", "Matéria de matemática"], c: 1, h: "Saci, Curupira, Boto." },
            { id: 5019, bloom: 2, q: "As favelas surgiram por causa:", opts: ["Da riqueza", "Da desigualdade e falta de moradia", "De um projeto", "Da beleza"], c: 1, h: "É um problema social histórico." },
            { id: 5020, bloom: 2, q: "A culinária brasileira é:", opts: ["Sem graça", "Uma mistura deliciosa de várias origens", "Apenas hambúrguer", "Apenas salada"], c: 1, h: "Misturamos índio, branco e negro na panela." },

            // BLOOM 3 (Aplicar)
            { id: 5021, bloom: 3, q: "Se você chama pão de 'cacetinho', você provavelmente está no:", opts: ["Rio de Janeiro", "Rio Grande do Sul", "Bahia", "Amazonas"], c: 1, h: "É como os gaúchos chamam o pão francês." },
            { id: 5022, bloom: 3, q: "Comer sushi em São Paulo mostra a influência:", opts: ["Italiana", "Japonesa", "Alemã", "Árabe"], c: 1, h: "O bairro da Liberdade é famoso por isso." },
            { id: 5023, bloom: 3, q: "Dançar quadrilha na escola é manter viva uma tradição:", opts: ["Rural/Caipira", "Americana", "Chinesa", "Moderna"], c: 0, h: "Lembra a vida na roça." },
            { id: 5024, bloom: 3, q: "Se um amigo fala 'uai', ele deve ser de:", opts: ["São Paulo", "Minas Gerais", "Ceará", "Paraná"], c: 1, h: "Uai é a marca do mineiro!" },
            { id: 5025, bloom: 3, q: "Ao comer kibe ou esfiha, agradecemos aos imigrantes:", opts: ["Japoneses", "Árabes/Sírios/Libaneses", "Alemães", "Africanos"], c: 1, h: "Comida do Oriente Médio." },
            { id: 5026, bloom: 3, q: "O Carnaval do Rio é diferente do de Olinda. Por quê?", opts: ["Um é certo e outro errado", "Cada região tem seu jeito de festejar", "Não são diferentes", "Ninguém gosta"], c: 1, h: "No Rio tem desfile, em Olinda bonecos gigantes." },
            { id: 5027, bloom: 3, q: "Ver uma igreja coberta de ouro em Salvador lembra:", opts: ["O futuro", "O passado colonial e riqueza", "Pobreza", "Nada"], c: 1, h: "É herança do tempo de Portugal." },
            { id: 5028, bloom: 3, q: "A literatura de cordel é típica do:", opts: ["Sul", "Nordeste", "Norte", "Sudeste"], c: 1, h: "Poesias penduradas em cordas." },
            { id: 5029, bloom: 3, q: "Tomar tereré (bebida fria) é costume no:", opts: ["Centro-Oeste", "Sul (quente)", "Nordeste", "Polo Norte"], c: 0, h: "Muito comum no Mato Grosso do Sul." },
            { id: 5030, bloom: 3, q: "Praticar 'Capoeira' e dançar 'Fandango' mostra:", opts: ["Confusão", "A diversidade de culturas no mesmo país", "Que somos estrangeiros", "Nada"], c: 1, h: "Uma é afro, a outra europeia." },

            // BLOOM 4 (Analisar)
            { id: 5031, bloom: 4, q: "É correto rir do sotaque de alguém de outro estado?", opts: ["Sim, é engraçado", "Não, devemos respeitar as diferenças", "Sim, se for estranho", "Não sei"], c: 1, h: "Sotaque é identidade, não erro." },
            { id: 5032, bloom: 4, q: "O Brasil seria o mesmo sem os imigrantes?", opts: ["Sim", "Não, perderíamos muitas festas e comidas", "Seria melhor", "Não faria diferença"], c: 1, h: "Eles ajudaram a construir o país." },
            { id: 5033, bloom: 4, q: "Qual a relação entre comida e cultura?", opts: ["Nenhuma, é só para encher a barriga", "A comida conta a história e a origem do povo", "Comida é industrial", "Cultura não se come"], c: 1, h: "O prato diz quem você é." },
            { id: 5034, bloom: 4, q: "Por que no Brasil se fala português e nos vizinhos espanhol?", opts: ["Escolha do povo", "Divisão de terras antiga (Tratado de Tordesilhas)", "Sorteio", "O rei quis"], c: 1, h: "Portugal ficou com o Brasil, Espanha com o resto." },
            { id: 5035, bloom: 4, q: "A mistura de raças no Brasil resultou em:", opts: ["Brigas apenas", "Um povo miscigenado e diverso", "Todos iguais", "Ninguém brasileiro"], c: 1, h: "A miscigenação é nossa marca." },
            { id: 5036, bloom: 4, q: "Dizer que 'cultura do Sul é melhor que do Nordeste' é:", opts: ["Verdade", "Preconceito (todas têm valor)", "Mentira, a do Nordeste é melhor", "Opinião"], c: 1, h: "Não existe cultura superior." },
            { id: 5037, bloom: 4, q: "Como a geografia (clima, rios) influencia a cultura?", opts: ["Não influencia", "Define a roupa, a comida e a casa das pessoas", "Só muda a chuva", "Influencia a internet"], c: 1, h: "Quem vive no calor vive diferente de quem vive no frio." },
            { id: 5038, bloom: 4, q: "Preservar tradições antigas é:", opts: ["Perda de tempo", "Manter a identidade de um povo viva", "Coisa de velho", "Chato"], c: 1, h: "Um povo sem memória não existe." },
            { id: 5039, bloom: 4, q: "O Brasil é conhecido como 'país do futebol'. Isso é:", opts: ["A única cultura que temos", "Parte da nossa identidade cultural", "Mentira", "Ruim"], c: 1, h: "O esporte também é cultura." },
            { id: 5040, bloom: 4, q: "A unidade do Brasil, mesmo com tantas diferenças, está:", opts: ["No dinheiro", "Na língua portuguesa e no sentimento de ser brasileiro", "Nos governantes", "Na televisão"], c: 1, h: "Apesar de diferentes, somos todos um só povo." }
        ]
    }
] },
        {
        id: "cienc", 
        name: "Ciências", 
        icon: "🧪", 
        color: "bg-green-500", 
        accent: "border-green-600", 
        categories: [
            { 
                id: "recursos_naturais", 
                name: "Recursos naturais", 
                prep: { 
                    title: "Presentes da Natureza", 
                    content: "<p>Tudo que usamos vem da natureza! <br>🌱 <strong>Renováveis:</strong> Nunca acabam se cuidarmos (Sol, Vento).<br>🛢️ <strong>Não Renováveis:</strong> Podem acabar (Petróleo, Ouro).<br>💧 <strong>Água e Solo:</strong> Essenciais para a vida.</p>", 
                    skin: "🌱" 
                }, 
                pool: [
                    // BLOOM 1 (Lembrar)
                    { id: 7001, bloom: 1, q: "O que são recursos naturais?", opts: ["Coisas feitas em fábricas", "Elementos da natureza úteis ao homem", "Apenas animais", "Brinquedos"], c: 1, h: "Água, solo, sol, ar." },
                    { id: 7002, bloom: 1, q: "Qual destes é um recurso natural?", opts: ["Plástico", "Luz do Sol", "Vidro", "Celular"], c: 1, h: "Vem direto da natureza, sem fábrica." },
                    { id: 7003, bloom: 1, q: "O que o Sol nos fornece?", opts: ["Água e peixes", "Luz e Calor", "Vento e terra", "Ouro e Prata"], c: 1, h: "Ele ilumina e esquenta a Terra." },
                    { id: 7004, bloom: 1, q: "De onde vem a madeira?", opts: ["Das pedras", "Das árvores", "Do rio", "Do céu"], c: 1, h: "É o tronco das plantas." },
                    { id: 7005, bloom: 1, q: "Para que serve o solo (terra)?", opts: ["Para nada", "Para plantar alimentos e construir casas", "Para voar", "Para beber"], c: 1, h: "É onde pisamos e plantamos." },
                    { id: 7006, bloom: 1, q: "O ar é importante para:", opts: ["Apenas os peixes", "A respiração dos seres vivos", "Enfeitar o céu", "Nada"], c: 1, h: "Sem ele não respiramos." },
                    { id: 7007, bloom: 1, q: "O que é minério?", opts: ["Uma fruta", "Minerais retirados das rochas (ouro, ferro)", "Um tipo de água", "Uma nuvem"], c: 1, h: "Usamos para fazer metal." },
                    { id: 7008, bloom: 1, q: "A água é um recurso:", opts: ["Sólido apenas", "Natural e essencial à vida", "Artificial", "Seco"], c: 1, h: "Todos os seres vivos bebem." },
                    { id: 7009, bloom: 1, q: "O petróleo é usado para fazer:", opts: ["Comida", "Gasolina e plástico", "Roupas de algodão", "Papel"], c: 1, h: "É um líquido preto que sai do fundo da terra." },
                    { id: 7010, bloom: 1, q: "O vento pode gerar:", opts: ["Energia elétrica (eólica)", "Fogo", "Terra", "Ouro"], c: 0, h: "Ele gira grandes cata-ventos." },

                    // BLOOM 2 (Entender)
                    { id: 7011, bloom: 2, q: "O que é um recurso renovável?", opts: ["Aquele que acaba rápido", "Aquele que a natureza repõe (como o sol e vento)", "Aquele que compramos", "Aquele que polui"], c: 1, h: "Ele se renova, não acaba fácil." },
                    { id: 7012, bloom: 2, q: "O petróleo é não-renovável. Isso significa que:", opts: ["Ele nunca acaba", "Se usarmos tudo, ele acaba e não volta logo", "Ele se renova todo dia", "Ele vem da chuva"], c: 1, h: "Demora milhões de anos para formar." },
                    { id: 7013, bloom: 2, q: "Por que não devemos poluir o solo?", opts: ["Porque fica feio", "Porque contamina os alimentos e a água subterrânea", "Porque as pedras choram", "Não tem problema"], c: 1, h: "A sujeira entra na terra e na comida." },
                    { id: 7014, bloom: 2, q: "As plantas precisam de quê para crescer?", opts: ["Apenas areia", "Água, luz do sol, ar e solo fértil", "Refrigerante", "Escuro"], c: 1, h: "Recursos naturais básicos." },
                    { id: 7015, bloom: 2, q: "O que é desmatamento?", opts: ["Plantar árvores", "Cortar e queimar as florestas", "Cuidar dos animais", "Limpar o rio"], c: 1, h: "É destruir a mata." },
                    { id: 7016, bloom: 2, q: "Por que a água doce pode acabar?", opts: ["Porque o mar invade", "Pelo desperdício e poluição", "Porque o sol bebe tudo", "Ela não acaba"], c: 1, h: "Temos pouca água potável disponível." },
                    { id: 7017, bloom: 2, q: "A argila é um recurso do solo usado para:", opts: ["Comer", "Fazer cerâmica, tijolos e vasos", "Beber", "Queimar"], c: 1, h: "É um barro moldável." },
                    { id: 7018, bloom: 2, q: "O que acontece se o ar estiver poluído?", opts: ["Fica cheiroso", "Causa doenças respiratórias", "Fica colorido", "Nada"], c: 1, h: "Faz mal para o pulmão." },
                    { id: 7019, bloom: 2, q: "O Sol é importante porque:", opts: ["Aquece a Terra e permite a vida", "É amarelo", "Fica longe", "Dorme a noite"], c: 0, h: "Sem calor, a Terra seria gelo." },
                    { id: 7020, bloom: 2, q: "Recursos minerais (ferro, alumínio) vêm de onde?", opts: ["Das árvores", "Das rochas e do subsolo", "Do mar", "Das nuvens"], c: 1, h: "São escavados em minas." },

                    // BLOOM 3 (Aplicar)
                    { id: 7021, bloom: 3, q: "Se você deixa a luz acesa sem ninguém no quarto, você:", opts: ["Ajuda o planeta", "Desperdiça energia e recursos", "Não faz nada", "Economiza"], c: 1, h: "Energia gasta recursos naturais." },
                    { id: 7022, bloom: 3, q: "Para economizar papel (que vem da árvore), você deve:", opts: ["Rasgar tudo", "Usar os dois lados da folha", "Jogar no lixo", "Queimar"], c: 1, h: "Aproveitar o máximo o papel." },
                    { id: 7023, bloom: 3, q: "Separar o lixo (reciclagem) ajuda a:", opts: ["Sujar a casa", "Poupar recursos naturais, reutilizando materiais", "Gastar mais", "Matar plantas"], c: 1, h: "O plástico reciclado vira plástico novo." },
                    { id: 7024, bloom: 3, q: "Se a água da chuva é coletada em um balde, ela pode servir para:", opts: ["Beber direto", "Lavar o quintal (reuso)", "Tomar banho", "Cozinhar"], c: 1, h: "Economiza a água da torneira." },
                    { id: 7025, bloom: 3, q: "Um painel solar no telhado serve para:", opts: ["Enfeitar", "Transformar luz do sol em energia elétrica", "Esfriar a casa", "Atrair pássaros"], c: 1, h: "Usa um recurso renovável (Sol)." },
                    { id: 7026, bloom: 3, q: "Jogar óleo na pia contamina:", opts: ["O fogo", "A água dos rios", "O ar", "O prato"], c: 1, h: "O óleo vai pelo cano até a água." },
                    { id: 7027, bloom: 3, q: "Plantar uma árvore ajuda a:", opts: ["Melhorar o ar e dar sombra", "Sujar a rua", "Gastar água à toa", "Atrapalhar"], c: 0, h: "Árvores limpam o ar." },
                    { id: 7028, bloom: 3, q: "Usar sacola de pano no mercado evita:", opts: ["Gastar dinheiro", "O uso excessivo de sacolas plásticas (petróleo)", "Carregar peso", "Comprar comida"], c: 1, h: "Plástico polui e vem do petróleo." },
                    { id: 7029, bloom: 3, q: "Se você encontra uma minhoca na terra, isso indica:", opts: ["Sujeira", "Solo fértil e saudável", "Perigo", "Veneno"], c: 1, h: "Minhocas ajudam a terra." },
                    { id: 7030, bloom: 3, q: "Tomar banho rápido ajuda a preservar:", opts: ["O sabonete", "A água potável", "A toalha", "O tempo"], c: 1, h: "Menos tempo, menos água gasta." },

                    // BLOOM 4 (Analisar)
                    { id: 7031, bloom: 4, q: "Qual a diferença entre usar vento e usar carvão para energia?", opts: ["Nenhuma", "Vento é limpo e infinito; carvão polui e acaba", "Carvão é melhor", "Vento polui"], c: 1, h: "Um é renovável, o outro não." },
                    { id: 7032, bloom: 4, q: "O que acontece se retirarmos toda a vegetação da beira do rio?", opts: ["O rio fica bonito", "A terra cai no rio (assoreamento) e ele pode secar", "Os peixes gostam", "A água aumenta"], c: 1, h: "As raízes seguram a terra." },
                    { id: 7033, bloom: 4, q: "Reciclar latinha de alumínio é importante porque:", opts: ["É divertido", "Evita ter que cavar mais minério (bauxita) da natureza", "A latinha é bonita", "Não serve pra nada"], c: 1, h: "Poupa a mineração." },
                    { id: 7034, bloom: 4, q: "A agricultura depende do solo. Se usarmos muito veneno:", opts: ["O solo fica mais forte", "O solo pode ficar estragado e contaminar a comida", "As plantas crescem para sempre", "O solo vira ouro"], c: 1, h: "O solo é vivo e pode morrer." },
                    { id: 7035, bloom: 4, q: "Por que dizemos que a Amazônia é importante para o mundo?", opts: ["Porque é grande", "Pela biodiversidade e regulação do clima/ar", "Porque tem índio", "Porque chove"], c: 1, h: "Ela ajuda a controlar a temperatura da Terra." },
                    { id: 7036, bloom: 4, q: "O consumo exagerado (comprar sem precisar) afeta a natureza?", opts: ["Não", "Sim, pois tudo que compramos usa recursos naturais para ser feito", "Ajuda a natureza", "Só gasta dinheiro"], c: 1, h: "Mais produtos = mais recursos gastos." },
                    { id: 7037, bloom: 4, q: "Carros elétricos são melhores para o ar que carros a gasolina?", opts: ["Não", "Sim, pois não soltam fumaça na rua", "São iguais", "Gasolina é melhor"], c: 1, h: "Não queimam combustível." },
                    { id: 7038, bloom: 4, q: "A pesca excessiva (pescar tudo de uma vez) causa:", opts: ["Muitos peixes", "A extinção dos peixes, pois não dá tempo de reproduzir", "Riqueza eterna", "Mar limpo"], c: 1, h: "É preciso respeitar o tempo da natureza." },
                    { id: 7039, bloom: 4, q: "Construir uma cidade em cima de um manguezal é:", opts: ["Bom", "Ruim, pois destrói o berçário dos animais marinhos", "Moderno", "Bonito"], c: 1, h: "O mangue é vital para a vida marinha." },
                    { id: 7040, bloom: 4, q: "Para garantir recursos para o futuro (sustentabilidade), devemos:", opts: ["Gastar tudo hoje", "Usar com inteligência para não acabar", "Não usar nada", "Esconder os recursos"], c: 1, h: "Cuidar hoje para ter amanhã." }
                ] 
            },
            { 
                id: "materia_energia", 
                name: "Matéria e energia", 
                prep: { 
                    title: "Do que tudo é feito?", 
                    content: "<p>Tudo que ocupa lugar no espaço é matéria! <br>🧊 <strong>Estados:</strong> Sólido, Líquido, Gasoso.<br>⚡ <strong>Energia:</strong> Luz, Calor, Som, Eletricidade.</p>", 
                    skin: "⚡" 
                }, 
                pool: [
                    // BLOOM 1 (Lembrar)
                    { id: 7101, bloom: 1, q: "O gelo é a água em qual estado?", opts: ["Líquido", "Sólido", "Gasoso", "Vapor"], c: 1, h: "É duro e frio." },
                    { id: 7102, bloom: 1, q: "A água que bebemos está no estado:", opts: ["Sólido", "Líquido", "Gasoso", "Plasma"], c: 1, h: "Ela flui e molha." },
                    { id: 7103, bloom: 1, q: "O vapor da panela é água no estado:", opts: ["Sólido", "Gasoso", "Líquido", "Gelo"], c: 1, h: "Parece uma fumaça." },
                    { id: 7104, bloom: 1, q: "O que usamos para medir a temperatura (calor)?", opts: ["Régua", "Termômetro", "Balança", "Relógio"], c: 1, h: "Usamos quando temos febre." },
                    { id: 7105, bloom: 1, q: "O Sol nos fornece que tipo de energia?", opts: ["Elétrica", "Luz e Calor", "Sonora", "Cinética"], c: 1, h: "Ele ilumina e esquenta." },
                    { id: 7106, bloom: 1, q: "Para o carro andar, ele precisa de:", opts: ["Água", "Energia (combustível)", "Vento", "Frio"], c: 1, h: "A gasolina dá força ao motor." },
                    { id: 7107, bloom: 1, q: "O que acontece com o sorvete fora da geladeira?", opts: ["Congela", "Derrete (vira líquido)", "Sobe", "Fica duro"], c: 1, h: "O calor derrete." },
                    { id: 7108, bloom: 1, q: "O som é um tipo de:", opts: ["Matéria", "Energia (vibração)", "Líquido", "Gás"], c: 1, h: "Ouvimos com os ouvidos." },
                    { id: 7109, bloom: 1, q: "A pilha guarda energia:", opts: ["Solar", "Química/Elétrica", "Sonora", "Térmica"], c: 1, h: "Faz os brinquedos funcionarem." },
                    { id: 7110, bloom: 1, q: "Tudo que ocupa lugar no espaço é:", opts: ["Vento", "Matéria", "Pensamento", "Luz"], c: 1, h: "Cadeira, água, ar... tudo é matéria." },

                    // BLOOM 2 (Entender)
                    { id: 7111, bloom: 2, q: "O que é fusão?", opts: ["Gás virando líquido", "Sólido virando líquido (derreter)", "Líquido virando gás", "Água congelando"], c: 1, h: "Como o gelo derretendo." },
                    { id: 7112, bloom: 2, q: "O que é solidificação?", opts: ["Água virando gelo", "Gelo derretendo", "Água fervendo", "Vapor sumindo"], c: 0, h: "Fica sólido (duro)." },
                    { id: 7113, bloom: 2, q: "O que é vaporização?", opts: ["Água congelando", "Água líquida virando vapor", "Gelo derretendo", "Chuva"], c: 1, h: "Quando a água ferve ou seca." },
                    { id: 7114, bloom: 2, q: "Por que sentimos frio?", opts: ["Porque ganhamos calor", "Porque perdemos calor do corpo", "Porque comemos", "Porque corremos"], c: 1, h: "O calor sai do nosso corpo." },
                    { id: 7115, bloom: 2, q: "A comida nos dá energia para:", opts: ["Brincar e viver", "Dormir apenas", "Ficar parados", "Nada"], c: 0, h: "É o combustível do corpo." },
                    { id: 7116, bloom: 2, q: "Materiais opacos são aqueles que:", opts: ["Deixam a luz passar", "Não deixam a luz passar (fazem sombra)", "São transparentes", "Brilham"], c: 1, h: "Como uma parede de madeira." },
                    { id: 7117, bloom: 2, q: "Materiais transparentes:", opts: ["Escondem tudo", "Deixam ver através deles (luz passa)", "São pretos", "Fazem sombra escura"], c: 1, h: "Como o vidro da janela." },
                    { id: 7118, bloom: 2, q: "O que faz a lâmpada acender?", opts: ["Água", "Energia elétrica", "Vento", "Som"], c: 1, h: "A eletricidade passa pelo fio." },
                    { id: 7119, bloom: 2, q: "O som se espalha através de:", opts: ["Vibrações no ar ou objetos", "Luz", "Cores", "Silêncio"], c: 0, h: "Precisa de um meio para viajar." },
                    { id: 7120, bloom: 2, q: "O ferro é um material:", opts: ["Líquido", "Sólido e resistente", "Gasoso", "Mole"], c: 1, h: "Usado em construções." },

                    // BLOOM 3 (Aplicar)
                    { id: 7121, bloom: 3, q: "Se você colocar água no freezer, ela sofre:", opts: ["Fusão", "Solidificação", "Evaporação", "Ebulição"], c: 1, h: "Vira gelo." },
                    { id: 7122, bloom: 3, q: "A roupa no varal seca porque a água:", opts: ["Cai no chão", "Evapora com o calor e vento", "Congela", "Entra no tecido"], c: 1, h: "Vira vapor e vai para o ar." },
                    { id: 7123, bloom: 3, q: "Para derreter chocolate, precisamos de:", opts: ["Frio", "Calor", "Vento", "Escuro"], c: 1, h: "O calor amolece o sólido." },
                    { id: 7124, bloom: 3, q: "Qual material é bom para fazer uma janela?", opts: ["Madeira", "Vidro (transparente)", "Ferro", "Papelão"], c: 1, h: "Precisamos ver lá fora." },
                    { id: 7125, bloom: 3, q: "O cabo da panela geralmente é de plástico ou madeira para:", opts: ["Não queimar a mão (isolante térmico)", "Ficar bonito", "Esquentar mais", "Derreter"], c: 0, h: "Eles não deixam o calor passar fácil." },
                    { id: 7126, bloom: 3, q: "Se você gritar na caverna e ouvir de novo, é o:", opts: ["Silêncio", "Eco (reflexão do som)", "Vento", "Fantasma"], c: 1, h: "O som bate e volta." },
                    { id: 7127, bloom: 3, q: "Quando ligamos o ventilador, a energia elétrica vira:", opts: ["Energia sonora", "Energia de movimento (cinética) e vento", "Luz", "Calor apenas"], c: 1, h: "As pás giram." },
                    { id: 7128, bloom: 3, q: "Um espelho funciona por:", opts: ["Refração", "Reflexão da luz", "Absorção", "Fusão"], c: 1, h: "A luz bate e volta para nossos olhos." },
                    { id: 7129, bloom: 3, q: "Misturar água e areia. A areia:", opts: ["Dissolve", "Não dissolve (mistura heterogênea)", "Vira água", "Sobe"], c: 1, h: "Fica separada no fundo." },
                    { id: 7130, bloom: 3, q: "Misturar água e açúcar bem mexido. O açúcar:", opts: ["Dissolve (mistura homogênea)", "Fica inteiro", "Vira pedra", "Explode"], c: 0, h: "A água fica doce e transparente." },

                    // BLOOM 4 (Analisar)
                    { id: 7131, bloom: 4, q: "Por que usamos roupas de lã no frio?", opts: ["Porque são bonitas", "Porque a lã segura o calor do corpo (isolante)", "Porque são geladas", "Para suar"], c: 1, h: "Ela não deixa o calor sair." },
                    { id: 7132, bloom: 4, q: "Qual a diferença entre calor e temperatura?", opts: ["Nenhuma", "Calor é energia em movimento; Temperatura é a medida (graus)", "Calor é frio", "Temperatura é sol"], c: 1, h: "O termômetro mede a temperatura." },
                    { id: 7133, bloom: 4, q: "A queima de papel é uma transformação:", opts: ["Reversível (volta a ser papel)", "Irreversível (vira cinza e não volta)", "De estado", "Líquida"], c: 1, h: "Não dá para 'desqueimar'." },
                    { id: 7134, bloom: 4, q: "O derretimento do gelo é uma transformação:", opts: ["Reversível (pode congelar de novo)", "Irreversível", "Química", "Permanente"], c: 0, h: "Água vira gelo e gelo vira água." },
                    { id: 7135, bloom: 4, q: "Por que vemos o relâmpago antes de ouvir o trovão?", opts: ["O ouvido é lento", "A luz é muito mais rápida que o som", "O trovão acontece depois", "É ilusão"], c: 1, h: "A velocidade da luz é imensa." },
                    { id: 7136, bloom: 4, q: "Qual lâmpada é mais eficiente (gasta menos e ilumina mais)?", opts: ["Incandescente (quente)", "LED", "Vela", "Fogueira"], c: 1, h: "Tecnologia moderna que não esquenta tanto." },
                    { id: 7137, bloom: 4, q: "O som não se propaga no espaço (vácuo). Por quê?", opts: ["Porque é longe", "Não tem ar nem matéria para vibrar", "Os astronautas usam capacete", "É proibido"], c: 1, h: "O som precisa de meio material." },
                    { id: 7138, bloom: 4, q: "O arco-íris aparece quando:", opts: ["Alguém pinta o céu", "A luz do sol passa pelas gotas de chuva e se separa em cores", "É noite", "Tem nuvem"], c: 1, h: "A luz branca tem todas as cores." },
                    { id: 7139, bloom: 4, q: "Metais são bons condutores. Isso significa que:", opts: ["Eles esquentam e passam eletricidade fácil", "Eles são frios", "Eles quebram", "Eles são isolantes"], c: 0, h: "Por isso fios são de cobre e panelas de metal." },
                    { id: 7140, bloom: 4, q: "Por que o pneu do carro é de borracha?", opts: ["Para ser macio", "Porque borracha é isolante elétrico e tem atrito", "Porque é preto", "Para derreter"], c: 1, h: "Segurança e aderência." }
                ]
            },
            { 
                id: "luz", 
                name: "A luz", 
                prep: { 
                    title: "Ver o Mundo", 
                    content: "<p>A luz nos permite enxergar! <br>💡 <strong>Fontes:</strong> Naturais (Sol) e Artificiais (Lâmpada).<br>🌑 <strong>Sombra:</strong> Quando a luz é bloqueada.</p>", 
                    skin: "💡" 
                }, 
                pool: [
                    // BLOOM 1 (Lembrar)
                    { id: 7201, bloom: 1, q: "Qual a maior fonte de luz natural da Terra?", opts: ["A Lua", "O Sol", "A Lâmpada", "O Fogo"], c: 1, h: "Ilumina o dia todo." },
                    { id: 7202, bloom: 1, q: "A lâmpada é uma fonte de luz:", opts: ["Natural", "Artificial", "Fria", "Eterna"], c: 1, h: "Criada pelo homem." },
                    { id: 7203, bloom: 1, q: "O que é sombra?", opts: ["Um fantasma", "A ausência de luz quando algo bloqueia os raios", "Uma mancha", "Escuro total"], c: 1, h: "Fica atrás do objeto iluminado." },
                    { id: 7204, bloom: 1, q: "Para ver as coisas precisamos de:", opts: ["Som", "Luz e olhos saudáveis", "Vento", "Calor"], c: 1, h: "No escuro total não vemos nada." },
                    { id: 7205, bloom: 1, q: "O vidro é um material:", opts: ["Opaco", "Transparente", "Escuro", "Mole"], c: 1, h: "A luz passa direto." },
                    { id: 7206, bloom: 1, q: "A madeira é um material:", opts: ["Transparente", "Opaco (não deixa luz passar)", "Brilhante", "Líquido"], c: 1, h: "Faz sombra se iluminada." },
                    { id: 7207, bloom: 1, q: "A Lua tem luz própria?", opts: ["Sim, brilha muito", "Não, ela reflete a luz do Sol", "Sim, é uma estrela", "Às vezes"], c: 1, h: "Ela funciona como um espelho do sol." },
                    { id: 7208, bloom: 1, q: "O vagalume é uma fonte de luz:", opts: ["Artificial", "Natural (bioluminescência)", "Elétrica", "Falsa"], c: 1, h: "É um bicho que brilha." },
                    { id: 7209, bloom: 1, q: "O que usamos para nos ver?", opts: ["Parede", "Espelho", "Papel", "Chão"], c: 1, h: "Reflete nossa imagem." },
                    { id: 7210, bloom: 1, q: "A luz viaja em:", opts: ["Curvas", "Linha reta", "Círculos", "Zigue-zague"], c: 1, h: "Não faz curva sozinha." },

                    // BLOOM 2 (Entender)
                    { id: 7211, bloom: 2, q: "Como se forma a sombra?", opts: ["A luz atravessa o objeto", "Um objeto opaco bloqueia a passagem da luz", "A luz apaga", "O objeto brilha"], c: 1, h: "A luz não consegue passar." },
                    { id: 7212, bloom: 2, q: "Por que vemos nossa imagem na água parada?", opts: ["A água funciona como um espelho (reflete)", "A água tem foto", "Tem alguém lá dentro", "É mágica"], c: 0, h: "Superfície lisa reflete a luz." },
                    { id: 7213, bloom: 2, q: "O que são corpos luminosos?", opts: ["Corpos que recebem luz", "Corpos que emitem luz própria (Sol, vela)", "Espelhos", "Pedras"], c: 1, h: "Eles produzem a luz." },
                    { id: 7214, bloom: 2, q: "O que são corpos iluminados?", opts: ["Lâmpadas", "Corpos que apenas refletem luz (mesa, lua, nós)", "O Sol", "Fogo"], c: 1, h: "Precisam de luz para serem vistos." },
                    { id: 7215, bloom: 2, q: "Por que usamos óculos escuros?", opts: ["Para ficar bonito", "Para proteger os olhos do excesso de luz solar", "Para ver no escuro", "Para dormir"], c: 1, h: "Filtram a luz forte." },
                    { id: 7216, bloom: 2, q: "Um material translúcido (como vidro jateado):", opts: ["Deixa passar toda luz", "Deixa passar um pouco de luz, mas a imagem fica embaçada", "Não passa nada", "É preto"], c: 1, h: "Vemos vultos através dele." },
                    { id: 7217, bloom: 2, q: "A luz branca do Sol é feita de:", opts: ["Apenas branco", "Todas as cores do arco-íris misturadas", "Preto e branco", "Azul"], c: 1, h: "O prisma separa essas cores." },
                    { id: 7218, bloom: 2, q: "O que acontece se apagarmos a luz no quarto fechado?", opts: ["Vemos melhor", "Fica tudo escuro e não enxergamos", "Os olhos brilham", "Vemos cores"], c: 1, h: "Visão precisa de luz." },
                    { id: 7219, bloom: 2, q: "O espelho retrovisor do carro serve para:", opts: ["Ver quem está atrás refletido", "Ver a frente", "Se pentear", "Nada"], c: 0, h: "Reflete a imagem da estrada." },
                    { id: 7220, bloom: 2, q: "Durante o dia, a principal luz vem do:", opts: ["Poste", "Sol", "Celular", "Carro"], c: 1, h: "Iluminação natural." },

                    // BLOOM 3 (Aplicar)
                    { id: 7221, bloom: 3, q: "Se você colocar a mão na frente da lanterna, o que aparece na parede?", opts: ["A mão colorida", "A sombra da mão", "Nada", "Luz forte"], c: 1, h: "Você bloqueou a luz." },
                    { id: 7222, bloom: 3, q: "Para ler um livro à noite, você precisa de:", opts: ["Barulho", "Uma fonte de luz artificial (abajur)", "Óculos de sol", "Estar no escuro"], c: 1, h: "Precisa iluminar a página." },
                    { id: 7223, bloom: 3, q: "Se você usar uma camisa preta no sol:", opts: ["Sente mais calor (absorve luz)", "Sente frio", "Brilha", "Fica invisível"], c: 0, h: "Preto absorve a energia da luz." },
                    { id: 7224, bloom: 3, q: "Se usar uma camisa branca no sol:", opts: ["Absorve tudo", "Reflete a luz e esquenta menos", "Fica preta", "Derrete"], c: 1, h: "Branco reflete o calor." },
                    { id: 7225, bloom: 3, q: "O arco-íris aparece quando:", opts: ["Está de noite", "Tem sol e chuva (gotas de água) ao mesmo tempo", "Tem vento", "Tem trovão"], c: 1, h: "A gota separa as cores da luz." },
                    { id: 7226, bloom: 3, q: "Brincar de 'teatro de sombras' usa:", opts: ["Som", "Luz e bloqueio da luz com as mãos", "Água", "Espelhos"], c: 1, h: "Cria formas na parede." },
                    { id: 7227, bloom: 3, q: "Um periscópio (tubo com espelhos) serve para:", opts: ["Ver o que está acima ou escondido", "Ver o futuro", "Ouvir longe", "Respirar"], c: 0, h: "Desvia a luz com espelhos." },
                    { id: 7228, bloom: 3, q: "Por que as plantas crescem em direção à janela?", opts: ["Para ver a rua", "Para buscar a luz do sol (fotossíntese)", "Para fugir", "Por acaso"], c: 1, h: "Elas precisam de luz para comer." },
                    { id: 7229, bloom: 3, q: "Se a luz acabar na cidade (blecaute), usamos:", opts: ["Velas ou lanternas", "Televisão", "Ventilador", "Geladeira"], c: 0, h: "Fontes de luz de emergência." },
                    { id: 7230, bloom: 3, q: "Olhar direto para o Sol:", opts: ["É bom", "Faz muito mal aos olhos", "Melhora a visão", "Não acontece nada"], c: 1, h: "A luz é forte demais e queima." },

                    // BLOOM 4 (Analisar)
                    { id: 7231, bloom: 4, q: "Por que a sombra muda de tamanho durante o dia?", opts: ["A pessoa cresce", "A posição do Sol muda no céu", "A sombra tem vida", "O chão mexe"], c: 1, h: "De manhã e tarde a sombra é longa, meio-dia é curta." },
                    { id: 7232, bloom: 4, q: "Diferença entre reflexão e refração:", opts: ["Nenhuma", "Reflexão bate e volta (espelho); Refração atravessa e desvia (lupa)", "Refração é sombra", "Reflexão é vidro"], c: 1, h: "Espelho reflete, água/lupa refrata." },
                    { id: 7233, bloom: 4, q: "Por que vemos um lápis 'quebrado' dentro do copo d'água?", opts: ["Ele quebrou", "Ilusão causada pela refração da luz na água", "O copo é torto", "Mágica"], c: 1, h: "A luz muda de velocidade na água." },
                    { id: 7234, bloom: 4, q: "A Lua cheia ilumina a noite. Ela é:", opts: ["Fonte primária (luz própria)", "Fonte secundária (reflete o sol)", "Uma lâmpada", "Fogo"], c: 1, h: "Sem o sol, a lua seria escura." },
                    { id: 7235, bloom: 4, q: "Por que os espelhos de lojas de roupa são bem iluminados?", opts: ["Para gastar energia", "Para vermos as cores e detalhes da roupa com clareza", "Para esquentar", "Para cegar"], c: 1, h: "A luz revela a cor real." },
                    { id: 7236, bloom: 4, q: "Como funciona uma lupa?", opts: ["Ela apaga a luz", "Ela concentra e desvia a luz para aumentar a imagem", "Ela reflete", "Ela pinta"], c: 1, h: "Usa lente para ampliar." },
                    { id: 7237, bloom: 4, q: "Se a luz viaja em linha reta, como iluminamos uma sala inteira?", opts: ["A luz faz curva", "A luz reflete nas paredes e objetos e se espalha", "Usamos curva", "Não iluminamos"], c: 1, h: "Difusão da luz." },
                    { id: 7238, bloom: 4, q: "Eclipse solar acontece quando:", opts: ["O sol apaga", "A lua passa na frente do sol e faz sombra na Terra", "A Terra some", "Chove"], c: 1, h: "Bloqueio da luz solar." },
                    { id: 7239, bloom: 4, q: "Por que as ambulâncias têm o nome escrito ao contrário na frente?", opts: ["Erro de pintura", "Para ler certo pelo espelho retrovisor do carro da frente", "Para ficar bonito", "É código"], c: 1, h: "O espelho inverte a imagem." },
                    { id: 7240, bloom: 4, q: "A luz azul das telas (celular) à noite:", opts: ["Ajuda a dormir", "Pode atrapalhar o sono enganando o cérebro", "Não faz nada", "É escura"], c: 1, h: "O corpo acha que ainda é dia." }
                ]
            }
        ]
    },
        { id: "geo", name: "Geografia", icon: "🌍", color: "bg-purple-500", accent: "border-purple-600", categories: [
    {
        id: "espacos_urbanos_rurais",
        name: "Espaços urbanos e rurais",
        prep: {
            title: "Cidade e Campo",
            content: "<p>Onde você vive? <br><br><strong>Zona Urbana (Cidade):</strong> Muitos prédios, carros, lojas e barulho.<br><strong>Zona Rural (Campo):</strong> Plantações, animais, estradas de terra e ar puro.</p>",
            skin: "🏙️"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 6001, bloom: 1, q: "Onde encontramos muitos prédios e lojas?", opts: ["Na Zona Rural", "Na Zona Urbana", "Na Floresta", "No Mar"], c: 1, h: "É onde tem muito asfalto e movimento." },
            { id: 6002, bloom: 1, q: "Onde geralmente ficam as fazendas e sítios?", opts: ["Na Cidade", "No Espaço", "Na Zona Rural", "No Shopping"], c: 2, h: "Lá tem criação de animais e plantações." },
            { id: 6003, bloom: 1, q: "Qual som é mais comum na cidade grande?", opts: ["Galo cantando", "Buzina de carros", "Vento nas árvores", "Grilo"], c: 1, h: "O trânsito faz muito barulho." },
            { id: 6004, bloom: 1, q: "Onde o ar costuma ser mais puro e limpo?", opts: ["Na cidade", "Perto de fábricas", "No campo", "No túnel"], c: 2, h: "Tem menos carros soltando fumaça." },
            { id: 6005, bloom: 1, q: "O que é 'Zona Urbana'?", opts: ["A área da cidade", "A área da floresta", "A área do campo", "A área do deserto"], c: 0, h: "Urbano vem de Urbe (cidade)." },
            { id: 6006, bloom: 1, q: "O que é 'Zona Rural'?", opts: ["O centro da cidade", "O campo", "A praia", "O shopping"], c: 1, h: "Lugar de plantar e colher." },
            { id: 6007, bloom: 1, q: "Qual animal é fácil de ver solto no campo?", opts: ["Leão", "Vaca", "Pinguim", "Tubarão"], c: 1, h: "Ela nos dá leite." },
            { id: 6008, bloom: 1, q: "O que cobre o chão da maioria das ruas na cidade?", opts: ["Terra", "Grama", "Asfalto", "Areia"], c: 2, h: "É preto e duro para os carros passarem." },
            { id: 6009, bloom: 1, q: "Onde ficam as grandes fábricas geralmente?", opts: ["No meio da floresta", "Nas zonas industriais urbanas", "Dentro de casas", "Na praia"], c: 1, h: "Precisam de energia e estradas." },
            { id: 6010, bloom: 1, q: "Onde vemos mais estrelas no céu à noite?", opts: ["Na cidade iluminada", "No campo escuro", "Dentro de casa", "No cinema"], c: 1, h: "As luzes da cidade atrapalham ver o céu." },

            // BLOOM 2 (Entender)
            { id: 6011, bloom: 2, q: "Por que as casas no campo são mais distantes uma da outra?", opts: ["Porque eles não gostam de vizinhos", "Porque precisam de espaço para plantar", "Porque é proibido", "Porque não tem tijolo"], c: 1, h: "As plantações ocupam muito espaço." },
            { id: 6012, bloom: 2, q: "Por que na cidade tem semáforos?", opts: ["Para enfeitar a rua", "Para organizar o trânsito intenso", "Para iluminar a noite", "Para os pássaros"], c: 1, h: "Muitos carros precisam de regras para não bater." },
            { id: 6013, bloom: 2, q: "O que acontece se asfaltarmos todo o campo?", opts: ["Fica mais bonito", "Não teremos onde plantar comida", "Os carros correm mais", "Nada muda"], c: 1, h: "Precisamos de terra para plantar." },
            { id: 6014, bloom: 2, q: "A vida no campo costuma ser:", opts: ["Mais agitada que na cidade", "Mais calma e ligada à natureza", "Barulhenta igual", "Sem trabalho"], c: 1, h: "O ritmo segue o sol e as plantas." },
            { id: 6015, bloom: 2, q: "Na cidade, muitas pessoas moram em apartamentos porque:", opts: ["É mais chique", "Falta espaço no chão, então constroem para cima", "Não gostam de casas", "É mais barato"], c: 1, h: "Prédios altos cabem mais gente." },
            { id: 6016, bloom: 2, q: "Por que o ar da cidade pode ser poluído?", opts: ["Por causa das flores", "Pela fumaça de carros e fábricas", "Pela chuva", "Pelo sol"], c: 1, h: "A queima de combustível suja o ar." },
            { id: 6017, bloom: 2, q: "O que é 'paisagem modificada'?", opts: ["Uma paisagem natural", "Um lugar que o homem construiu ou alterou", "Um desenho", "Uma foto"], c: 1, h: "Prédios, pontes e ruas são modificações." },
            { id: 6018, bloom: 2, q: "O campo depende da cidade para quê?", opts: ["Para comprar comida", "Para comprar máquinas, roupas e remédios", "Para plantar", "Para respirar"], c: 1, h: "A tecnologia vem da indústria urbana." },
            { id: 6019, bloom: 2, q: "Por que existem parques na cidade?", opts: ["Para estacionar carros", "Para ter um pouco de área verde e lazer", "Para construir prédios", "Para nada"], c: 1, h: "Para as pessoas respirarem e brincarem." },
            { id: 6020, bloom: 2, q: "Onde o trabalho depende mais do clima (chuva/sol)?", opts: ["No escritório", "Na fábrica", "No campo (agricultura)", "No shopping"], c: 2, h: "Se não chover, a planta não cresce." },

            // BLOOM 3 (Aplicar)
            { id: 6021, bloom: 3, q: "Se você quer criar galinhas soltas, onde é melhor morar?", opts: ["Em um apartamento", "No centro da cidade", "Em um sítio", "Em um barco"], c: 2, h: "Animais precisam de espaço e terra." },
            { id: 6022, bloom: 3, q: "Para construir um shopping gigante, é mais provável escolher:", opts: ["Uma grande cidade", "O topo de uma montanha", "Uma ilha deserta", "O meio da floresta"], c: 0, h: "Shoppings precisam de muita gente para comprar." },
            { id: 6023, bloom: 3, q: "Se você vê uma estrada de terra e muita plantação, você está:", opts: ["No centro de São Paulo", "Na Zona Rural", "Na praia", "No aeroporto"], c: 1, h: "Características típicas do campo." },
            { id: 6024, bloom: 3, q: "Um trator é uma máquina usada principalmente:", opts: ["Para passear na cidade", "Para arar a terra no campo", "Para corrida", "Para ir à escola"], c: 1, h: "É ferramenta de trabalho rural." },
            { id: 6025, bloom: 3, q: "Se o ar está cinza e difícil de respirar, provavelmente é:", opts: ["Poluição urbana", "Neblina do campo", "Cheiro de chuva", "Vento do mar"], c: 0, h: "Fumaça deixa o ar cinza." },
            { id: 6026, bloom: 3, q: "Para ir ao cinema e ao hospital grande, as pessoas do campo vão:", opts: ["Para a floresta", "Para a cidade", "Para o rio", "Para o celeiro"], c: 1, h: "Serviços grandes ficam nas cidades." },
            { id: 6027, bloom: 3, q: "Se você planta uma horta no seu apartamento, você trouxe:", opts: ["A cidade para o campo", "Um pouco do campo para a cidade", "O mar para casa", "Nada"], c: 1, h: "Agricultura é coisa de campo, mas adaptada." },
            { id: 6028, bloom: 3, q: "Onde é mais fácil ver um engarrafamento (trânsito parado)?", opts: ["Na estrada de terra", "Na avenida da cidade", "No rio", "No pasto"], c: 1, h: "Muitos carros juntos." },
            { id: 6029, bloom: 3, q: "Quem trabalha com computador geralmente fica:", opts: ["No campo", "Na cidade (escritórios)", "No mar", "Na mina"], c: 1, h: "A maioria das empresas está na zona urbana." },
            { id: 6030, bloom: 3, q: "Acordar com o sol e dormir cedo é um hábito mais comum:", opts: ["Na balada", "Na cidade", "No campo", "No shopping"], c: 2, h: "A vida rural segue a luz do dia." },

            // BLOOM 4 (Analisar)
            { id: 6031, bloom: 4, q: "Qual a diferença entre a paisagem natural e a humanizada?", opts: ["Nenhuma", "Natural não tem dedo do homem; Humanizada tem construções", "Natural é feia", "Humanizada tem árvores"], c: 1, h: "Prédios e pontes são obras humanas." },
            { id: 6032, bloom: 4, q: "O campo pode viver sem a cidade?", opts: ["Sim, facilmente", "Não, precisa de roupas, máquinas e serviços da cidade", "Sim, eles têm tudo", "Não sei"], c: 1, h: "Eles precisam de coisas que a indústria faz." },
            { id: 6033, bloom: 4, q: "A cidade pode viver sem o campo?", opts: ["Sim, compra tudo no mercado", "Não, a comida vem do campo", "Sim, comem plástico", "Talvez"], c: 1, h: "O mercado só vende o que o campo produz." },
            { id: 6034, bloom: 4, q: "Compare: O lixo na cidade e no campo.", opts: ["É igual", "Na cidade acumula mais rápido e precisa de coleta constante", "No campo tem mais lixo", "Ninguém faz lixo"], c: 1, h: "Muita gente junta gera muito lixo." },
            { id: 6035, bloom: 4, q: "Por que as cidades estão ficando cada vez maiores?", opts: ["Porque as pessoas saem do campo buscando emprego", "Porque chove muito", "Porque as árvores crescem", "Porque sim"], c: 0, h: "Isso se chama êxodo rural." },
            { id: 6036, bloom: 4, q: "Qual o problema de ter muito asfalto e pouca terra na cidade?", opts: ["Fica feio", "A água da chuva não entra na terra e causa enchentes", "Os carros estragam", "Não tem problema"], c: 1, h: "A terra chupa a água, o asfalto não." },
            { id: 6037, bloom: 4, q: "O campo está mudando com a tecnologia. Como?", opts: ["Tem menos plantas", "Usam drones e máquinas modernas para plantar", "Virou cidade", "Não mudou nada"], c: 1, h: "A tecnologia chegou na roça." },
            { id: 6038, bloom: 4, q: "O que é 'poluição sonora'?", opts: ["Sujeira no chão", "Barulho excessivo que faz mal à saúde", "Música boa", "Gente falando baixo"], c: 1, h: "Comum nas grandes cidades." },
            { id: 6039, bloom: 4, q: "Se uma indústria joga esgoto no rio que vai pro campo:", opts: ["Não acontece nada", "Pode contaminar a plantação e os animais", "A água fica limpa", "Os peixes gostam"], c: 1, h: "A água conecta os dois lugares." },
            { id: 6040, bloom: 4, q: "Viver no campo ou na cidade. Qual é melhor?", opts: ["Cidade", "Campo", "Os dois têm vantagens e desvantagens", "Nenhum"], c: 2, h: "Um tem sossego, o outro tem serviços." }
        ]
    },
    {
        id: "circulacao",
        name: "Circulação entre espaços",
        prep: {
            title: "O Vai e Vem",
            content: "<p>A cidade e o campo são amigos! Um precisa do outro.<br>🚚 <strong>Campo manda:</strong> Comida e matéria-prima.<br>🚗 <strong>Cidade manda:</strong> Roupas, máquinas e tecnologia.</p>",
            skin: "🚚"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 6101, bloom: 1, q: "O que leva os produtos do campo para a cidade?", opts: ["Mágica", "Caminhões e trens", "Vento", "Pássaros"], c: 1, h: "Eles viajam pelas estradas." },
            { id: 6102, bloom: 1, q: "De onde vem o leite que compramos na caixinha?", opts: ["Da fábrica de plástico", "Da vaca no campo", "Do mar", "Da farmácia"], c: 1, h: "A caixinha é feita na cidade, o leite vem da roça." },
            { id: 6103, bloom: 1, q: "O que é 'matéria-prima'?", opts: ["Uma prima legal", "O material natural usado para fabricar coisas", "Lixo", "Comida pronta"], c: 1, h: "Ex: Algodão para fazer roupa." },
            { id: 6104, bloom: 1, q: "Para onde vai o lixo da cidade muitas vezes?", opts: ["Para o espaço", "Para aterros sanitários (longe do centro)", "Para o mar", "Fica na rua"], c: 1, h: "Precisam de áreas grandes e afastadas." },
            { id: 6105, bloom: 1, q: "O algodão plantado no campo vira o quê na cidade?", opts: ["Comida", "Roupa (tecido)", "Ferro", "Vidro"], c: 1, h: "As fábricas tecem o fio." },
            { id: 6106, bloom: 1, q: "O que a cidade fornece para o campo?", opts: ["Terra", "Arvores", "Tratores, vacinas e roupas", "Rios"], c: 2, h: "Produtos industrializados." },
            { id: 6107, bloom: 1, q: "Como as pessoas do campo falam com quem está na cidade?", opts: ["Gritando", "Telefone e Internet", "Sinais de fumaça", "Não falam"], c: 1, h: "A tecnologia conecta os dois." },
            { id: 6108, bloom: 1, q: "O que é 'êxodo rural'?", opts: ["Uma festa", "Quando pessoas saem do campo para morar na cidade", "Um tipo de planta", "Um remédio"], c: 1, h: "É a mudança de casa." },
            { id: 6109, bloom: 1, q: "As estradas servem para:", opts: ["Enfeitar o mapa", "Conectar a cidade e o campo", "Os animais dormirem", "Nada"], c: 1, h: "Por elas passam pessoas e produtos." },
            { id: 6110, bloom: 1, q: "Onde o café é empacotado?", opts: ["No pé de café", "Na indústria (cidade)", "No rio", "Na nuvem"], c: 1, h: "Ele é colhido no campo e processado na fábrica." },

            // BLOOM 2 (Entender)
            { id: 6111, bloom: 2, q: "Por que dizemos que cidade e campo são interdependentes?", opts: ["Porque são inimigos", "Porque um depende da ajuda do outro", "Porque são iguais", "Porque ficam longe"], c: 1, h: "Ninguém vive sozinho." },
            { id: 6112, bloom: 2, q: "Se os caminhoneiros pararem, o que acontece?", opts: ["Fica tudo bem", "A cidade pode ficar sem comida", "Chove", "O campo muda de lugar"], c: 1, h: "Eles transportam tudo." },
            { id: 6113, bloom: 2, q: "A madeira sai da floresta (campo) e vira o que na cidade?", opts: ["Água", "Móveis e papel", "Ferro", "Plástico"], c: 1, h: "As fábricas transformam a madeira." },
            { id: 6114, bloom: 2, q: "O turismo rural acontece quando:", opts: ["Pessoas do campo vão à cidade", "Pessoas da cidade vão passear no campo", "Ninguém viaja", "Animais viajam"], c: 1, h: "Para descansar e ver a natureza." },
            { id: 6115, bloom: 2, q: "Como a internet ajuda o agricultor?", opts: ["Não ajuda", "Ele vê a previsão do tempo e vende produtos", "Para jogar apenas", "Para ver filmes"], c: 1, h: "Informação é importante para plantar." },
            { id: 6116, bloom: 2, q: "O suco de caixinha vem da fruta. Qual o caminho?", opts: ["Fábrica -> Campo", "Campo -> Fábrica -> Mercado", "Mercado -> Campo", "Fábrica -> Rio"], c: 1, h: "Nasce, processa, vende." },
            { id: 6117, bloom: 2, q: "Por que as indústrias de alimentos ficam perto das cidades?", opts: ["Para vender mais fácil para as pessoas", "Porque gostam de barulho", "Por causa dos prédios", "Não sei"], c: 1, h: "Onde estão os consumidores." },
            { id: 6118, bloom: 2, q: "Se chover muito e estragar a estrada de terra:", opts: ["O produto do campo não chega na cidade", "Fica tudo bem", "A cidade planta", "O caminhão voa"], c: 0, h: "O transporte é interrompido." },
            { id: 6119, bloom: 2, q: "O couro do boi (campo) vira sapato (cidade). Isso é:", opts: ["Mágica", "Transformação da matéria-prima", "Desperdício", "Sujeira"], c: 1, h: "A indústria transforma." },
            { id: 6120, bloom: 2, q: "Pessoas que moram no campo e trabalham na cidade fazem o movimento:", opts: ["De dormir", "Pendular (vai e volta)", "De pular", "De correr"], c: 1, h: "Viajam todo dia." },

            // BLOOM 3 (Aplicar)
            { id: 6121, bloom: 3, q: "Você está comendo batata frita. A batata veio de onde?", opts: ["Da fábrica de plástico", "Da plantação no campo", "Do mar", "Da impressora"], c: 1, h: "Batata é um vegetal." },
            { id: 6122, bloom: 3, q: "Seu celular foi feito na indústria, mas usa minérios. De onde vieram?", opts: ["Da mineração no campo", "Do céu", "Da árvore", "Da água"], c: 0, h: "Metais vêm da terra." },
            { id: 6123, bloom: 3, q: "Se acabar a gasolina na cidade, o trator no campo:", opts: ["Funciona normal", "Para, pois precisa de combustível", "Usa água", "Usa vento"], c: 1, h: "O combustível é refinado na cidade." },
            { id: 6124, bloom: 3, q: "Um agricultor usa um drone para ver a plantação. O drone é:", opts: ["Tecnologia da cidade no campo", "Um pássaro", "Uma fruta", "Nuvem"], c: 0, h: "Tecnologia aplicada." },
            { id: 6125, bloom: 3, q: "A camiseta de algodão conecta:", opts: ["Apenas cidades", "O agricultor e a fábrica de tecidos", "Ninguém", "O peixe e o rio"], c: 1, h: "Campo planta, cidade costura." },
            { id: 6126, bloom: 3, q: "Se o preço do tomate sobe na feira, pode ser porque:", opts: ["Choveu granizo na plantação (campo)", "O mercado quis", "O tomate fugiu", "Ninguém gosta de tomate"], c: 0, h: "Problemas no campo afetam o preço na cidade." },
            { id: 6127, bloom: 3, q: "Para fazer um bolo, você usa trigo (campo) e batedeira (indústria). Você usou:", opts: ["Só campo", "Só cidade", "Produtos dos dois espaços", "Nenhum"], c: 2, h: "A mistura perfeita." },
            { id: 6128, bloom: 3, q: "O lixo eletrônico (celular velho) jogado no campo:", opts: ["Vira adubo", "Contamina o solo e a água", "Vira planta", "Some"], c: 1, h: "Poluição da cidade afetando o campo." },
            { id: 6129, bloom: 3, q: "Um hotel fazenda oferece:", opts: ["Prédios altos", "Experiência de vida rural para turistas", "Metrô", "Shopping"], c: 1, h: "Turismo rural." },
            { id: 6130, bloom: 3, q: "A eletricidade da cidade muitas vezes vem de:", opts: ["Lojas", "Usinas hidrelétricas em rios (áreas rurais)", "Carros", "Postes"], c: 1, h: "A energia é gerada longe e vem por fios." },

            // BLOOM 4 (Analisar)
            { id: 6131, bloom: 4, q: "O que acontece se a cidade parar de comprar do campo?", opts: ["O campo fica rico", "O agricultor perde dinheiro e para de plantar", "A cidade melhora", "Nada"], c: 1, h: "O campo precisa vender para sobreviver." },
            { id: 6132, bloom: 4, q: "O que acontece se o campo parar de produzir?", opts: ["A cidade fica sem comida", "A cidade come plástico", "Fica tudo bem", "A cidade planta tudo nos prédios"], c: 0, h: "A cidade não tem espaço para plantar tudo." },
            { id: 6133, bloom: 4, q: "A modernização (máquinas) no campo causou:", opts: ["Mais empregos braçais", "Menos necessidade de gente, gerando êxodo rural", "Mais chuva", "Nada"], c: 1, h: "A máquina faz o trabalho de muitos homens." },
            { id: 6134, bloom: 4, q: "Comparando: Feira livre vs Supermercado.", opts: ["Feira tem produtos mais diretos do campo; Mercado tem mais industrializados", "São iguais", "Mercado é ruim", "Feira não tem comida"], c: 0, h: "A feira conecta mais rápido o produtor." },
            { id: 6135, bloom: 4, q: "Por que é importante ter boas estradas?", opts: ["Para correr", "Para facilitar a circulação de produtos e pessoas", "Para gastar asfalto", "Para os animais"], c: 1, h: "Sem estrada, a conexão quebra." },
            { id: 6136, bloom: 4, q: "O desperdício de comida na cidade afeta o campo?", opts: ["Não", "Sim, desperdiça o trabalho e recursos naturais usados para plantar", "Afeta o mar", "Só afeta o lixo"], c: 1, h: "Jogar comida fora é jogar fora água e terra." },
            { id: 6137, bloom: 4, q: "Produtos orgânicos (sem veneno) são uma tendência. Por quê?", opts: ["Porque são mais feios", "Pessoas da cidade buscam mais saúde vinda do campo", "Porque são azuis", "Porque são de plástico"], c: 1, h: "Valorização da natureza." },
            { id: 6138, bloom: 4, q: "A poluição do ar na cidade pode afetar o campo?", opts: ["Sim, a chuva ácida e o vento levam a poluição", "Não, tem um muro", "A poluição some", "O campo gosta"], c: 0, h: "O ar não tem fronteiras." },
            { id: 6139, bloom: 4, q: "Quem é mais importante: Cidade ou Campo?", opts: ["Cidade", "Campo", "Os dois são igualmente importantes e conectados", "Nenhum"], c: 2, h: "É um ciclo de ajuda mútua." },
            { id: 6140, bloom: 4, q: "Como podemos diminuir a distância entre campo e cidade?", opts: ["Construindo muros", "Valorizando o produtor local e conhecendo a origem do alimento", "Parando de comer", "Fechando estradas"], c: 1, h: "Saber de onde vem a comida conecta as pessoas." }
        ]
    },
    {
        id: "ciclo_agua",
        name: "Ciclo da água",
        prep: {
            title: "A Viagem da Água",
            content: "<p>A água nunca para quieta! Ela viaja do chão para o céu e volta. [Image of water cycle diagram for kids] <br>☀️ Sol esquenta -> Vira vapor (Evaporação).<br>☁️ Nuvens -> Chuva (Precipitação).<br>💧 Terra -> Rios e lençóis (Infiltração).</p>",
            skin: "💧"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 6201, bloom: 1, q: "O que faz a água dos rios virar vapor?", opts: ["O frio", "O calor do Sol", "O vento", "Os peixes"], c: 1, h: "O sol aquece a água." },
            { id: 6202, bloom: 1, q: "Como chamamos quando a água cai das nuvens?", opts: ["Subida", "Precipitação (Chuva)", "Evaporação", "Seca"], c: 1, h: "É a chuva caindo." },
            { id: 6203, bloom: 1, q: "Onde a água da chuva entra?", opts: ["No vidro", "No solo (Infiltração) e rios", "No fogo", "No espaço"], c: 1, h: "A terra bebe a água." },
            { id: 6204, bloom: 1, q: "O que são as nuvens?", opts: ["Algodão doce", "Gotas de água ou cristais de gelo juntos", "Fumaça de carro", "Papel"], c: 1, h: "Vapor que esfriou lá no alto." },
            { id: 6205, bloom: 1, q: "A água pode virar gelo?", opts: ["Sim, se esquentar", "Sim, se esfriar muito", "Não", "Só na lua"], c: 1, h: "No congelador vira gelo." },
            { id: 6206, bloom: 1, q: "A água pode virar gás (vapor)?", opts: ["Sim, se ferver ou evaporar", "Não, nunca", "Só se for mágica", "Só de noite"], c: 0, h: "Na panela quente ela some." },
            { id: 6207, bloom: 1, q: "O ciclo da água tem fim?", opts: ["Sim, acaba amanhã", "Não, é um ciclo contínuo", "Acaba quando chove", "Acaba no mar"], c: 1, h: "Acontece sem parar, repetidamente." },
            { id: 6208, bloom: 1, q: "O que acontece com a poça d'água no sol?", opts: ["Ela cresce", "Ela evapora (seca)", "Ela congela", "Ela vira pedra"], c: 1, h: "A água sobe como vapor." },
            { id: 6209, bloom: 1, q: "De onde vem a água da chuva?", opts: ["Do espaço", "Das nuvens", "Do telhado", "Das árvores"], c: 1, h: "As nuvens ficam pesadas e soltam água." },
            { id: 6210, bloom: 1, q: "A água subterrânea fica:", opts: ["No céu", "Embaixo da terra", "Nas folhas", "No mar"], c: 1, h: "Fica nos lençóis freáticos." },

            // BLOOM 2 (Entender)
            { id: 6211, bloom: 2, q: "O que é evaporação?", opts: ["Água virando gelo", "Água líquida virando vapor", "Gelo derretendo", "Chuva caindo"], c: 1, h: "É quando a água sobe invisível." },
            { id: 6212, bloom: 2, q: "O que é condensação?", opts: ["Vapor virando gotinhas (nuvem)", "Água virando vapor", "Água congelando", "Chuva"], c: 0, h: "O vapor esfria e vira líquido de novo." },
            { id: 6213, bloom: 2, q: "Por que chove?", opts: ["Porque as nuvens ficam cheias e pesadas", "Porque o céu está triste", "Porque o sol dormiu", "Porque o vento empurra"], c: 0, h: "A gravidade puxa as gotas." },
            { id: 6214, bloom: 2, q: "As plantas participam do ciclo da água?", opts: ["Não", "Sim, elas liberam vapor (transpiração)", "Só as árvores de Natal", "Elas bebem mas não devolvem"], c: 1, h: "As plantas suam pelas folhas." },
            { id: 6215, bloom: 2, q: "O ciclo da água limpa a água?", opts: ["Sim, ao evaporar a sujeira fica", "Não, a sujeira sobe junto", "Deixa a água suja", "Não faz nada"], c: 0, h: "A evaporação é um filtro natural." },
            { id: 6216, bloom: 2, q: "Se não tiver sol, o ciclo para?", opts: ["Acelera", "Fica mais lento, pois precisa de calor", "Para totalmente", "Não muda nada"], c: 1, h: "O sol é o motor do ciclo." },
            { id: 6217, bloom: 2, q: "A água que bebemos hoje é:", opts: ["Nova, veio do espaço", "A mesma água que existe há bilhões de anos", "Fabricada na loja", "Mágica"], c: 1, h: "A água se recicla na Terra." },
            { id: 6218, bloom: 2, q: "O que é lençol freático?", opts: ["Um lençol de cama molhado", "Reserva de água embaixo do solo", "Uma nuvem baixa", "Um rio voador"], c: 1, h: "Água escondida na terra." },
            { id: 6219, bloom: 2, q: "Por que vemos nossa 'fumacinha' no frio?", opts: ["Estamos pegando fogo", "O vapor da nossa boca condensa no ar frio", "É mágica", "É fumaça de poluição"], c: 1, h: "Igual a fazer nuvem." },
            { id: 6220, bloom: 2, q: "O granizo (chuva de gelo) acontece quando:", opts: ["Está muito calor", "As gotas congelam lá no alto da nuvem", "Alguém joga gelo do avião", "A nuvem é de pedra"], c: 1, h: "Frio intenso na atmosfera." },

            // BLOOM 3 (Aplicar)
            { id: 6221, bloom: 3, q: "Se você deixar um copo d'água no sol por dias, o que acontece?", opts: ["A água some (evapora)", "A água congela", "A água muda de cor", "O copo quebra"], c: 0, h: "O calor transforma em vapor." },
            { id: 6222, bloom: 3, q: "Quando você toma banho quente e o espelho embaça, isso é:", opts: ["Evaporação e Condensação", "Chuva", "Infiltração", "Solidificação"], c: 0, h: "O vapor encosta no vidro frio e vira água." },
            { id: 6223, bloom: 3, q: "Secar roupa no varal depende da:", opts: ["Chuva", "Evaporação da água da roupa", "Lua", "Terra"], c: 1, h: "A água sai da roupa para o ar." },
            { id: 6224, bloom: 3, q: "Se taparmos o solo com cimento, a água da chuva:", opts: ["Infiltra melhor", "Não infiltra e causa enchentes", "Desaparece", "Vira gelo"], c: 1, h: "O cimento bloqueia a entrada na terra." },
            { id: 6225, bloom: 3, q: "A tampa da panela molhada quando a comida cozinha é exemplo de:", opts: ["Condensação", "Chuva", "Seca", "Gelo"], c: 0, h: "O vapor bate na tampa e vira gota." },
            { id: 6226, bloom: 3, q: "Em dias úmidos (muito vapor no ar), a roupa no varal:", opts: ["Seca rápido", "Demora mais para secar", "Pega fogo", "Congela"], c: 1, h: "O ar já está cheio de água." },
            { id: 6227, bloom: 3, q: "Para formar gelo, preciso colocar a água:", opts: ["No sol", "No freezer (tirar calor)", "No armário", "No fogo"], c: 1, h: "Precisa esfriar muito." },
            { id: 6228, bloom: 3, q: "O orvalho na grama de manhã é:", opts: ["Chuva que caiu", "Vapor do ar que condensou no frio da noite", "Alguém regou", "Suor da grama"], c: 1, h: "O ar frio faz o vapor virar gotinhas." },
            { id: 6229, bloom: 3, q: "Árvores ajudam a chover porque:", opts: ["Elas pedem chuva", "Elas soltam muito vapor no ar", "Elas seguram as nuvens", "Elas choram"], c: 1, h: "A floresta transpira e forma nuvens." },
            { id: 6230, bloom: 3, q: "Se eu ferver a água, ela passa do estado:", opts: ["Sólido para Líquido", "Líquido para Gasoso", "Gasoso para Sólido", "Líquido para Sólido"], c: 1, h: "Vira fumaça (vapor)." },

            // BLOOM 4 (Analisar)
            { id: 6231, bloom: 4, q: "Se cortarmos todas as árvores, o que acontece com o ciclo da água?", opts: ["Melhora", "Chove menos e o clima muda", "Fica igual", "Chove mais"], c: 1, h: "Menos árvores, menos vapor, menos chuva." },
            { id: 6232, bloom: 4, q: "Por que em cidades grandes tem mais enchentes que na floresta?", opts: ["Porque chove mais", "Porque o asfalto não deixa a água entrar na terra", "Porque tem bueiro", "Porque Deus quer"], c: 1, h: "Impermeabilização do solo." },
            { id: 6233, bloom: 4, q: "A água do mar é salgada, mas a chuva é doce. Por quê?", opts: ["O sal não evapora, só a água", "O sal cai antes", "A nuvem tem açúcar", "O mar não evapora"], c: 0, h: "O sal é pesado e fica no mar." },
            { id: 6234, bloom: 4, q: "O ciclo da água é importante porque:", opts: ["É bonito", "Distribui a água pelo planeta e permite a vida", "Molha os carros", "Faz barulho"], c: 1, h: "Sem ele, a água não chegaria a todos os lugares." },
            { id: 6235, bloom: 4, q: "Se o planeta esquentar muito (aquecimento global):", opts: ["O ciclo acelera e causa tempestades mais fortes", "O ciclo para", "A água congela", "Nada acontece"], c: 0, h: "Mais calor = mais evaporação = mais energia." },
            { id: 6236, bloom: 4, q: "Um cacto no deserto e uma planta na floresta. Quem transpira mais?", opts: ["O cacto", "A planta da floresta", "Igual", "Nenhuma"], c: 1, h: "Na floresta tem mais água disponível." },
            { id: 6237, bloom: 4, q: "Por que a roupa seca mais rápido com vento?", opts: ["O vento empurra as partículas de água para longe", "O vento esquenta", "O vento quebra a água", "Mágica"], c: 0, h: "O vento renova o ar ao redor." },
            { id: 6238, bloom: 4, q: "Qual a relação entre rios voadores e a Amazônia?", opts: ["Nenhuma", "A umidade da Amazônia viaja pelo céu e faz chover no Sul", "Rios voam de verdade", "É lenda"], c: 1, h: "Massas de vapor gigantes." },
            { id: 6239, bloom: 4, q: "Se poluirmos o rio, a água evapora suja?", opts: ["Sim, leva o lixo", "Não, evapora limpa, mas a poluição fica e mata os peixes", "Vira ácido", "O rio seca"], c: 1, h: "A sujeira fica concentrada." },
            { id: 6240, bloom: 4, q: "O ciclo da água renova a quantidade de água no mundo?", opts: ["Sim, cria água nova", "Não, a quantidade é a mesma, só muda de lugar e estado", "Diminui a água", "Aumenta a água"], c: 1, h: "Nada se cria, tudo se transforma." }
        ]
    },
    {
        id: "abastecimento_agua",
        name: "Abastecimento de água",
        prep: {
            title: "Da Fonte à Torneira",
            content: "<p>Como a água chega limpa na sua casa? <br>1. <strong>Captação:</strong> Tira do rio/represa.<br>2. <strong>ETA:</strong> Estação de Tratamento (Limpeza).<br>3. <strong>Distribuição:</strong> Canos até a caixa d'água.</p>",
            skin: "🚰"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 6301, bloom: 1, q: "O que significa ETA?", opts: ["Estação de Trem Azul", "Estação de Tratamento de Água", "Escola Técnica", "Espaço de Terra"], c: 1, h: "Lugar onde limpam a água." },
            { id: 6302, bloom: 1, q: "De onde vem a água da torneira geralmente?", opts: ["Do mar direto", "De rios e represas", "Da chuva direto", "Do esgoto"], c: 1, h: "Fontes de água doce." },
            { id: 6303, bloom: 1, q: "Onde guardamos água em casa?", opts: ["Na gaveta", "Na caixa d'água", "No bolso", "No telhado solto"], c: 1, h: "Reservatório doméstico." },
            { id: 6304, bloom: 1, q: "Para que serve o cloro na água?", opts: ["Dar sabor", "Matar micróbios e bactérias", "Deixar azul", "Esfriar"], c: 1, h: "Desinfeta a água." },
            { id: 6305, bloom: 1, q: "O que leva a água da rua para casa?", opts: ["Caminhões", "Canos (tubulações)", "Baldes", "Vento"], c: 1, h: "Rede de distribuição subterrânea." },
            { id: 6306, bloom: 1, q: "A água do mar é boa para beber?", opts: ["Sim, é doce", "Não, é muito salgada", "Sim, é gelada", "Talvez"], c: 1, h: "O sal faz mal em excesso." },
            { id: 6307, bloom: 1, q: "O que é 'água potável'?", opts: ["Água suja", "Água própria para beber", "Água de piscina", "Água colorida"], c: 1, h: "Segura para a saúde." },
            { id: 6308, bloom: 1, q: "Quem cuida do tratamento da água?", opts: ["A escola", "A companhia de saneamento", "O médico", "A polícia"], c: 1, h: "Empresas especializadas." },
            { id: 6309, bloom: 1, q: "O que é flúor na água?", opts: ["Um veneno", "Um produto para proteger os dentes", "Um corante", "Açúcar"], c: 1, h: "Ajuda contra cáries." },
            { id: 6310, bloom: 1, q: "Depois que usamos a água, ela vira:", opts: ["Ouro", "Esgoto", "Vapor", "Nada"], c: 1, h: "Água suja que desce pelo ralo." },

            // BLOOM 2 (Entender)
            { id: 6311, bloom: 2, q: "Por que não podemos beber água direto do rio?", opts: ["Porque é quente", "Pode ter sujeira e doenças", "Porque é proibido", "Porque tem peixe"], c: 1, h: "Precisa ser tratada antes." },
            { id: 6312, bloom: 2, q: "O que acontece na Estação de Tratamento (ETA)?", opts: ["A água é fabricada", "A sujeira é removida e matam os germes", "A água é aquecida", "Colocam peixes"], c: 1, h: "Filtram e limpam." },
            { id: 6313, bloom: 2, q: "Por que a caixa d'água deve ficar tampada?", opts: ["Para não cair bicho e evitar dengue", "Para a água não fugir", "Para ficar escuro", "Para não congelar"], c: 0, h: "Mosquitos gostam de água parada limpa." },
            { id: 6314, bloom: 2, q: "O que é decantação no tratamento da água?", opts: ["Cantar para a água", "Deixar a sujeira pesada ir para o fundo", "Ferver a água", "Filtrar"], c: 1, h: "A sujeira descansa e afunda." },
            { id: 6315, bloom: 2, q: "A filtração serve para:", opts: ["Segurar as partículas sólidas de sujeira", "Matar bactérias", "Dar gosto", "Esquentar"], c: 0, h: "Passa por areia e pedras." },
            { id: 6316, bloom: 2, q: "Se faltar luz, pode faltar água. Por quê?", opts: ["A água tem medo de escuro", "As bombas que empurram a água usam eletricidade", "O cano fecha", "Não tem relação"], c: 1, h: "Precisamos de força para bombear." },
            { id: 6317, bloom: 2, q: "O que é esgoto?", opts: ["Água limpa", "Água usada com sujeira do banheiro e pia", "Água da chuva", "Água do mar"], c: 1, h: "Água residual." },
            { id: 6318, bloom: 2, q: "A água sai da ETA e vai para:", opts: ["O rio", "Grandes reservatórios e depois casas", "O céu", "A lua"], c: 1, h: "Armazenada antes de distribuir." },
            { id: 6319, bloom: 2, q: "Por que pagamos conta de água?", opts: ["Pela água em si", "Pelo serviço de tratar e levar até a casa", "Para o prefeito", "Porque sim"], c: 1, h: "O tratamento e transporte custam caro." },
            { id: 6320, bloom: 2, q: "Água mineral é:", opts: ["Água com açúcar", "Água natural com sais minerais", "Água fervida", "Água de esgoto"], c: 1, h: "Vem de fontes naturais." },

            // BLOOM 3 (Aplicar)
            { id: 6321, bloom: 3, q: "Se a água da torneira sair marrom, você deve:", opts: ["Beber rápido", "Não beber e avisar os pais", "Tomar banho", "Congelar"], c: 1, h: "Sinal de sujeira ou problema no cano." },
            { id: 6322, bloom: 3, q: "Para limpar a água em casa se não tiver filtro, podemos:", opts: ["Ferver ou usar hipoclorito", "Colocar açúcar", "Deixar no sol", "Agitar"], c: 0, h: "Mata os germes." },
            { id: 6323, bloom: 3, q: "Se você ver um cano estourado na rua:", opts: ["Brinca na água", "Avisa a companhia de água para consertar", "Ignora", "Bebe"], c: 1, h: "Evita desperdício." },
            { id: 6324, bloom: 3, q: "Limpar a caixa d'água a cada 6 meses ajuda a:", opts: ["Gastar água", "Manter a qualidade da água", "Quebrar a caixa", "Nada"], c: 1, h: "Tira a sujeira acumulada." },
            { id: 6325, bloom: 3, q: "Jogar óleo na pia:", opts: ["Entope o cano e polui a água", "Limpa o cano", "Ajuda os peixes", "Não faz nada"], c: 0, h: "Óleo e água não se misturam e poluem." },
            { id: 6326, bloom: 3, q: "Se moramos em um lugar alto, a água precisa de:", opts: ["Mais força (pressão) para subir", "Menos força", "Mágica", "Elevador"], c: 0, h: "Bombas empurram a água para cima." },
            { id: 6327, bloom: 3, q: "Usar filtro de barro ou purificador serve para:", opts: ["Enfeitar", "Garantir uma limpeza extra antes de beber", "Esquentar", "Piorar a água"], c: 1, h: "Retém impurezas finais." },
            { id: 6328, bloom: 3, q: "Água de poço (cisterna) precisa ser testada? Por quê?", opts: ["Não, é sempre limpa", "Sim, pode estar contaminada pelo solo", "Não, poço é mágico", "Só se for fundo"], c: 1, h: "Fossas perto podem sujar a água." },
            { id: 6329, bloom: 3, q: "O caminhão pipa serve para:", opts: ["Molhar o asfalto", "Levar água onde não tem encanamento ou faltou água", "Passear", "Apagar fogo só"], c: 1, h: "Transporte de água." },
            { id: 6330, bloom: 3, q: "Nas secas, o nível das represas:", opts: ["Sobe", "Baixa e pode faltar água", "Fica igual", "Congela"], c: 1, h: "Sem chuva, o estoque diminui." },

            // BLOOM 4 (Analisar)
            { id: 6331, bloom: 4, q: "Qual a diferença entre ETA e ETE?", opts: ["Nenhuma", "ETA trata água pra beber; ETE trata esgoto pra devolver ao rio", "ETE é melhor", "ETA é suja"], c: 1, h: "Uma limpa para entrar, outra para sair." },
            { id: 6332, bloom: 4, q: "Se jogarmos lixo no rio antes da captação:", opts: ["O tratamento fica mais difícil e caro", "Não muda nada", "A água fica melhor", "Os peixes comem"], c: 0, h: "Mais sujeira = mais trabalho para limpar." },
            { id: 6333, bloom: 4, q: "Por que algumas pessoas não têm água encanada?", opts: ["Porque não querem", "Falta de investimento em saneamento básico", "Porque preferem rio", "Porque é moda"], c: 1, h: "Problema social e político." },
            { id: 6334, bloom: 4, q: "Beber água salgada desidrata. Por quê?", opts: ["Porque é ruim", "O excesso de sal faz o corpo perder mais água para se livrar dele", "O sal queima", "Não desidrata"], c: 1, h: "O rim trabalha demais." },
            { id: 6335, bloom: 4, q: "A água é um recurso finito ou infinito?", opts: ["Infinito, nunca acaba", "Finito (a água doce e limpa é pouca)", "Tem muita água", "Não sei"], c: 1, h: "Podemos ficar sem água boa se não cuidar." },
            { id: 6336, bloom: 4, q: "Fervura vs Cloro. Qual a diferença?", opts: ["Fervura usa calor, cloro é químico. Ambos matam germes", "Fervura é melhor", "Cloro é melhor", "Nenhuma"], c: 0, h: "Métodos diferentes, mesmo objetivo." },
            { id: 6337, bloom: 4, q: "O que acontece se o esgoto for jogado direto no rio sem ETE?", opts: ["Mata a vida no rio e espalha doenças", "Aduba o rio", "Limpa o rio", "Os peixes crescem"], c: 0, h: "Poluição grave." },
            { id: 6338, bloom: 4, q: "Reuso da água (ex: água da máquina de lavar) serve para:", opts: ["Beber", "Lavar quintal e economizar água potável", "Tomar banho", "Cozinhar"], c: 1, h: "Água cinza serve para limpeza bruta." },
            { id: 6339, bloom: 4, q: "Por que a água tem gosto de cloro as vezes?", opts: ["Exagero no tratamento ou canos novos", "É sabor natural", "É sujeira", "É açúcar"], c: 0, h: "Resíduo do processo de desinfecção." },
            { id: 6340, bloom: 4, q: "Sem saneamento básico (água e esgoto), o que aumenta?", opts: ["A saúde", "As doenças como diarreia e verminoses", "A alegria", "O dinheiro"], c: 1, h: "Água suja transmite doenças." }
        ]
    },
    {
        id: "importancia_agua",
        name: "Importância da água",
        prep: {
            title: "Água é Vida",
            content: "<p>Sem água, nada sobrevive! <br>🌊 <strong>Uso:</strong> Beber, higiene, plantar, gerar energia.<br>🚫 <strong>Cuidado:</strong> Não desperdice, ela pode acabar!</p>",
            skin: "🌊"
        },
        pool: [
            // BLOOM 1 (Lembrar)
            { id: 6401, bloom: 1, q: "Quem precisa de água para viver?", opts: ["Ninguém", "Todos os seres vivos (plantas, animais, pessoas)", "Só peixes", "Só plantas"], c: 1, h: "É essencial para a vida." },
            { id: 6402, bloom: 1, q: "A maior parte do nosso corpo é feita de:", opts: ["Osso", "Água", "Músculo", "Ar"], c: 1, h: "Cerca de 70%." },
            { id: 6403, bloom: 1, q: "Para que usamos água em casa?", opts: ["Apenas beber", "Banho, limpeza, cozinhar", "Queimar", "Nada"], c: 1, h: "Higiene e alimentação." },
            { id: 6404, bloom: 1, q: "A água serve para gerar:", opts: ["Vento", "Eletricidade (em hidrelétricas)", "Fogo", "Terra"], c: 1, h: "A força da água move turbinas." },
            { id: 6405, bloom: 1, q: "Onde tem mais água no mundo?", opts: ["Nos rios", "Nos oceanos (água salgada)", "Nas nuvens", "Nas caixas d'água"], c: 1, h: "O mar cobre a maior parte da Terra." },
            { id: 6406, bloom: 1, q: "Podemos viver sem água?", opts: ["Sim, por anos", "Não, apenas poucos dias", "Sim, bebendo suco", "Talvez"], c: 1, h: "Desidratação mata rápido." },
            { id: 6407, bloom: 1, q: "A água é usada na agricultura para:", opts: ["Lavar o trator", "Regar as plantações (irrigação)", "Afogar plantas", "Nada"], c: 1, h: "Plantas precisam beber." },
            { id: 6408, bloom: 1, q: "Qual a cor da água pura?", opts: ["Azul", "Branca", "Incolor (sem cor)", "Transparente azulada"], c: 2, h: "Não tem cor, cheiro nem gosto." },
            { id: 6409, bloom: 1, q: "O que é desperdício de água?", opts: ["Beber água", "Deixar a torneira aberta sem usar", "Regar planta", "Tomar banho rápido"], c: 1, h: "Jogar água fora à toa." },
            { id: 6410, bloom: 1, q: "Animais aquáticos vivem:", opts: ["Na terra", "Na água", "No ar", "No fogo"], c: 1, h: "Peixes, baleias, polvos." },

            // BLOOM 2 (Entender)
            { id: 6411, bloom: 2, q: "Por que devemos economizar água?", opts: ["Porque é cara", "Porque a água doce disponível é pouca", "Porque o governo manda", "Porque sim"], c: 1, h: "Recurso escasso." },
            { id: 6412, bloom: 2, q: "Como a água regula a temperatura do corpo?", opts: ["Pelo suor", "Pelo cabelo", "Pela unha", "Pelo dente"], c: 0, h: "Suar resfria a pele." },
            { id: 6413, bloom: 2, q: "A indústria usa água para quê?", opts: ["Só para os funcionários beberem", "Para fabricar produtos, lavar e resfriar máquinas", "Para nada", "Para encher piscina"], c: 1, h: "Fazer roupa, papel e metal gasta muita água." },
            { id: 6414, bloom: 2, q: "Se a água do rio acabar, o que acontece com os animais?", opts: ["Mudam de casa", "Morrem ou sofrem muito", "Compram água", "Ficam felizes"], c: 1, h: "Eles dependem do rio." },
            { id: 6415, bloom: 2, q: "Água salgada serve para beber?", opts: ["Sim", "Não, faz mal", "Serve para cozinhar", "Serve para plantas"], c: 1, h: "Tem muito sal." },
            { id: 6416, bloom: 2, q: "Por que a água é chamada de 'solvente universal'?", opts: ["Porque dissolve muitas coisas", "Porque resolve problemas", "Porque é do universo", "Porque é solta"], c: 0, h: "Mistura com açúcar, sal, etc." },
            { id: 6417, bloom: 2, q: "O que é 'pegada hídrica'?", opts: ["Marca de pé molhado", "Quantidade de água gasta para fazer um produto", "Um sapato d'água", "Água no chão"], c: 1, h: "Quanto de água gastou para fazer sua calça?" },
            { id: 6418, bloom: 2, q: "A água ajuda no transporte?", opts: ["Não", "Sim, em navios e barcos (hidrovias)", "Só de submarino", "Só de lancha"], c: 1, h: "Rios e mares são estradas de água." },
            { id: 6419, bloom: 2, q: "Lavar a calçada com mangueira é:", opts: ["Necessário", "Desperdício, use vassoura", "Bom", "Rápido"], c: 1, h: "Gasta litros por minuto." },
            { id: 6420, bloom: 2, q: "A água ajuda a limpar o planeta?", opts: ["Não", "Sim, a chuva limpa o ar e leva sujeira", "Sujo", "Talvez"], c: 1, h: "A natureza se lava." },

            // BLOOM 3 (Aplicar)
            { id: 6421, bloom: 3, q: "Ao escovar os dentes, você deve:", opts: ["Deixar a torneira aberta", "Fechar a torneira enquanto escova", "Usar mangueira", "Não usar água"], c: 1, h: "Economia simples." },
            { id: 6422, bloom: 3, q: "Para lavar o carro economizando, use:", opts: ["Mangueira ligada", "Balde", "Chuva", "Rio"], c: 1, h: "Balde controla a quantidade." },
            { id: 6423, bloom: 3, q: "Se você vir um vazamento em casa:", opts: ["Deixa pingar", "Avisa um adulto para consertar", "Brinca com a água", "Põe um copo"], c: 1, h: "Gota a gota se perde muito." },
            { id: 6424, bloom: 3, q: "Comer menos carne economiza água? Por quê?", opts: ["Não tem relação", "Sim, criar gado gasta muita água (beber e pasto)", "Carne é seca", "O boi não bebe água"], c: 1, h: "A produção de carne consome muita água." },
            { id: 6425, bloom: 3, q: "Reutilizar a água da chuva serve para:", opts: ["Beber", "Lavar quintal e regar plantas", "Tomar banho", "Cozinhar"], c: 1, h: "Não é potável, mas serve para limpeza." },
            { id: 6426, bloom: 3, q: "Se a água do mundo acabasse hoje:", opts: ["Compraríamos água", "A vida na Terra acabaria em poucos dias", "Beberíamos leite", "Nada mudaria"], c: 1, h: "Sem água, sem vida." },
            { id: 6427, bloom: 3, q: "Tomar banho de 5 minutos em vez de 20:", opts: ["Não limpa", "Economiza muita água e energia", "É ruim", "Gasta mais"], c: 1, h: "Banhos rápidos salvam o planeta." },
            { id: 6428, bloom: 3, q: "Plantar árvores na beira do rio (mata ciliar) ajuda a:", opts: ["Esconder o rio", "Proteger a água de secar e da terra cair", "Atrapalhar o rio", "Sujar a água"], c: 1, h: "Protege a nascente e o curso." },
            { id: 6429, bloom: 3, q: "Se poluirmos o oceano, prejudicamos:", opts: ["Ninguém", "A vida marinha e o clima do planeta", "Só os peixes", "Os navios"], c: 1, h: "O mar regula o clima." },
            { id: 6430, bloom: 3, q: "Uma torneira pingando o dia todo:", opts: ["Não gasta nada", "Enche muitos baldes (desperdício)", "É legal", "Faz música"], c: 1, h: "Pode gastar 40 litros por dia." },

            // BLOOM 4 (Analisar)
            { id: 6431, bloom: 4, q: "O Brasil tem muita água, então por que falta em alguns lugares?", opts: ["O Brasil é pequeno", "Má distribuição, poluição e desperdício", "A água fugiu", "Porque é salgada"], c: 1, h: "Tem muita na Amazônia, pouca no Nordeste." },
            { id: 6432, bloom: 4, q: "Qual a relação entre desmatamento e falta d'água?", opts: ["Nenhuma", "Sem árvores, chove menos e as nascentes secam", "As árvores bebem a água toda", "O sol fica mais forte"], c: 1, h: "A floresta produz chuva." },
            { id: 6433, bloom: 4, q: "Água é um direito ou uma mercadoria?", opts: ["Mercadoria, só tem quem paga", "Direito humano essencial à vida", "Nenhum", "Brinquedo"], c: 1, h: "Todos deveriam ter acesso." },
            { id: 6434, bloom: 4, q: "O que gasta mais água: uso doméstico ou agricultura?", opts: ["Doméstico", "Agricultura (irrigação)", "Indústria", "Escola"], c: 1, h: "Plantações gastam 70% da água." },
            { id: 6435, bloom: 4, q: "Se a água é um ciclo fechado, por que dizem que vai acabar?", opts: ["É mentira", "Porque estamos poluindo a água limpa mais rápido do que ela se limpa", "Ela vira pedra", "O sol bebe tudo"], c: 1, h: "A água potável fica escassa." },
            { id: 6436, bloom: 4, q: "Dessalinizar a água do mar é a solução?", opts: ["Sim, é fácil e barato", "Ajuda, mas é muito caro e gasta muita energia", "Não funciona", "O sal volta"], c: 1, h: "Tecnologia cara." },
            { id: 6437, bloom: 4, q: "Conflitos por água podem acontecer?", opts: ["Não, tem muita", "Sim, se a água ficar escassa, países podem brigar", "Só em filme", "Água acalma"], c: 1, h: "A 'guerra da água' é um risco." },
            { id: 6438, bloom: 4, q: "Poluir a água subterrânea é pior que o rio?", opts: ["Igual", "Pior, pois é muito difícil de limpar lá embaixo", "Melhor", "Não polui"], c: 1, h: "O dano é quase irreversível." },
            { id: 6439, bloom: 4, q: "O que é 'água virtual'?", opts: ["Água de jogo", "A água usada para produzir coisas que compramos", "Água falsa", "Nuvem"], c: 1, h: "Água embutida no produto." },
            { id: 6440, bloom: 4, q: "A responsabilidade de cuidar da água é:", opts: ["Do governo", "Das empresas", "De todos nós", "Dos peixes"], c: 2, h: "Coletiva." }
        ]
    }
]},
        { id: "ing", name: "Inglês", icon: "💂", color: "bg-pink-500", accent: "border-pink-600", categories: [
            {id: "fruits",
                    name: "Fruits",
                    prep: {
                        title: "Yummy fruits!",
                        content: "<p>Apple, banana, orange, grape... vamos treinar nomes de frutas em inglês.</p>",
                        skin: "🍎"
                    },
                    pool: [
                        { id: 1, bloom: 1, q: "Que fruta é esta? 🍎", opts: ["Apple", "Banana", "Grape", "Pear"], c: 0, h: "Red fruit: apple." },
                        { id: 2, bloom: 1, q: "What fruit is yellow and curved?", opts: ["Apple", "Banana", "Orange", "Peach"], c: 1, h: "Classic yellow fruit: banana." },
                        { id: 3, bloom: 1, q: "Which one is purple?", opts: ["Grape", "Strawberry", "Pineapple", "Lemon"], c: 0, h: "Grapes are usually purple or green." },
                        { id: 4, bloom: 1, q: "‘Orange’ is the name of:", opts: ["A fruit", "A color", "Both", "None"], c: 2, h: "Orange is both a fruit and a color." },
                        { id: 5, bloom: 1, q: "What fruit is 🍓?", opts: ["Strawberry", "Pear", "Watermelon", "Banana"], c: 0, h: "Small red fruit with seeds outside." },
                        { id: 6, bloom: 1, q: "Which fruit is green outside and red inside?", opts: ["Watermelon", "Apple", "Grape", "Peach"], c: 0, h: "Classic green rind + red pulp." },
                        { id: 7, bloom: 1, q: "What fruit is spiky and tropical?", opts: ["Pineapple", "Banana", "Orange", "Lemon"], c: 0, h: "Pineapple has a rough, spiky skin." },
                        { id: 8, bloom: 1, q: "Which word means ‘uva’ in English?", opts: ["Grape", "Pear", "Peach", "Plum"], c: 0, h: "Grape = uva." },
                        { id: 9, bloom: 1, q: "‘Pear’ is which fruit?", opts: ["Maçã", "Pêra", "Uva", "Melão"], c: 1, h: "Pear = pêra." },
                        { id: 10, bloom: 1, q: "What fruit is small, blue, and round?", opts: ["Blueberry", "Strawberry", "Cherry", "Melon"], c: 0, h: "Blueberry is small and blue." },
                        { id: 11, bloom: 1, q: "Which fruit has a big seed in the middle?", opts: ["Peach", "Banana", "Grape", "Orange"], c: 0, h: "Peaches have a pit." },
                        { id: 12, bloom: 1, q: "What fruit is 🍌?", opts: ["Banana", "Lemon", "Mango", "Grape"], c: 0, h: "Banana emoji." },
                        { id: 13, bloom: 1, q: "Which one is a citrus fruit?", opts: ["Orange", "Pear", "Peach", "Grape"], c: 0, h: "Orange is citrus." },
                        { id: 14, bloom: 1, q: "‘Lemon’ is:", opts: ["Sweet", "Sour", "Blue", "Seedless"], c: 1, h: "Lemon is sour." },
                        { id: 15, bloom: 1, q: "What fruit is 🍉?", opts: ["Watermelon", "Apple", "Pineapple", "Grape"], c: 0, h: "Watermelon emoji." },

                        { id: 16, bloom: 2, q: "Which fruit is usually used to make lemonade?", opts: ["Apple", "Lemon", "Banana", "Pear"], c: 1, h: "Lemon → lemonade." },
                        { id: 17, bloom: 2, q: "Which fruit is typically sweet and red?", opts: ["Strawberry", "Lemon", "Lime", "Blueberry"], c: 0, h: "Strawberries are red and sweet." },
                        { id: 18, bloom: 2, q: "Mango is usually:", opts: ["Cold", "Spicy", "Tropical", "Salty"], c: 2, h: "Mango → tropical fruit." },
                        { id: 19, bloom: 2, q: "Which fruit grows in bunches?", opts: ["Grape", "Pear", "Peach", "Lemon"], c: 0, h: "Grapes grow in clusters." },
                        { id: 20, bloom: 2, q: "Pineapple tastes:", opts: ["Bitter", "Sour and sweet", "Salty", "Dry"], c: 1, h: "Acidic and sweet combo." },
                        { id: 21, bloom: 2, q: "Watermelon has:", opts: ["Milk", "Seeds", "Bones", "Leaves"], c: 1, h: "Watermelons have seeds (unless seedless)." },
                        { id: 22, bloom: 2, q: "Bananas are:", opts: ["Round", "Curved", "Spiky", "Blue"], c: 1, h: "Signature shape." },
                        { id: 23, bloom: 2, q: "Which fruit is very juicy?", opts: ["Orange", "Peach", "Pear", "All of them"], c: 3, h: "All are generally juicy." },
                        { id: 24, bloom: 2, q: "Blueberries are:", opts: ["Red", "Blue", "Purple", "White"], c: 1, h: "Blue as the name says." },
                        { id: 25, bloom: 2, q: "A fruit salad usually has:", opts: ["Cars", "Animals", "Fruits", "Shoes"], c: 2, h: "Obvious, but matches Bloom 2." },
                        { id: 26, bloom: 2, q: "Which fruit is commonly eaten dried?", opts: ["Grape", "Lemon", "Pineapple", "Banana"], c: 0, h: "Grapes → raisins." },
                        { id: 27, bloom: 2, q: "A kiwi is usually:", opts: ["Hairy outside", "Blue inside", "Hard like wood", "Frozen"], c: 0, h: "Brown fuzzy skin." },
                        { id: 28, bloom: 2, q: "Choose the JUICIEST fruit:", opts: ["Pear", "Watermelon", "Grape", "Peach"], c: 1, h: "Watermelon is extremely juicy." },
                        { id: 29, bloom: 2, q: "Which fruit is citrus?", opts: ["Peach", "Grape", "Lemon", "Banana"], c: 2, h: "Lemon is citrus." },
                        { id: 30, bloom: 2, q: "A strawberry has its seeds:", opts: ["Inside", "Outside", "No seeds", "Under the leaf"], c: 1, h: "Unique trait of strawberries." },

                        { id: 31, bloom: 3, q: "Complete: \"I like ________.\" (uvas)", opts: ["grape", "grapes", "graping", "graped"], c: 1, h: "Use plural for general preference." },
                        { id: 32, bloom: 3, q: "Choose the correct translation: \"Suco de laranja\".", opts: ["Apple juice", "Orange juice", "Pear juice", "Water juice"], c: 1, h: "Orange juice." },
                        { id: 33, bloom: 3, q: "What would you buy for lemonade?", opts: ["Lemons", "Bananas", "Apples", "Blueberries"], c: 0, h: "Lemons." },
                        { id: 34, bloom: 3, q: "Complete: \"This ________ is sweet.\" (morango)", opts: ["strawberry", "pear", "peach", "lemon"], c: 0, h: "Correct noun." },
                        { id: 35, bloom: 3, q: "Which fruit fits the sentence? \"I peel it before eating.\"", opts: ["Grape", "Banana", "Strawberry", "Blueberry"], c: 1, h: "Banana must be peeled." },
                        { id: 36, bloom: 3, q: "You want to make a fruit salad. Choose the fruit:", opts: ["Book", "Orange", "Chair", "Shoe"], c: 1, h: "Only fruit option." },
                        { id: 37, bloom: 3, q: "Complete: \"The ________ is very juicy.\" (melancia)", opts: ["pear", "watermelon", "peach", "lemon"], c: 1, h: "Watermelon fits." },
                        { id: 38, bloom: 3, q: "You want a SOUR fruit. Choose:", opts: ["Banana", "Lemon", "Peach", "Mango"], c: 1, h: "Lemon is sour." },
                        { id: 39, bloom: 3, q: "Which fruit goes in a smoothie?", opts: ["Banana", "Rock", "Paper", "Soap"], c: 0, h: "Banana is typical." },
                        { id: 40, bloom: 3, q: "Choose the fruit that is commonly sliced:", opts: ["Watermelon", "Shoe", "Pencil", "Bag"], c: 0, h: "Large fruit." },
                        { id: 41, bloom: 3, q: "Complete: \"I don't like ________ seeds.\" (uva)", opts: ["grape", "grapes", "grape's", "graped"], c: 1, h: "Plural." },
                        { id: 42, bloom: 3, q: "Which fruit do you squeeze to get juice?", opts: ["Orange", "Apple", "Grape", "Peach"], c: 0, h: "Orange juice." },
                        { id: 43, bloom: 3, q: "Where do grapes grow?", opts: ["On trees", "On vines", "Underground", "In water"], c: 1, h: "Vines." },
                        { id: 44, bloom: 3, q: "Which fruit is red when ripe?", opts: ["Banana", "Strawberry", "Lemon", "Blueberry"], c: 1, h: "Red strawberry." },
                        { id: 45, bloom: 3, q: "Complete: \"I bought two ________.\" (peras)", opts: ["pear", "pears", "peared", "pearings"], c: 1, h: "Plural noun." },

                        { id: 46, bloom: 4, q: "Which pair has one SWEET fruit and one SOUR fruit?", opts: ["Apple & Lemon", "Banana & Banana", "Grape & Grape", "Lemon & Lemon"], c: 0, h: "Apple sweet, lemon sour." },
                        { id: 47, bloom: 4, q: "Which fruit does NOT belong in a citrus group?", opts: ["Orange", "Lemon", "Pear", "Lime"], c: 2, h: "Pear isn’t citrus." },
                        { id: 48, bloom: 4, q: "Which fruit pair is MOST similar in color?", opts: ["Banana & Lemon", "Grape & Blueberry", "Strawberry & Kiwi", "Pear & Cherry"], c: 1, h: "Purple/blue tones." },
                        { id: 49, bloom: 4, q: "Which fruit requires peeling before eating?", opts: ["Grape", "Banana", "Strawberry", "Apple"], c: 1, h: "Banana." },
                        { id: 50, bloom: 4, q: "Which fruit is harder to slice?", opts: ["Watermelon", "Blueberry", "Strawberry", "Grape"], c: 0, h: "Watermelons are large." },
                        { id: 51, bloom: 4, q: "Which fruit DOESN'T belong with the others?", opts: ["Apple", "Banana", "Orange", "Shoe"], c: 3, h: "Odd one out." },
                        { id: 52, bloom: 4, q: "Which fruit usually has many small seeds?", opts: ["Apple", "Strawberry", "Pear", "Peach"], c: 1, h: "Seeds on skin." },
                        { id: 53, bloom: 4, q: "Which fruit has a stone/pit?", opts: ["Peach", "Grape", "Banana", "Orange"], c: 0, h: "Peach pit." },
                        { id: 54, bloom: 4, q: "Which fruit is MOST different in shape?", opts: ["Banana", "Pear", "Peach", "Apple"], c: 0, h: "Banana stands out." },
                        { id: 55, bloom: 4, q: "Which group contains only berries?", opts: ["Strawberry, Blueberry", "Apple, Banana", "Pear, Lemon", "Peach, Plum"], c: 0, h: "Both berries." },
                        { id: 56, bloom: 4, q: "Which fruit doesn’t match the tropical group?", opts: ["Mango", "Pineapple", "Banana", "Apple"], c: 3, h: "Apple is temperate." },
                        { id: 57, bloom: 4, q: "Which fruit is closest in flavor to peach?", opts: ["Plum", "Lemon", "Grape", "Blueberry"], c: 0, h: "Similar stone fruits." },
                        { id: 58, bloom: 4, q: "Which group includes only ROUND fruits?", opts: ["Apple, Orange", "Banana, Pear", "Watermelon, Banana", "Banana, Lemon"], c: 0, h: "Both round." },
                        { id: 59, bloom: 4, q: "Which fruit is MOST similar to lime?", opts: ["Lemon", "Strawberry", "Peach", "Grape"], c: 0, h: "Both citrus, sour." },
                        { id: 60, bloom: 4, q: "Which fruit would NOT normally be used in juice?", opts: ["Orange", "Grape", "Banana", "Lemon"], c: 2, h: "Banana is used more for smoothies." },

                        { id: 61, bloom: 5, q: "Which fruit is the HEALTHIEST choice for vitamin C?", opts: ["Strawberry", "Pear", "Banana", "Blueberry"], c: 0, h: "Strawberries have high vitamin C." },
                        { id: 62, bloom: 5, q: "Which fruit is BEST for a hot day?", opts: ["Watermelon", "Plum", "Peach", "Grape"], c: 0, h: "Very hydrating." },
                        { id: 63, bloom: 5, q: "For a sour recipe, you should choose:", opts: ["Peach", "Lemon", "Banana", "Grape"], c: 1, h: "Lemon is strongly acidic." },
                        { id: 64, bloom: 5, q: "For a smoothie, the BEST fruit base is:", opts: ["Banana", "Lemon", "Lime", "Pear"], c: 0, h: "Banana adds creaminess." },
                        { id: 65, bloom: 5, q: "Which fruit lasts longer without spoiling?", opts: ["Banana", "Grape", "Apple", "Strawberry"], c: 2, h: "Apples keep longer." },
                        { id: 66, bloom: 5, q: "Which fruit offers the MOST hydration?", opts: ["Watermelon", "Banana", "Apple", "Grape"], c: 0, h: "High water content." },
                        { id: 67, bloom: 5, q: "Best fruit for a lunchbox (less likely to mash)?", opts: ["Banana", "Strawberry", "Melon", "Apple"], c: 3, h: "Apples are sturdy." },
                        { id: 68, bloom: 5, q: "Most practical fruit to peel and eat quickly:", opts: ["Peach", "Pear", "Banana", "Watermelon"], c: 2, h: "Banana wins on practicality." },
                        { id: 69, bloom: 5, q: "If you dislike sour flavors, avoid:", opts: ["Strawberry", "Lemon", "Peach", "Banana"], c: 1, h: "Lemon is very sour." },
                        { id: 70, bloom: 5, q: "Choose the MOST versatile cooking fruit:", opts: ["Apple", "Grape", "Watermelon", "Banana"], c: 0, h: "Apples fit desserts, pies, sauces." },
                        { id: 71, bloom: 5, q: "Which fruit is BEST for making jam?", opts: ["Strawberry", "Lemon", "Banana", "Pear"], c: 0, h: "Classic strawberry jam." },
                        { id: 72, bloom: 5, q: "Which fruit is MOST likely to stain clothes?", opts: ["Banana", "Blueberry", "Pear", "Lemon"], c: 1, h: "Strong pigment." },
                        { id: 73, bloom: 5, q: "Which fruit is BEST to eat dried?", opts: ["Grape", "Watermelon", "Peach", "Pear"], c: 0, h: "Raisins." },
                        { id: 74, bloom: 5, q: "Which fruit provides the STRONGEST aroma?", opts: ["Lemon", "Apple", "Grape", "Peach"], c: 0, h: "Lemon's scent is powerful." },
                        { id: 75, bloom: 5, q: "Which fruit is MOST kid-friendly and easy to carry?", opts: ["Pineapple", "Watermelon", "Banana", "Melon"], c: 2, h: "Portable and self-wrapped." },

                        { id: 76, bloom: 6, q: "Choose the BEST fruit to complete: \"I made a smoothie with milk and ________.\"", opts: ["banana", "lemon", "lime", "pear"], c: 0, h: "Banana creates ideal texture." },
                        { id: 77, bloom: 6, q: "Choose the fruit that fits a tropical recipe:", opts: ["Mango", "Apple", "Grape", "Pear"], c: 0, h: "Mango is tropical." },
                        { id: 78, bloom: 6, q: "Create the BEST combination for a fruit salad:", opts: ["Watermelon, strawberry, grape", "Lemon, lime, salt", "Steak, banana, milk", "Paper, apple, shoes"], c: 0, h: "Only one viable combo." },
                        { id: 79, bloom: 6, q: "Complete creatively: \"The ________ is perfect for summer.\"", opts: ["watermelon", "potato", "rock", "shoe"], c: 0, h: "Obvious winner." },
                        { id: 80, bloom: 6, q: "Which fruit completes the idea of a SOUR drink?", opts: ["Lemon", "Banana", "Peach", "Grape"], c: 0, h: "Lemonade." },
                        { id: 81, bloom: 6, q: "Select the BEST pair for a juice blend:", opts: ["Orange + Mango", "Banana + Bread", "Lemon + Salt", "Apple + Pasta"], c: 0, h: "Fruit + fruit only." },
                        { id: 82, bloom: 6, q: "To create a red dessert, choose the BEST fruit:", opts: ["Strawberry", "Lemon", "Pineapple", "Kiwi"], c: 0, h: "Red pigment." },
                        { id: 83, bloom: 6, q: "For a lunchbox, create a durable combination:", opts: ["Apple + grapes", "Banana + watermelon", "Peach + strawberry", "Melon + kiwi"], c: 0, h: "Both easy to pack." },
                        { id: 84, bloom: 6, q: "Create a balanced flavor mix:", opts: ["Sweet + Sour: strawberry + lemon", "Sweet + Sweet: lemon + lemon", "Salty + Sweet: grape + salt", "None"], c: 0, h: "Sweet + sour pairing." },
                        { id: 85, bloom: 6, q: "Choose the BEST fruit for a classroom snack:", opts: ["Apple", "Pineapple (whole)", "Watermelon (whole)", "Kiwi without knife"], c: 0, h: "Apple requires no prep." },
                        { id: 86, bloom: 6, q: "Complete: \"To decorate the cake, I used ________.\"", opts: ["strawberries", "rocks", "salt", "paper"], c: 0, h: "Cake + fruit topping." },
                        { id: 87, bloom: 6, q: "Which fruit should you use to create a SOUR candy?", opts: ["Lemon", "Peach", "Banana", "Watermelon"], c: 0, h: "Lemon gives acidity." },
                        { id: 88, bloom: 6, q: "Choose the BEST fruit to freeze and blend later:", opts: ["Banana", "Lemon", "Pear", "Apple"], c: 0, h: "Frozen banana becomes creamy." },
                        { id: 89, bloom: 6, q: "Design a tropical drink. What MUST it include?", opts: ["Pineapple", "Apple", "Blueberry", "Watermelon"], c: 0, h: "Pineapple is classic tropical." },
                        { id: 90, bloom: 6, q: "To create a recipe high in water content, choose:", opts: ["Watermelon", "Banana", "Peach", "Grape"], c: 0, h: "Watermelon highest water %." },

                        { id: 91, bloom: 7, q: "If you need a fruit that represents SUMMER and HYDRATION, the BEST symbolic choice is:", opts: ["Watermelon", "Apple", "Pear", "Banana"], c: 0, h: "Cultural + nutritional fit." },
                        { id: 92, bloom: 7, q: "If a character in a story offers lemonade, what feeling is MOST implied?", opts: ["Refreshment", "Sadness", "Fear", "Confusion"], c: 0, h: "Lemonade symbolizes cooling down." },
                        { id: 93, bloom: 7, q: "Which fruit BEST symbolizes sweetness and affection in a poem?", opts: ["Strawberry", "Lemon", "Lime", "Garlic"], c: 0, h: "Common symbolic sweetness." },
                        { id: 94, bloom: 7, q: "Which fruit BEST represents EXOTIC tropical adventure?", opts: ["Mango", "Pear", "Apple", "Grape"], c: 0, h: "Exotic + tropical connotation." },
                        { id: 95, bloom: 7, q: "If a story describes a 'bitter moment', which fruit BEST fits metaphorically?", opts: ["Lemon", "Peach", "Strawberry", "Banana"], c: 0, h: "Bitterness symbolism." },
                        { id: 96, bloom: 7, q: "Which fruit BEST expresses celebration and abundance?", opts: ["Grapes", "Lime", "Pear", "Banana"], c: 0, h: "Grapes = abundance (symbolic + cultural)." },
                        { id: 97, bloom: 7, q: "For a character who LOVES sweetness but hates sourness, which fruit BEST fits their personality?", opts: ["Peach", "Lemon", "Lime", "Grapefruit"], c: 0, h: "Soft, sweet fruit." },
                        { id: 98, bloom: 7, q: "If a classroom story needs a 'friendly fruit', which one embodies simplicity and friendliness?", opts: ["Apple", "Passionfruit", "Lime", "Pomegranate"], c: 0, h: "Apple = classic friendly symbol." },
                        { id: 99, bloom: 7, q: "For a poem about childhood innocence, which fruit is MOST appropriate?", opts: ["Strawberry", "Lemon", "Grape", "Kiwi"], c: 0, h: "Symbol of sweetness & childhood." },
                        { id: 100, bloom: 7, q: "If a recipe wants contrast of flavors, which combo BEST expresses that idea?", opts: ["Strawberry + lemon", "Apple + apple", "Banana + banana", "Pear + pear"], c: 0, h: "Sweet + sour contrast." },
                        { id: 101, bloom: 7, q: "In a story metaphor, which fruit represents ‘fresh start’?", opts: ["Apple", "Lemon", "Plum", "Cherry"], c: 0, h: "Apples symbolize beginnings." },
                        { id: 102, bloom: 7, q: "If a character wants to show hospitality, offering which fruit sends the BEST message?", opts: ["Grapes", "Lemon", "Blueberry", "Lime"], c: 0, h: "Grapes have cultural symbolism of sharing." },
                        { id: 103, bloom: 7, q: "Which fruit BEST fits a story about energy and positivity?", opts: ["Orange", "Plum", "Lemon", "Pear"], c: 0, h: "Orange = bright, energetic." },
                        { id: 104, bloom: 7, q: "Which fruit metaphorically represents ‘simplicity’?", opts: ["Apple", "Blueberry", "Cherry", "Fig"], c: 0, h: "Straightforward symbolism." },
                        { id: 105, bloom: 7, q: "A teacher wants a symbol for teamwork. Which fruit set BEST represents unity?", opts: ["Grapes (cluster)", "Bananas", "Apples", "Lemons"], c: 0, h: "Grapes grow together in clusters." },


                    ]
                }
        ] }
    ]
};

/*

Assuntos 
Sao eles:
- portugues: pronomes demonstrativos e possessivos;  uso de s e z; verbos; palavras com LH e LI; conjugação do verbo; noções de sujeito e predicado; uso de cedila
- matematica: divisão, divisão exata e não exata; fração, sistema monetário, gráficos, tabelas, medidas de tempo
- história: herança indígena; os africanos; a vida dos africanos que foram escravizados; herança africana; diferenças culturais no brasil
- ciencias: os recursos naturais; a matéria e a energia; a luz; o som e a vibração da matéria; a tecnologia no cotidiano
- geografia: vivendo nos espaços urbanos e rurais; a circulação de pessoas, produtos e serviços entre os espaços urbanos e rurais; o ciclo da água; o abastecimento da água, a importância da água;
- inglês: fruits

*/