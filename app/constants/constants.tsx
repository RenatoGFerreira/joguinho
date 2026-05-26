import { Song, Trophy } from "../types/types";

export const SONGS: Song[] = [
  {
    id: 1,
    title: [
      "Missão: Impossível",
      "Missao Impossivel",
      "A Missão Impossível",
      "Mission Impossible",
      "Impossible Mission",
    ],
    phrase: "Até correndo o cara é bonito!",
    audio: "/audio/missaoImpossivel.mp3",
  },
  {
    id: 2,
    title: [
      "Star Wars",
      "Guerra nas Estrelas",
      "A Guerra nas Estrelas",
    ],
    phrase: "I am your father!!!",
    audio: "/audio/star.mp3",
  },
  {
    id: 3,
    title: [
      "Harry Potter",
      "O Harry Potter",
    ],
    phrase: "Lufa-Lufa é a casa mais chata!!!",
    audio: "/audio/harrypotter.mp3",
  },
  {
    id: 4,
    title: [
      "A Pantera Cor de Rosa",
      "Pantera Cor de Rosa",
      "Pantera Cor-de-rosa",
      "A Pantera Cor-de-rosa",
      "Pink Panther",
      "The Pink Panther",
    ],
    phrase: "Meu charme já vem com trilha sonora.",
    audio: "/audio/pantera.mp3",
  },
  {
    id: 5,
    title: [
      "Piratas do Caribe",
      "Os Piratas do Caribe",
      "Pirates of the Caribbean",
    ],
    phrase:
      "'Você é, sem dúvida, o pior pirata de que já ouvi falar.' (Comodoro Norrington)",
    audio: "/audio/piratasdocaribe.mp3",
  },
  {
    id: 6,
    title: [
      "Rocky",
      "Rocky Balboa",
    ],
    phrase: "De 0 a 10, esse filme é 11.",
    audio: "/audio/rocky.mp3",
  },
  {
    id: 7,
    title: [
      "Simpsons",
      "Os Simpsons",
      "The Simpsons",
    ],
    phrase:
      "'A culpa é minha e eu coloco ela em quem eu quiser!' (Homer Simpson)",
    audio: "/audio/simpsons.mp3",
  },
  {
    id: 8,
    title: [
      "Titanic",
      "O Titanic",
    ],
    phrase: "Eu sei e vc sabe, cabiam os dois ali!!!",
    audio: "/audio/titanic.mp3",
  },
  {
    id: 9,
    title: [
      "Tres Homens em Conflito",
      "Três Homens em Conflito",
      "O Bom o Mau e o Feio",
      "Bom Mau e Feio",
      "The Good the Bad and the Ugly",
    ],
    phrase: "Todo mundo já ouviu mas poucos já viram o filme!",
    audio: "/audio/treshomensconflito.mp3",
  },
  {
    id: 10,
    title: [
      "Psicose",
      "A Psicose",
      "Psycho",
    ],
    phrase: "Você confundiu com Halloween, acertei?",
    audio: "/audio/psicose.mp3",
  },
  {
    id: 11,
    title: [
      "La La Land",
      "Lalaland",
      "LaLaLand",
    ],
    phrase: "Foi só eu que não gostei do final?",
    audio: "/audio/lalaland.mp3",
  },
  {
    id: 12,
    title: [
      "Tubarão",
      "Tubarao",
      "O Tubarão",
      "Jaws",
    ],
    phrase:
      "Se você tem mais de 35, definitivamente tinha medo de tubarão na praia!",
    audio: "/audio/tubarao.mp3",
  },
  {
    id: 13,
    title: [
      "Poderoso Chefão",
      "Poderoso Chefao",
      "O Poderoso Chefão",
      "The Godfather",
    ],
    phrase: "Duvido achar 5 pessoas que já viram todos!",
    audio: "/audio/poderosochefao.mp3",
  },
  {
    id: 14,
    title: [
      "ET",
      "E.T.",
      "E.T",
      "ET O Extraterrestre",
      "E.T. the Extra-Terrestrial",
    ],
    phrase: "Dedo com luz!",
    audio: "/audio/et.mp3",
  },
  {
    id: 15,
    title: [
      "Superman",
      "Super-Homem",
      "Super Homem",
      "O Super-Homem",
    ],
    phrase: "Sou indestrutivel exceto por uma boa pedrada.",
    audio: "/audio/superma.mp3",
  },
  {
    id: 16,
    title: [
      "007",
      "James Bond",
      "O James Bond",
    ],
    phrase: "O agente só ficou loiro em 2005.",
    audio: "/audio/007.mp3",
  },
  {
    id: 17,
    title: [
      "Lista de Schindler",
      "Lista de Shindler",
      "A Lista de Schindler",
      "Schindler's List",
      "Shindlers List",
    ],
    phrase: "Escorreu uma lágrima aqui.",
    audio: "/audio/listashindler.mp3",
  },
  {
    id: 18,
    title: [
      "Batman",
      "Batman O Cavaleiro das Trevas",
      "Cavaleiro das Trevas",
      "Dark Knight",
      "The Dark Knight",
    ],
    phrase: "Se você for rico você pode ser um superheroi... ou não!",
    audio: "/audio/batmandarkknight.mp3",
  },
  {
    id: 19,
    title: [
      "Ben Hur",
      "Ben-Hur",
    ],
    phrase: "O primeiro filme com 11 oscares.",
    audio: "/audio/benhur.mp3",
  },
  {
    id: 20,
    title: [
      "Amelie Poulain",
      "Amélie Poulain",
      "O Fabuloso Destino de Amélie Poulain",
      "Fabuloso Destino de Amelie Poulain",
      "Amelie",
    ],
    phrase: "A vida é bela apesar de tudo.",
    audio: "/audio/ameliepolan.mp3",
  },
  {
    id: 21,
    title: [
      "Carruagem de Fogo",
      "Carruagens de Fogo",
      "Chariots of Fire",
    ],
    phrase: "Uma música que saiu do filme para a gloria.",
    audio: "/audio/carruagemfogo.mp3",
  },
  {
    id: 22,
    title: [
      "De Volta para o Futuro",
      "O De Volta para o Futuro",
      "Back to the Future",
    ],
    phrase: "Cadê os skates voadores de 2025?",
    audio: "/audio/devoltafuturo.mp3",
  },
  {
    id: 23,
    title: [
      "Divertidamente",
      "Divertida Mente",
      "Inside Out",
    ],
    phrase: "Bing bong meu amigo pra brincar...",
    audio: "/audio/divertidamente.mp3",
  },
  {
    id: 24,
    title: [
      "Forrest Gump",
      "O Forrest Gump",
    ],
    phrase: "Run forrest, RUUUNNN!!!",
    audio: "/audio/forrestgump.mp3",
  },
  {
    id: 25,
    title: [
      "Gladiador",
      "O Gladiador",
      "Gladiator",
    ],
    phrase: "Maximus Décimus Meridius!!!",
    audio: "/audio/gladiador.mp3",
  },
  {
    id: 26,
    title: [
      "Inception",
      "Origem",
      "A Origem",
    ],
    phrase: "A vida onde os ricos dormem.",
    audio: "/audio/inception.mp3",
  },
  {
    id: 27,
    title: [
      "Indiana Jones",
      "Os Caçadores da Arca Perdida",
      "Raiders of the Lost Ark",
    ],
    phrase: "Sem ele a história ainda seria a mesma?",
    audio: "/audio/indianajones.mp3",
  },
  {
    id: 28,
    title: [
      "Interestelar",
      "Interstellar",
    ],
    phrase: "Aconteceu o mesmo desastre climático nos EUA em 1930.",
    audio: "/audio/interstellar.mp3",
  },
  {
    id: 29,
    title: [
      "Jurassic Park",
      "Parque dos Dinossauros",
      "O Parque dos Dinossauros",
    ],
    phrase: "Rã + Mosquito = Tiranossauro?",
    audio: "/audio/jurassicpark.mp3",
  },
  {
    id: 30,
    title: [
      "Kung Fu Panda",
      "O Kung Fu Panda",
    ],
    phrase: "... e é por isso que se chama presente!",
    audio: "/audio/kongfupanda.mp3",
  },
  {
    id: 31,
    title: [
      "E o Vento Levou",
      "O Vento Levou",
      "Vento Levou",
      "Gone with the Wind",
    ],
    phrase: "Filme a cores mais velho que a vó.",
    audio: "/audio/oventolevou.mp3",
  },
  {
    id: 32,
    title: [
      "Ponte do Rio Kwai",
      "A Ponte do Rio Kwai",
      "Bridge on the River Kwai",
      "The Bridge on the River Kwai",
    ],
    phrase: "Se você é velho você lembra do Faustão.",
    audio: "/audio/ponteriokwai.mp3",
  },
  {
    id: 33,
    title: [
      "Último dos Moicanos",
      "Ultimo dos Moicanos",
      "O Último dos Moicanos",
      "Last of the Mohicans",
      "The Last of the Mohicans",
    ],
    phrase: "Daqui surgiu a expressão 'ser o último dos moicanos'.",
    audio: "/audio/ultiimodosmoicanos.mp3",
  },
  {
    id: 34,
    title: [
      "Up",
      "Up Altas Aventuras",
    ],
    phrase: "'Sr Wilson?' ou 'Cachorro idiota' de qual frase você lembra mais?",
    audio: "/audio/up.mp3",
  },
  {
    id: 35,
    title: [
      "A Vida é Bela",
      "Vida é Bela",
      "Life is Beautiful",
      "La Vita è Bella",
    ],
    phrase: "Buongiorno Principesa.",
    audio: "/audio/vidaebela.mp3",
  },
  {
    id: 36,
    title: [
      "Vingadores",
      "Os Vingadores",
      "Avengers",
      "The Avengers",
    ],
    phrase: "Vingadores... Avante!",
    audio: "/audio/vingadores.mp3",
  },
];

export const TROPHIES: Trophy[] = [
  {
    id: "mickey",
    name: "Steven Spielberg",
    required: [12, 14, 17, 27, 29],
    // required: [1],
    colors: {
      bg: "#fef9c3",
      bgD: "#3a2e00",
      border: "#eab308",
      glow: "#facc15",
      text: "#78350f",
    },
    icon: (active, dark) => (
      <svg viewBox="0 0 60 60" width="40" height="40">
        <rect
          x="10"
          y="18"
          width="40"
          height="28"
          rx="4"
          fill={active ? "#111" : dark ? "#333" : "#ccc"}
        />
    
        <rect
          x="10"
          y="10"
          width="40"
          height="10"
          rx="2"
          fill={active ? "#eab308" : dark ? "#444" : "#ddd"}
        />
    
        <line x1="18" y1="10" x2="24" y2="20" stroke="#000" strokeWidth="2"/>
        <line x1="30" y1="10" x2="36" y2="20" stroke="#000" strokeWidth="2"/>
        <line x1="42" y1="10" x2="48" y2="20" stroke="#000" strokeWidth="2"/>
    
        <polygon
          points="30,26 33,33 40,33 34,37 36,44 30,40 24,44 26,37 20,33 27,33"
          fill={active ? "#facc15" : dark ? "#666" : "#aaa"}
        />
      </svg>
    )
  },
  {
    id: "buzz",
    name: "Hans Zimmer",
    required: [5, 18, 25, 26, 28],
    // required: [1],
    colors: {
      bg: "#e0f2fe",
      bgD: "#0c2a4a",
      border: "#0ea5e9",
      glow: "#38bdf8",
      text: "#0c4a6e",
    },
    icon: (active, dark) => (
      <svg viewBox="0 0 60 60" width="40" height="40">
    
        <circle
          cx="30"
          cy="18"
          r="8"
          fill={active ? "#38bdf8" : dark ? "#555" : "#bbb"}
        />
    
        <rect
          x="24"
          y="26"
          width="12"
          height="16"
          rx="4"
          fill={active ? "#0ea5e9" : dark ? "#444" : "#ccc"}
        />
    
        <line
          x1="36"
          y1="24"
          x2="50"
          y2="12"
          stroke={active ? "#facc15" : dark ? "#888" : "#999"}
          strokeWidth="3"
        />
    
        <path
          d="M 12 40 Q 20 30 28 40"
          stroke={active ? "#38bdf8" : dark ? "#666" : "#aaa"}
          strokeWidth="2"
          fill="none"
        />
    
        <path
          d="M 32 40 Q 40 30 48 40"
          stroke={active ? "#38bdf8" : dark ? "#666" : "#aaa"}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    )
  },
  {
    id: "pernalonga",
    name: "John Williams",
    required: [2, 3, 12, 14, 15, 27, 29],
    colors: {
      bg: "#f3e8ff",
      bgD: "#2a1040",
      border: "#a855f7",
      glow: "#c084fc",
      text: "#581c87",
    },
    icon: (active, dark) => (
      <svg viewBox="0 0 60 60" width="40" height="40">
        <ellipse
          cx="22"
          cy="16"
          rx="6"
          ry="14"
          fill={active ? "#f3e8ff" : dark ? "#333" : "#ccc"}
        />
        <ellipse
          cx="38"
          cy="16"
          rx="6"
          ry="14"
          fill={active ? "#f3e8ff" : dark ? "#333" : "#ccc"}
        />
        <ellipse
          cx="22"
          cy="13"
          rx="3"
          ry="10"
          fill={active ? "#f9a8d4" : dark ? "#2a2a2a" : "#bbb"}
        />
        <ellipse
          cx="38"
          cy="13"
          rx="3"
          ry="10"
          fill={active ? "#f9a8d4" : dark ? "#2a2a2a" : "#bbb"}
        />
        <ellipse
          cx="30"
          cy="40"
          rx="18"
          ry="16"
          fill={active ? "#f3e8ff" : dark ? "#3a3a3a" : "#ddd"}
        />
        <circle
          cx="24"
          cy="37"
          r="3"
          fill={active ? "#111" : dark ? "#666" : "#aaa"}
        />
        <circle
          cx="36"
          cy="37"
          r="3"
          fill={active ? "#111" : dark ? "#666" : "#aaa"}
        />
        <ellipse
          cx="30"
          cy="43"
          rx="6"
          ry="3"
          fill={active ? "#f9a8d4" : dark ? "#333" : "#bbb"}
        />
        <circle
          cx="30"
          cy="41"
          r="2"
          fill={active ? "#f43f5e" : dark ? "#444" : "#aaa"}
        />
      </svg>
    ),
  },
  {
    id: "shrek",
    name: "Old but Gold - Filmes com mais de 40 anos",
    required: [2, 4, 6, 9, 10, 12, 13, 14, 15, 19, 31, 32],
    colors: {
      bg: "#dcfce7",
      bgD: "#0a2010",
      border: "#22c55e",
      glow: "#4ade80",
      text: "#14532d",
    },
    icon: (active, dark) => (
      <svg viewBox="0 0 60 60" width="40" height="40">
        <ellipse
          cx="30"
          cy="36"
          rx="22"
          ry="20"
          fill={active ? "#65a30d" : dark ? "#333" : "#ccc"}
        />
        <ellipse
          cx="30"
          cy="28"
          rx="18"
          ry="16"
          fill={active ? "#84cc16" : dark ? "#3a3a3a" : "#ddd"}
        />
        <ellipse
          cx="18"
          cy="16"
          rx="5"
          ry="7"
          fill={active ? "#65a30d" : dark ? "#333" : "#bbb"}
        />
        <ellipse
          cx="42"
          cy="16"
          rx="5"
          ry="7"
          fill={active ? "#65a30d" : dark ? "#333" : "#bbb"}
        />
        <circle
          cx="23"
          cy="28"
          r="4"
          fill={active ? "#fff" : dark ? "#555" : "#aaa"}
        />
        <circle
          cx="37"
          cy="28"
          r="4"
          fill={active ? "#fff" : dark ? "#555" : "#aaa"}
        />
        <circle
          cx="24"
          cy="28"
          r="2.5"
          fill={active ? "#1a2e1a" : dark ? "#333" : "#888"}
        />
        <circle
          cx="38"
          cy="28"
          r="2.5"
          fill={active ? "#1a2e1a" : dark ? "#333" : "#888"}
        />
        <path
          d="M 23 38 Q 30 44 37 38"
          stroke={active ? "#4a7c10" : dark ? "#444" : "#aaa"}
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    id: "donald",
    name: "Animações",
    required: [7, 23, 30, 34],
    colors: {
      bg: "#fef9c3",
      bgD: "#2a2000",
      border: "#eab308",
      glow: "#facc15",
      text: "#1e3a8a",
    },
    icon: (active, dark) => (
      <svg viewBox="0 0 60 60" width="40" height="40">
        <ellipse
          cx="30"
          cy="36"
          rx="20"
          ry="18"
          fill={active ? "#fff" : dark ? "#333" : "#ccc"}
        />
        <circle
          cx="30"
          cy="20"
          r="13"
          fill={active ? "#fff" : dark ? "#3a3a3a" : "#ddd"}
        />
        <path
          d="M 15 24 Q 10 20 8 26 Q 10 30 18 28 Z"
          fill={active ? "#facc15" : dark ? "#444" : "#bbb"}
        />
        <rect
          x="12"
          y="48"
          width="7"
          height="5"
          rx="2"
          fill={active ? "#facc15" : dark ? "#444" : "#bbb"}
        />
        <rect
          x="41"
          y="48"
          width="7"
          height="5"
          rx="2"
          fill={active ? "#facc15" : dark ? "#444" : "#bbb"}
        />
        <circle
          cx="25"
          cy="19"
          r="2"
          fill={active ? "#111" : dark ? "#555" : "#aaa"}
        />
        <circle
          cx="37"
          cy="19"
          r="2"
          fill={active ? "#111" : dark ? "#555" : "#aaa"}
        />
        <rect
          x="14"
          y="30"
          width="32"
          height="14"
          rx="6"
          fill={active ? "#1d4ed8" : dark ? "#2a2a2a" : "#bbb"}
        />
        <ellipse
          cx="30"
          cy="30"
          rx="8"
          ry="4"
          fill={active ? "#facc15" : dark ? "#3a3a00" : "#ddd"}
        />
      </svg>
    ),
  },
  {
    id: "powerranger",
    name: "Ganhadores de 11 Oscares",
    required: [8, 19],
    colors: {
      bg: "#fee2e2",
      bgD: "#3a0a0a",
      border: "#ef4444",
      glow: "#f87171",
      text: "#7f1d1d",
    },
    icon: (active, dark) => (
      <svg viewBox="0 0 60 60" width="40" height="40">
    
        <circle
          cx="30"
          cy="14"
          r="6"
          fill={active ? "#facc15" : dark ? "#666" : "#bbb"}
        />
    
        <rect
          x="24"
          y="20"
          width="12"
          height="18"
          rx="5"
          fill={active ? "#eab308" : dark ? "#555" : "#aaa"}
        />
    
        <rect
          x="20"
          y="38"
          width="20"
          height="6"
          rx="2"
          fill={active ? "#ca8a04" : dark ? "#444" : "#999"}
        />
    
        <rect
          x="16"
          y="44"
          width="28"
          height="6"
          rx="2"
          fill={active ? "#854d0e" : dark ? "#333" : "#777"}
        />
      </svg>
    )
  },
  {
    id: "streetfighter",
    name: "Super-herois",
    required: [15, 18, 36],
    colors: {
      bg: "#fff7ed",
      bgD: "#2a1000",
      border: "#f97316",
      glow: "#fb923c",
      text: "#7c2d12",
    },
    icon: (active, dark) => (
      <svg viewBox="0 0 60 60" width="40" height="40">
        <rect
          x="10"
          y="8"
          width="40"
          height="44"
          rx="6"
          fill={active ? "#1d4ed8" : dark ? "#333" : "#ccc"}
        />
        <rect
          x="14"
          y="12"
          width="32"
          height="36"
          rx="4"
          fill={active ? "#2563eb" : dark ? "#3a3a3a" : "#ddd"}
        />
        <circle
          cx="30"
          cy="24"
          r="8"
          fill={active ? "#fde68a" : dark ? "#444" : "#bbb"}
        />
        <circle
          cx="27"
          cy="22"
          r="2"
          fill={active ? "#111" : dark ? "#666" : "#999"}
        />
        <circle
          cx="33"
          cy="22"
          r="2"
          fill={active ? "#111" : dark ? "#666" : "#999"}
        />
        <path
          d="M 26 28 Q 30 31 34 28"
          stroke={active ? "#111" : dark ? "#555" : "#aaa"}
          strokeWidth="1.5"
          fill="none"
        />
        <rect
          x="18"
          y="36"
          width="10"
          height="8"
          rx="3"
          fill={active ? "#ef4444" : dark ? "#333" : "#bbb"}
        />
        <rect
          x="32"
          y="36"
          width="10"
          height="8"
          rx="3"
          fill={active ? "#ef4444" : dark ? "#333" : "#bbb"}
        />
        <rect
          x="16"
          y="32"
          width="28"
          height="6"
          rx="2"
          fill={active ? "#facc15" : dark ? "#2a2a00" : "#ddd"}
        />
      </svg>
    ),
  },
];
