const perguntas = [
  {
    enunciado: "Ao encontrar uma IA que pode criar textos, imagens e sons, qual é sua primeira impressão?",
    alternativas: [
      {
        texto: "Isso é preocupante!",
        afirmacao: "Você se sentiu inseguro sobre as implicações dessa tecnologia."
      },
      {
        texto: "Isso é incrível!",
        afirmacao: "Você ficou animado para explorar as possibilidades da IA."
      }
    ]
  },
  {
    enunciado: "Você recebe um projeto sobre IA na escola. O que faz?",
    alternativas: [
      {
        texto: "Utilizo uma IA para auxiliar na pesquisa e na apresentação.",
        afirmacao: "Aprendeu a integrar a IA como uma ferramenta de aprendizado."
      },
      {
        texto: "Realizo a pesquisa com base em minhas próprias fontes e conhecimento.",
        afirmacao: "Confiou em sua capacidade de pesquisa e análise."
      }
    ]
  },
  {
    enunciado: "Durante uma discussão sobre IA e o futuro do emprego, qual é sua opinião?",
    alternativas: [
      {
        texto: "A IA traz novas oportunidades e potencializa habilidades humanas.",
        afirmacao: "Você acredita na inovação e na adaptação às novas realidades."
      },
      {
        texto: "A IA pode ameaçar empregos e é necessário proteger os trabalhadores.",
        afirmacao: "Você se envolveu em debates sobre o uso responsável da IA."
      }
    ]
  },
  {
    enunciado: "Você precisa criar uma arte que represente sua visão sobre IA. O que faz?",
    alternativas: [
      {
        texto: "Utilizo um software de design como o GIMP ou Illustrator.",
        afirmacao: "Compartilhou suas habilidades artísticas com os colegas."
      },
      {
        texto: "Recorro a um gerador de arte com IA.",
        afirmacao: "Demonstrou como a IA pode ser uma aliada na criatividade."
      }
    ]
  },
  {
    enunciado: "Seu grupo utiliza um texto gerado pela IA sem modificações. O que você faz?",
    alternativas: [
      {
        texto: "Aceito o texto, pois considero que a criação já foi um esforço.",
        afirmacao: "Você se tornou dependente da IA e perdeu parte da sua originalidade."
      },
      {
        texto: "Revisito o texto e adiciono minhas próprias ideias.",
        afirmacao: "Usou a IA como uma ferramenta, mantendo sua voz única."
      }
    ]
  }
];

let indice = 0;
let historia = "";

const elPergunta = document.getElementById("pergunta");
const elOpcoes = document.getElementById("opcoes");
const elResultado = document.getElementById("resultado");
const elTextoFinal = document.getElementById("textoFinal");

function mostrarPergunta() {
  if (indice >= perguntas.length) {
    mostrarResultado();
    return;
  }
  const atual = perguntas[indice];
  elPergunta.textContent = atual.enunciado;
  elOpcoes.innerHTML = "";
  atual.alternativas.forEach(alternativa => {
    const btn = document.createElement("button");
    btn.textContent = alternativa.texto;
    btn.onclick = () => selecionarResposta(alternativa);
    elOpcoes.appendChild(btn);
  });
}

function selecionarResposta(alternativa) {
  historia += alternativa.afirmacao + " ";
  indice++;
  mostrarPergunta();
}

function mostrarResultado() {
  elPergunta.textContent = "";
  elOpcoes.innerHTML = "";
  elResultado.classList.remove("escondido");
  elTextoFinal.textContent = historia.trim();
}

mostrarPergunta();
