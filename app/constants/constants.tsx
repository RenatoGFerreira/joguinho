import { Song, Trophy } from "../types/types";

// export const SONGS: Song[] = [
//   {
//     id: 1,
//     title: [
//       "Missão: Impossível",
//       "Missao Impossivel",
//       "A Missão Impossível",
//       "Mission Impossible",
//       "Impossible Mission",
//     ],
//     phrase: "Até correndo o cara é bonito!",
//     audio: "/audio/missaoImpossivel.mp3",
//   },
//   {
//     id: 2,
//     title: [
//       "Star Wars",
//       "Guerra nas Estrelas",
//       "A Guerra nas Estrelas",
//     ],
//     phrase: "I am your father!!!",
//     audio: "/audio/star.mp3",
//   },
//   {
//     id: 3,
//     title: [
//       "Harry Potter",
//       "O Harry Potter",
//     ],
//     phrase: "Lufa-Lufa é a casa mais chata!!!",
//     audio: "/audio/harrypotter.mp3",
//   },
//   {
//     id: 4,
//     title: [
//       "A Pantera Cor de Rosa",
//       "Pantera Cor de Rosa",
//       "Pantera Cor-de-rosa",
//       "A Pantera Cor-de-rosa",
//       "Pink Panther",
//       "The Pink Panther",
//     ],
//     phrase: "Meu charme já vem com trilha sonora.",
//     audio: "/audio/pantera.mp3",
//   },
//   {
//     id: 5,
//     title: [
//       "Piratas do Caribe",
//       "Os Piratas do Caribe",
//       "Pirates of the Caribbean",
//     ],
//     phrase:
//       "'Você é, sem dúvida, o pior pirata de que já ouvi falar.' (Comodoro Norrington)",
//     audio: "/audio/piratasdocaribe.mp3",
//   },
//   {
//     id: 6,
//     title: [
//       "Rocky",
//       "Rocky Balboa",
//     ],
//     phrase: "De 0 a 10, esse filme é 11.",
//     audio: "/audio/rocky.mp3",
//   },
//   {
//     id: 7,
//     title: [
//       "Simpsons",
//       "Os Simpsons",
//       "The Simpsons",
//     ],
//     phrase:
//       "'A culpa é minha e eu coloco ela em quem eu quiser!' (Homer Simpson)",
//     audio: "/audio/simpsons.mp3",
//   },
//   {
//     id: 8,
//     title: [
//       "Titanic",
//       "O Titanic",
//     ],
//     phrase: "Eu sei e vc sabe, cabiam os dois ali!!!",
//     audio: "/audio/titanic.mp3",
//   },
//   {
//     id: 9,
//     title: [
//       "Tres Homens em Conflito",
//       "Três Homens em Conflito",
//       "O Bom o Mau e o Feio",
//       "Bom Mau e Feio",
//       "The Good the Bad and the Ugly",
//     ],
//     phrase: "Todo mundo já ouviu mas poucos já viram o filme!",
//     audio: "/audio/treshomensconflito.mp3",
//   },
//   {
//     id: 10,
//     title: [
//       "Psicose",
//       "A Psicose",
//       "Psycho",
//     ],
//     phrase: "Você confundiu com Halloween, acertei?",
//     audio: "/audio/psicose.mp3",
//   },
//   {
//     id: 11,
//     title: [
//       "La La Land",
//       "Lalaland",
//       "LaLaLand",
//     ],
//     phrase: "Foi só eu que não gostei do final?",
//     audio: "/audio/lalaland.mp3",
//   },
//   {
//     id: 12,
//     title: [
//       "Tropa de Elite",
//       "Elite Squad",
//     ],
//     phrase:
//       "Cadê o baiano?",
//     audio: "/audio/tropaelite.mp3",
//   },
//   {
//     id: 13,
//     title: [
//       "Poderoso Chefão",
//       "Poderoso Chefao",
//       "O Poderoso Chefão",
//       "The Godfather",
//     ],
//     phrase: "Duvido achar 5 pessoas que já viram todos!",
//     audio: "/audio/poderosochefao.mp3",
//   },
//   {
//     id: 14,
//     title: [
//       "ET",
//       "E.T.",
//       "E.T",
//       "ET O Extraterrestre",
//       "E.T. the Extra-Terrestrial",
//     ],
//     phrase: "Dedo com luz!",
//     audio: "/audio/et.mp3",
//   },
//   {
//     id: 15,
//     title: [
//       "Superman",
//       "Super-Homem",
//       "Super Homem",
//       "O Super-Homem",
//     ],
//     phrase: "Sou indestrutivel exceto por uma boa pedrada.",
//     audio: "/audio/superma.mp3",
//   },
//   {
//     id: 16,
//     title: [
//       "Auto da Compadecida",
//       "O auto da compadecida",
//       "A Dog's Will",
//       "A Dogs Will",
//       "Dogs Will"
//     ],
//     phrase: "Num sei?! Só sei que foi assim!",
//     audio: "/audio/autocompad.mp3",
//   },
//   {
//     id: 17,
//     title: [
//       "Lista de Schindler",
//       "Lista de Shindler",
//       "A Lista de Schindler",
//       "Schindler's List",
//       "Shindlers List",
//     ],
//     phrase: "Escorreu uma lágrima aqui.",
//     audio: "/audio/listashindler.mp3",
//   },
//   {
//     id: 18,
//     title: [
//       "Batman",
//       "Batman O Cavaleiro das Trevas",
//       "Cavaleiro das Trevas",
//       "Dark Knight",
//       "The Dark Knight",
//     ],
//     phrase: "Se você for rico você pode ser um superheroi... ou não!",
//     audio: "/audio/batmandarkknight.mp3",
//   },
//   {
//     id: 19,
//     title: [
//       "Ben Hur",
//       "Ben-Hur",
//     ],
//     phrase: "O primeiro filme com 11 oscares.",
//     audio: "/audio/benhur.mp3",
//   },
//   {
//     id: 20,
//     title: [
//       "Amelie Poulain",
//       "Amélie Poulain",
//       "O Fabuloso Destino de Amélie Poulain",
//       "Fabuloso Destino de Amelie Poulain",
//       "Amelie",
//     ],
//     phrase: "A vida é bela apesar de tudo.",
//     audio: "/audio/ameliepolan.mp3",
//   },
//   {
//     id: 21,
//     title: [
//       "Carruagem de Fogo",
//       "Carruagens de Fogo",
//       "Chariots of Fire",
//     ],
//     phrase: "Uma música que saiu do filme para a gloria.",
//     audio: "/audio/carruagemfogo.mp3",
//   },
//   {
//     id: 22,
//     title: [
//       "De Volta para o Futuro",
//       "O De Volta para o Futuro",
//       "Back to the Future",
//     ],
//     phrase: "Cadê os skates voadores de 2025?",
//     audio: "/audio/devoltafuturo.mp3",
//   },
//   {
//     id: 23,
//     title: [
//       "Divertidamente",
//       "Divertida Mente",
//       "Inside Out",
//     ],
//     phrase: "Bing bong meu amigo pra brincar...",
//     audio: "/audio/divertidamente.mp3",
//   },
//   {
//     id: 24,
//     title: [
//       "Forrest Gump",
//       "O Forrest Gump",
//       "The Forrest Gump"
//     ],
//     phrase: "Run forrest, RUUUNNN!!!",
//     audio: "/audio/forrestgump.mp3",
//   },
//   {
//     id: 25,
//     title: [
//       "Gladiador",
//       "O Gladiador",
//       "Gladiator",
//     ],
//     phrase: "Maximus Décimus Meridius!!!",
//     audio: "/audio/gladiador.mp3",
//   },
//   {
//     id: 26,
//     title: [
//       "Inception",
//       "Origem",
//       "A Origem",
//     ],
//     phrase: "A vida onde os ricos dormem.",
//     audio: "/audio/inception.mp3",
//   },
//   {
//     id: 27,
//     title: [
//       "Indiana Jones",
//       "Os Caçadores da Arca Perdida",
//       "Raiders of the Lost Ark",
//     ],
//     phrase: "Sem ele a história ainda seria a mesma?",
//     audio: "/audio/indianajones.mp3",
//   },
//   {
//     id: 28,
//     title: [
//       "Interestelar",
//       "Interstellar",
//     ],
//     phrase: "Aconteceu o mesmo desastre climático nos EUA em 1930.",
//     audio: "/audio/interstellar.mp3",
//   },
//   {
//     id: 29,
//     title: [
//       "Jurassic Park",
//       "Parque dos Dinossauros",
//       "O Parque dos Dinossauros",
//     ],
//     phrase: "Rã + Mosquito = Tiranossauro?",
//     audio: "/audio/jurassicpark.mp3",
//   },
//   {
//     id: 30,
//     title: [
//       "Cidade de Deus",
//       "City of God",
//     ],
//     phrase: "Pega a galinha ai cumpade!!!",
//     audio: "/audio/cidadedeus.mp3",
//   },
//   {
//     id: 31,
//     title: [
//       "E o Vento Levou",
//       "O Vento Levou",
//       "Vento Levou",
//       "Gone with the Wind",
//     ],
//     phrase: "Filme a cores mais velho que a vó.",
//     audio: "/audio/oventolevou.mp3",
//   },
//   {
//     id: 32,
//     title: [
//       "Ponte do Rio Kwai",
//       "A Ponte do Rio Kwai",
//       "Bridge on the River Kwai",
//       "The Bridge on the River Kwai",
//     ],
//     phrase: "Se você é velho você lembra do Faustão.",
//     audio: "/audio/ponteriokwai.mp3",
//   },
//   {
//     id: 33,
//     title: [
//       "O Último dos Moicanos",
//       "Último dos Moicanos",
//       "Ultimo dos Moicanos",
//       "Last of the Mohicans",
//       "The Last of the Mohicans",
//     ],
//     phrase: "Daqui surgiu a expressão 'ser o último dos moicanos'.",
//     audio: "/audio/ultiimodosmoicanos.mp3",
//   },
//   {
//     id: 34,
//     title: [
//       "Up",
//       "Up Altas Aventuras",
//       "Altas Aventuras"
//     ],
//     phrase: "'Sr Wilson?' ou 'Cachorro idiota' de qual frase você se lembra mais?",
//     audio: "/audio/up.mp3",
//   },
//   {
//     id: 35,
//     title: [
//       "A Vida é Bela",
//       "Vida é Bela",
//       "Life is Beautiful",
//       "La Vita è Bella",
//     ],
//     phrase: "Buongiorno Principessa.",
//     audio: "/audio/vidaebela.mp3",
//   },
//   {
//     id: 36,
//     title: [
//       "Vingadores",
//       "Os Vingadores",
//       "Avengers",
//       "The Avengers",
//     ],
//     phrase: "Vingadores... Avante!",
//     audio: "/audio/vingadores.mp3",
//   },
//   {
//     id: 37,
//     title: [
//       "Tubarão",
//       "Tubarao",
//       "O Tubarão",
//       "Jaws",
//     ],
//     phrase:
//       "Se você tem mais de 35, definitivamente tinha medo de tubarão na praia!",
//     audio: "/audio/tubarao.mp3",
//   },
//   {
//     id: 38,
//     title: [
//       "007",
//       "James Bond",
//       "O James Bond",
//     ],
//     phrase: "O agente só ficou loiro em 2005.",
//     audio: "/audio/007.mp3",
//   },
//   {
//     id: 39,
//     title: [
//       "Meu Tio Matou um Cara",
//       "Tio matou um cara",
//       "Uncle Killed a Guy",
//       "My Uncle Killed a Guy"
//     ],
//     phrase: "Spoiler, ele não matou um cara.",
//     audio: "/audio/sorayaqueima.mp3",
//   },
//   {
//     id: 40,
//     title: [
//       "Kung Fu Panda",
//       "O Kung Fu Panda",
//     ],
//     phrase: "... e é por isso que se chama presente!",
//     audio: "/audio/kongfupanda.mp3",
//   },
//   {
//     id: 41,
//     title: [
//       "Velozes e Furioso",
//       "Fast and Furious",
//     ],
//     phrase: "Era corrida de carros  e agora é o que?",
//     audio: "/audio/velozesfuriosos.mp3",
//   },
//   {
//     id: 42,
//     title: [
//       "Transformers",
//     ],
//     phrase: "A trilha sonora era boa mas o meme é sensacional.",
//     audio: "/audio/transformers.mp3",
//   },
//   {
//     id: 43,
//     title: [
//       "Toy Story",
//     ],
//     phrase: "O garfinho foi animado por um Brasileiro",
//     audio: "/audio/toystory.mp3",
//   },
//   {
//     id: 44,
//     title: [
//       "Top Gun - Ases Indomáveis",
//       "Top Gun",
//       "Ases Indomáveis",
//       "Top Gun: Maverick"
//     ],
//     phrase: "Homens bombados, oculos de sol, avião e volei na praia.",
//     audio: "/audio/topgun.mp3",
//   },
//   {
//     id: 45,
//     title: [
//       "Senhor dos Aneis",
//       "Lord of Rings",
//     ],
//     phrase: "'Tudo o que temos de decidir é o que fazer com o tempo que nos é dado.' (Gandalf)",
//     audio: "/audio/senhoraneis.mp3",
//   },
//   {
//     id: 46,
//     title: [
//       "Réquiem para um sonho",
//       "Requien for a dream",
//     ],
//     phrase: "Crianças, não usem drogas.",
//     audio: "/audio/requiemDream.mp3",
//   },
//   {
//     id: 47,
//     title: [
//       "Mortal Kombat",
//       "Combate Mortal",
//     ],
//     phrase: "sUbZeRo, SuBzeRo eU EscOlHIa o SuBzerO.",
//     audio: "/audio/mk.mp3",
//   },
//   {
//     id: 48,
//     title: [
//       "Madagascar",
//     ],
//     phrase: "Eu sei que você cantou quando ouviu!",
//     audio: "/audio/madagascar.mp3",
//   },
//   {
//     id: 49,
//     title: [
//       "KillBill",
//       "kill bill",
//     ],
//     phrase: "Tarantino arrasou neste!",
//     audio: "/audio/killbill.mp3",
//   },
//   {
//     id: 50,
//     title: [
//       "Homem de Ferro",
//       "Ironman",
//       "Iron man"
//     ],
//     phrase: "Playboy, filantrópico, bilionário e homem de ferro.",
//     audio: "/audio/ironman.mp3",
//   },
//   {
//     id: 51,
//     title: [
//       "Intocáveis",
//     ],
//     phrase: "Ele é forte, troca minhas meias e não tem pena.",
//     audio: "/audio/intocaveis.mp3",
//   },
//   {
//     id: 52,
//     title: [
//       "Frozen",
//     ],
//     phrase: "Eu sei que você também cantou essa!",
//     audio: "/audio/frozen.mp3",
//   },
//   {
//     id: 53,
//     title: [
//       "Footloose",
//     ],
//     phrase: "Ainda vigorava a lei em 1980 na cidade de Elmore, Oklahoma onde era proibido dançar. ",
//     audio: "/audio/footloose.mp3",
//   },
//   {
//     id: 54,
//     title: [
//       "Flash Dance",
//     ],
//     phrase: "A dança da cadeira e balde de agua na cabeça.",
//     audio: "/audio/flashdance.mp3",
//   },
//   {
//     id: 55,
//     title: [
//       "O Exorcista",
//       "Exorcista",
//       "Exorcist"
//     ],
//     phrase: "Eodou a cabeça!",
//     audio: "/audio/exorcista.mp3",
//   },
//   {
//     id: 56,
//     title: [
//       "Embalos de Sábado a noite",
//     ],
//     phrase: "O filme onde eternizou o disco dance!",
//     audio: "/audio/embalossabado.mp3",
//   },
//   {
//     id: 57,
//     title: [
//       "Dois Filhos de Francisco",
//     ],
//     phrase: "Já tomou seu ovo cru hoje?",
//     audio: "/audio/doisfilhofrancisco.mp3",
//   },
//   {
//     id: 58,
//     title: [
//       "Dirty Dancing",
//     ],
//     phrase: "Sempre tem acidentes em casamentos quando toca essa música.",
//     audio: "/audio/dirtydancing.mp3",
//   },
//   {
//     id: 59,
//     title: [
//       "Deadpool",
//     ],
//     phrase: "By by by também é boa mas essa aqui é a cara dele!",
//     audio: "/audio/deadpool.mp3",
//   },
//   {
//     id: 60,
//     title: [
//       "Crepusculo",
//     ],
//     phrase: "Você é time livro ou time filme?",
//     audio: "/audio/crepusculo.mp3",
//   },
//   {
//     id: 61,
//     title: [
//       "Blade",
//     ],
//     phrase: "Merece cross over com Crepusculo?",
//     audio: "/audio/blade.mp3",
//   },
//   {
//     id: 62,
//     title: [
//       "2001: Uma Odisseia no Espaço",
//       "2001",
//       "Odisseia no espaco"
//     ],
//     phrase: "IA e Evolução humana debatidos em 1968.",
//     audio: "/audio/2001.mp3",
//   },

// ];
export const SONGS: Song[] = [
  {
    id: 1,
    title: [
      "Missão: Impossível",
      "Mission: Impossible",
      "Mission Impossible",
      "Missao Impossivel",
    ],
    phrase: "Até correndo o cara é bonito!",
    audio: "/audio/missaoImpossivel.mp3",
  },
  {
    id: 2,
    title: ["Star Wars", "Guerra nas Estrelas"],
    phrase: "I am your father!!!",
    audio: "/audio/star.mp3",
  },
  {
    id: 3,
    title: ["Harry Potter"],
    phrase: "Lufa-Lufa é a casa mais chata!!!",
    audio: "/audio/harrypotter.mp3",
  },
  {
    id: 4,
    title: [
      "A Pantera Cor-de-Rosa",
      "The Pink Panther",
      "Pink Panther",
      "Pantera Cor-de-Rosa",
      "Pantera cor de Rosa",
    ],
    phrase: "Meu charme já vem com trilha sonora.",
    audio: "/audio/pantera.mp3",
  },
  {
    id: 5,
    title: ["Piratas do Caribe", "Pirates of the Caribbean"],
    phrase:
      "'Você é, sem dúvida, o pior pirata de que já ouvi falar.' (Comodoro Norrington)",
    audio: "/audio/piratasdocaribe.mp3",
  },
  {
    id: 6,
    title: ["Rocky: Um Lutador", "Rocky"],
    phrase: "De 0 a 10, esse filme é 11.",
    audio: "/audio/rocky.mp3",
  },
  {
    id: 7,
    title: [
      "Os Simpsons: O Filme",
      "The Simpsons Movie",
      "The Simpsons",
      "Simpsons",
    ],
    phrase:
      "'A culpa é minha e eu coloco ela em quem eu quiser!' (Homer Simpson)",
    audio: "/audio/simpsons.mp3",
  },
  {
    id: 8,
    title: ["Titanic", "Titanic"],
    phrase: "Eu sei e você sabe: cabiam os dois ali!!!",
    audio: "/audio/titanic.mp3",
  },
  {
    id: 9,
    title: [
      "Três Homens em Conflito",
      "The Good, the Bad and the Ugly",
      "Tres Homens em Conflito",
      "O Bom o mau o feio",
      "bom mau o feio",
      "bom mau e o feio",
    ],
    phrase: "Todo mundo já ouviu, mas poucos já viram o filme!",
    audio: "/audio/treshomensconflito.mp3",
  },
  {
    id: 10,
    title: ["Psicose", "Psycho", "Psicose"],
    phrase: "Você confundiu com Halloween, acertei?",
    audio: "/audio/psicose.mp3",
  },
  {
    id: 11,
    title: [
      "La La Land: Cantando Estações",
      "La La Land",
      "",
      "La La Land",
      "lalaland",
    ],
    phrase: "Foi só eu que não gostei do final?",
    audio: "/audio/lalaland.mp3",
  },
  {
    id: 12,
    title: ["Tropa de Elite", "Elite Squad"],
    phrase: "Cadê o baiano?",
    audio: "/audio/tropaelite.mp3",
  },
  {
    id: 13,
    title: ["O Poderoso Chefão", "The Godfather", "Poderoso Chefão"],
    phrase: "Duvido achar 5 pessoas que já viram todos!",
    audio: "/audio/poderosochefao.mp3",
  },
  {
    id: 14,
    title: ["E.T.: O Extraterrestre", "E.T. the Extra-Terrestrial", "ET"],
    phrase: "Dedo com luz!",
    audio: "/audio/et.mp3",
  },
  {
    id: 15,
    title: ["Superman: O Filme", "Superman", "Super-Homem", "Super Homem"],
    phrase: "Sou indestrutível, exceto por uma boa pedrada.",
    audio: "/audio/superma.mp3",
  },
  {
    id: 16,
    title: ["O Auto da Compadecida", "A Dog's Will", "Auto da Compadecida"],
    phrase: "Não sei?! Só sei que foi assim!",
    audio: "/audio/autocompad.mp3",
  },
  {
    id: 17,
    title: ["A Lista de Schindler", "Schindler's List", "Lista de Schindler"],
    phrase: "Escorreu uma lágrima aqui.",
    audio: "/audio/listashindler.mp3",
  },
  {
    id: 18,
    title: [
      "Batman: O Cavaleiro das Trevas",
      "The Dark Knight",
      "Cavaleiro das Trevas",
      "Batman",
    ],
    phrase: "Se você for rico, você pode ser um super-herói... ou não!",
    audio: "/audio/batmandarkknight.mp3",
  },
  {
    id: 19,
    title: ["Ben-Hur", "Ben Hur"],
    phrase: "O primeiro filme com 11 Oscars.",
    audio: "/audio/benhur.mp3",
  },
  {
    id: 20,
    title: [
      "O Fabuloso Destino de Amélie Poulain",
      "Le Fabuleux Destin d'Amélie Poulain",
      "Amélie",
      "Amelie",
      "Amelie Poulain",
    ],
    phrase: "A vida é bela, apesar de tudo.",
    audio: "/audio/ameliepolan.mp3",
  },
  {
    id: 21,
    title: ["Carruagens de Fogo", "Chariots of Fire"],
    phrase: "Uma música que saiu do filme para a glória.",
    audio: "/audio/carruagemfogo.mp3",
  },
  {
    id: 22,
    title: [
      "De Volta para o Futuro",
      "Back to the Future",
      "Volta para o Futuro",
    ],
    phrase: "Cadê os skates voadores de 2025?",
    audio: "/audio/devoltafuturo.mp3",
  },
  {
    id: 23,
    title: ["Divertidamente", "Inside Out", "Divertidamente"],
    phrase: "Bing Bong, meu amigo para brincar...",
    audio: "/audio/divertidamente.mp3",
  },
  {
    id: 24,
    title: [
      "Forrest Gump: O Contador de Histórias",
      "Forrest Gump",
      "Forrest Gump",
    ],
    phrase: "Run, Forrest, RUUUNNN!!!",
    audio: "/audio/forrestgump.mp3",
  },
  {
    id: 25,
    title: ["Gladiador", "Gladiator"],
    phrase: "Maximus Decimus Meridius!!!",
    audio: "/audio/gladiador.mp3",
  },
  {
    id: 26,
    title: ["A Origem", "Inception", "Origem"],
    phrase: "A vida onde os ricos dormem.",
    audio: "/audio/inception.mp3",
  },
  {
    id: 27,
    title: [
      "Indiana Jones e os Caçadores da Arca Perdida",
      "Raiders of the Lost Ark",
      "Indiana Jones",
    ],
    phrase: "Sem ele, a história ainda seria a mesma?",
    audio: "/audio/indianajones.mp3",
  },
  {
    id: 28,
    title: ["Interestelar", "Interstellar", "Interstelar"],
    phrase: "Aconteceu o mesmo desastre climático nos EUA em 1930.",
    audio: "/audio/interstellar.mp3",
  },
  {
    id: 29,
    title: [
      "Jurassic Park: Parque dos Dinossauros",
      "Jurassic Park",
      "Parque dos Dinossauros",
    ],
    phrase: "Rã + Mosquito = Tiranossauro?",
    audio: "/audio/jurassicpark.mp3",
  },
  {
    id: 30,
    title: ["Cidade de Deus", "City of God"],
    phrase: "Pega a galinha aí, cumpade!!!",
    audio: "/audio/cidadedeus.mp3",
  },
  {
    id: 31,
    title: [
      "E o Vento Levou",
      "Gone with the Wind",
      "O vento levou",
      "Vento Levou",
    ],
    phrase: "Filme a cores mais velho que a vó.",
    audio: "/audio/oventolevou.mp3",
  },
  {
    id: 32,
    title: [
      "A Ponte do Rio Kwai",
      "The Bridge on the River Kwai",
      "Ponte do Rio Kwai",
    ],
    phrase: "Se você é velho, você lembra do Faustão.",
    audio: "/audio/ponteriokwai.mp3",
  },
  {
    id: 33,
    title: [
      "O Último dos Moicanos",
      "The Last of the Mohicans",
      "Último dos Moicanos",
    ],
    phrase: "Daqui surgiu a expressão 'ser o último dos moicanos'.",
    audio: "/audio/ultiimodosmoicanos.mp3",
  },
  {
    id: 34,
    title: ["Up: Altas Aventuras", "Up", "Altas Aventuras"],
    phrase:
      "'Sr. Wilson?' ou 'Cachorro idiota', de qual frase você se lembra mais?",
    audio: "/audio/up.mp3",
  },
  {
    id: 35,
    title: [
      "A Vida é Bela",
      "La Vita è Bella",
      "Life is Beautiful",
      "Vida é Bela",
    ],
    phrase: "Buongiorno Principessa.",
    audio: "/audio/vidaebela.mp3",
  },
  {
    id: 36,
    title: ["Os Vingadores", "The Avengers", "Vingadores"],
    phrase: "Vingadores... Avante!",
    audio: "/audio/vingadores.mp3",
  },
  {
    id: 37,
    title: ["Tubarão", "Jaws", "Tubarao"],
    phrase:
      "Se você tem mais de 35 anos, definitivamente tinha medo de tubarão na praia!",
    audio: "/audio/tubarao.mp3",
  },
  {
    id: 38,
    title: ["007", "James Bond"],
    phrase: "O agente só ficou loiro em 2005.",
    audio: "/audio/007.mp3",
  },
  {
    id: 39,
    title: [
      "Meu Tio Matou um Cara",
      "My Uncle Killed a Guy",
      "Tio matou um cara",
    ],
    phrase: "Spoiler: ele não matou um cara.",
    audio: "/audio/sorayaqueima.mp3",
  },
  {
    id: 40,
    title: ["Kung Fu Panda", "Kung Fu Panda's", "Kung Fu Pandas"],
    phrase: "...e é por isso que se chama presente!",
    audio: "/audio/kongfupanda.mp3",
  },
  {
    id: 41,
    title: [
      "Velozes e Furiosos",
      "The Fast and the Furious",
      "Fast and Furious",
      "Velozes e Furiosos",
    ],
    phrase: "Era corrida de carros e agora é o quê?",
    audio: "/audio/velozesfuriosos.mp3",
  },
  {
    id: 42,
    title: ["Transformers", "Transformers", "Transformers"],
    phrase: "A trilha sonora era boa, mas o meme é sensacional.",
    audio: "/audio/transformers.mp3",
  },
  {
    id: 43,
    title: ["Toy Story", "Toy Story"],
    phrase: "O garfinho foi animado por um brasileiro.",
    audio: "/audio/toystory.mp3",
  },
  {
    id: 44,
    title: ["Top Gun: Ases Indomáveis", "Top Gun", "Ases Indomáveis"],
    phrase: "Homens bombados, óculos de sol, avião e vôlei na praia de jeans.",
    audio: "/audio/topgun.mp3",
  },
  {
    id: 45,
    title: [
      "O Senhor dos Anéis",
      "The Lord of the Rings",
      "Lord of the Rings",
      "Senhor dos Aneis",
    ],
    phrase:
      "'Tudo o que temos de decidir é o que fazer com o tempo que nos é dado.' (Gandalf)",
    audio: "/audio/senhoraneis.mp3",
  },
  {
    id: 46,
    title: [
      "Réquiem para um Sonho",
      "Requiem for a Dream",
      "Réquiem para um sonho",
    ],
    phrase: "Crianças, não usem drogas!",
    audio: "/audio/requiemDream.mp3",
  },
  {
    id: 47,
    title: ["Mortal Kombat", "Mortal Kombat", "Combate Mortal"],
    phrase: "Sub-Zero, Sub-Zero, eu escolhia o Sub-Zero.",
    audio: "/audio/mk.mp3",
  },
  {
    id: 48,
    title: ["Madagascar", "Madagascar", "Madagaskar"],
    phrase: "Eu sei que você cantou quando ouviu!",
    audio: "/audio/madagascar.mp3",
  },
  {
    id: 49,
    title: ["Kill Bill", "Kill Bill", "KillBill"],
    phrase: "Tarantino arrasou neste!",
    audio: "/audio/killbill.mp3",
  },
  {
    id: 50,
    title: ["Homem de Ferro", "Iron Man", "Ironman"],
    phrase: "Playboy, filantropo, bilionário e Homem de Ferro.",
    audio: "/audio/ironman.mp3",
  },
  {
    id: 51,
    title: [
      "Intocáveis",
      "The Intouchables",
      "Intouchables",
      "Intocáveis",
      "Intouchables",
      "Untouchable",
    ],
    phrase: "Ele é forte, troca minhas meias e não tem pena.",
    audio: "/audio/intocaveis.mp3",
  },
  {
    id: 52,
    title: ["Frozen: Uma Aventura Congelante", "Frozen", "Frozen", "lerigo"],
    phrase: "Eu sei que você também cantou essa!",
    audio: "/audio/frozen.mp3",
  },
  {
    id: 53,
    title: ["Footloose", "Footloose", "Footloose"],
    phrase:
      "Ainda vigorava a lei em 1980 na cidade de Elmore, Oklahoma, onde era proibido dançar.",
    audio: "/audio/footloose.mp3",
  },
  {
    id: 54,
    title: ["Flashdance", "Flashdance", "Flash Dance"],
    phrase: "A dança da cadeira e balde de água na cabeça.",
    audio: "/audio/flashdance.mp3",
  },
  {
    id: 55,
    title: ["O Exorcista", "The Exorcist", "Exorcist", "Exorcista"],
    phrase: "Rodou a cabeça!",
    audio: "/audio/exorcista.mp3",
  },
  {
    id: 56,
    title: [
      "Os Embalos de Sábado à Noite",
      "Saturday Night Fever",
      "Embalos de Sábado a noite",
    ],
    phrase: "O filme onde eternizou o disco dance!",
    audio: "/audio/embalossabado.mp3",
  },
  {
    id: 57,
    title: [
      "2 Filhos de Francisco",
      "2 Filhos de Francisco",
      "Dois Filhos de Francisco",
      "Filhos de francisco",
    ],
    phrase: "Já tomou seu ovo cru hoje?",
    audio: "/audio/doisfilhofrancisco.mp3",
  },
  {
    id: 58,
    title: ["Dirty Dancing", "Dirty Dancing", "Dirty Dancing"],
    phrase: "Sempre tem acidentes em casamentos quando toca essa música.",
    audio: "/audio/dirtydancing.mp3",
  },
  {
    id: 59,
    title: ["Deadpool", "Deadpool", "Deadpool"],
    phrase: "Bye bye bye também é boa, mas essa aqui é a cara dele!",
    audio: "/audio/deadpool.mp3",
  },
  {
    id: 60,
    title: ["Crepúsculo", "Twilight", "Crepusculo"],
    phrase: "Você é time livro ou time filme?",
    audio: "/audio/crepusculo.mp3",
  },
  {
    id: 61,
    title: ["Blade: O Caçador de Vampiros", "Blade", "Blade"],
    phrase: "Merece um crossover com Crepúsculo?",
    audio: "/audio/blade.mp3",
  },
  {
    id: 62,
    title: [
      "2001: Uma Odisseia no Espaço",
      "2001: A Space Odyssey",
      "2001",
      "Odisseia no espaco",
    ],
    phrase: "IA e evolução humana debatidos em 1968.",
    audio: "/audio/2001.mp3",
  },
];

// Crie um brasão cartunesco com um pequeno abajur articulado de mesa, com corpo metálico e design minimalista no formato de jogos online, no estilo da imagem de referência com o fundo completamente branco e o texto "Fanáticos das Animações"
// Crie um brasão cartunesco com a cabeca de hans zimmer no formato de jogos online, no estilo da imagem de referência om o fundo completamente branco
export const TROPHIES: Trophy[] = [
  {
    id: "steven",
    name: "Steven Spielberg",
    image: "/images/steventrophy.png",
    required: [14, 17, 27, 29, 37],
    colors: {
      bg: "#fef9c3",
      bgD: "#3a2e00",
      border: "#eab308",
      glow: "#facc15",
      text: "#78350f",
    },
  },
  {
    id: "hans",
    name: "Hans Zimmer",
    image: "/images/hansZImmer.png",
    required: [1, 5, 18, 25, 26, 28, 41, 59],
    colors: {
      bg: "#e0f2fe",
      bgD: "#0c2a4a",
      border: "#0ea5e9",
      glow: "#38bdf8",
      text: "#0c4a6e",
    },
  },
  {
    id: "brazuka",
    name: "Cinema Brazuka",
    image: "/images/brazuka.png",
    required: [12, 16, 30, 39, 57],
    colors: {
      bg: "#fff7ed",
      bgD: "#2a1000",
      border: "#f97316",
      glow: "#fb923c",
      text: "#7c2d12",
    },
  },
  {
    id: "johnW",
    name: "John Williams",
    image: "/images/johnwillians.png",
    required: [2, 14, 15, 18, 27, 29, 36],
    colors: {
      bg: "#f3e8ff",
      bgD: "#2a1040",
      border: "#a855f7",
      glow: "#c084fc",
      text: "#581c87",
    },
  },
  {
    id: "oldbutgold",
    name: "Old but Gold - Filmes com mais de 50 anos",
    image: "/images/oldButGold.png",
    required: [29, 10, 31, 32, 33, 37, 55, 62],
    colors: {
      bg: "#dcfce7",
      bgD: "#0a2010",
      border: "#22c55e",
      glow: "#4ade80",
      text: "#14532d",
    },
  },
  {
    id: "animations",
    name: "Fanáticos das Animações",
    image: "/images/animations.png",
    required: [23, 34, 40, 43, 48, 52],
    colors: {
      bg: "#fef9c3",
      bgD: "#2a2000",
      border: "#eab308",
      glow: "#facc15",
      text: "#1e3a8a",
    },
  },
  {
    id: "winners",
    name: "Ganhadores de 11 Oscares",
    image: "/images/titanic.png",
    required: [19, 45],
    colors: {
      bg: "#fee2e2",
      bgD: "#3a0a0a",
      border: "#ef4444",
      glow: "#f87171",
      text: "#7f1d1d",
    },
  },
  {
    id: "heroes",
    name: "Mestres dos Super-Heróis",
    image: "/images/superherois.png",
    required: [15, 18, 36, 50, 59],
    colors: {
      bg: "#fff7ed",
      bgD: "#2a1000",
      border: "#f97316",
      glow: "#fb923c",
      text: "#7c2d12",
    },
  },
  {
    id: "dance",
    name: "Dance Dance Dance",
    image: "/images/dancedancedance.png",
    required: [53, 54, 56, 58],
    colors: {
      bg: "#fff7ed",
      bgD: "#2a1000",
      border: "#f97316",
      glow: "#fb923c",
      text: "#7c2d12",
    },
  },
  {
    id: "horror",
    name: "Horror Story",
    image: "/images/horrorstory.png",
    required: [10, 55],
    colors: {
      bg: "#fee2e2",
      bgD: "#3a0a0a",
      border: "#ef4444",
      glow: "#f87171",
      text: "#7f1d1d",
    },
  },
  {
    id: "books",
    name: "Books",
    image: "/images/booksandmovies.png",
    required: [
      2, 3, 5, 8, 9, 10, 13, 14, 17, 18, 19, 20, 24, 25, 27, 29, 31, 32, 33, 35,
      36, 37, 45, 46, 50, 60,
    ],
    colors: {
      bg: "#fef9c3",
      bgD: "#3a2e00",
      border: "#eab308",
      glow: "#facc15",
      text: "#78350f",
    },
  },
  {
    id: "master",
    name: "Master Movie",
    image: "/images/mastermovie.png",
    required: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
      58, 59, 60, 61, 62,
    ],
    colors: {
      bg: "#f3e8ff",
      bgD: "#2a1040",
      border: "#a855f7",
      glow: "#c084fc",
      text: "#581c87",
    },
  },
];
