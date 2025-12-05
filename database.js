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
                {
                    id: "pronomes",
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
                {
                    id: "verbos",
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
            { id: "divisao_exata", name: "Divisão exata e não exata", prep: { title: "Sobra ou não sobra?", content: "<p>Na divisão exata, não sobra nada. Na não exata, temos resto.</p>", skin: "📊" }, pool: [] },
            { id: "fracao", name: "Fração", prep: { title: "Partes de um inteiro", content: "<p>Frações representam partes de um todo: 1/2, 1/3, 3/4.</p>", skin: "🍕" }, pool: [] },
            { id: "sistema_monetario", name: "Sistema monetário", prep: { title: "Dinheiro em jogo", content: "<p>Vamos trabalhar com reais, notas, moedas e troco.</p>", skin: "💰" }, pool: [] },
            { id: "graficos", name: "Gráficos", prep: { title: "Lendo gráficos", content: "<p>Gráficos ajudam a visualizar dados de forma rápida.</p>", skin: "📈" }, pool: [] },
            { id: "tabelas", name: "Tabelas", prep: { title: "Organizando dados", content: "<p>Tabelas organizam informações em linhas e colunas.</p>", skin: "📊" }, pool: [] },
            { id: "medidas_tempo", name: "Medidas de tempo", prep: { title: "Horas, dias e meses", content: "<p>Vamos relacionar relógio, calendário e duração de eventos.</p>", skin: "⏰" }, pool: [] }
            
        ] },
        {   id: "hist", name: "História", icon: "🏛️", color: "bg-yellow-500", accent: "border-yellow-600", categories: [
            { id: "heranca_indigena", name: "Herança indígena", prep: { title: "Marcas indígenas", content: "<p>Palavras, comidas, costumes indígenas presentes no nosso dia a dia.</p>", skin: "🏹" }, pool: [] },
            { id: "africanos", name: "Os africanos", prep: { title: "Povos africanos", content: "<p>Origem, culturas e trajetórias de povos africanos.</p>", skin: "🌍" }, pool: [] },
            { id: "vida_escravizados", name: "Vida dos africanos escravizados", prep: { title: "Tempo de escravidão", content: "<p>As condições de vida, resistência e lutas das pessoas escravizadas.</p>", skin: "⛓️" }, pool: [] },
            { id: "heranca_africana", name: "Herança africana", prep: { title: "Marcas africanas", content: "<p>Música, religião, comidas e costumes de origem africana no Brasil.</p>", skin: "🥁" }, pool: [] },
            { id: "diferencas_culturais", name: "Diferenças culturais no Brasil", prep: { title: "Um país diverso", content: "<p>O Brasil é feito de muitas culturas, tradições e sotaques.</p>", skin: "🎭" }, pool: [] }
            
        ] },
        {   id: "geo", name: "Geografia", icon: "🌍", color: "bg-green-500", accent: "border-green-600", categories: [
            { id: "recursos_naturais", name: "Recursos naturais", prep: { title: "O que a natureza nos dá", content: "<p>Água, solo, ar, minerais e outros recursos que usamos.</p>", skin: "🌱" }, pool: [] },
            { id: "materia_energia", name: "Matéria e energia", prep: { title: "Do que tudo é feito", content: "<p>Estados físicos, transformações e formas de energia.</p>", skin: "⚡" }, pool: [] },
            { id: "luz", name: "A luz", prep: { title: "Ver o mundo", content: "<p>A luz permite enxergar, forma sombras e reflexos.</p>", skin: "💡" }, pool: [] },
            { id: "som_vibracao", name: "Som e vibração da matéria", prep: { title: "Tudo vibra", content: "<p>O som é produzido por vibrações e se propaga em meios materiais.</p>", skin: "🔊" }, pool: [] },
            { id: "tecnologia_cotidiano", name: "Tecnologia no cotidiano", prep: { title: "Tecnologia e vida", content: "<p>Ferramentas, aparelhos e sistemas que usamos todos os dias.</p>", skin: "📱" }, pool: [] }
            
        ] },
        { id: "cienc", name: "Ciências", icon: "🧪", color: "bg-purple-500", accent: "border-purple-600", categories: [
            { id: "espacos_urbanos_rurais", name: "Espaços urbanos e rurais", prep: { title: "Cidade e campo", content: "<p>Diferenças e relações entre o urbano e o rural.</p>", skin: "🏙️" }, pool: [] },
                { id: "circulacao", name: "Circulação entre espaços urbanos e rurais", prep: { title: "Vai e vem", content: "<p>Pessoas, produtos e serviços circulam entre cidade e campo.</p>", skin: "🚚" }, pool: [] },
                { id: "ciclo_agua", name: "Ciclo da água", prep: { title: "A viagem da água", content: "<p>Evaporação, condensação, precipitação e infiltração.</p>", skin: "💧" }, pool: [] },
                { id: "abastecimento_agua", name: "Abastecimento de água", prep: { title: "Da fonte até a torneira", content: "<p>Captação, tratamento e distribuição da água.</p>", skin: "🚰" }, pool: [] },
                { id: "importancia_agua", name: "Importância da água", prep: { title: "Água é vida", content: "<p>Água para beber, produzir alimentos, higiene e equilíbrio ambiental.</p>", skin: "🌊" }, pool: [] }
            
        ] },
        { id: "ing", name: "Inglês", icon: "💂", color: "bg-pink-500", accent: "border-pink-600", categories: [
            {
                    id: "fruits",
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