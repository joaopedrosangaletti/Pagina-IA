const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [
{
enunciado: "Qual foi o campeão da copa do mundo de 2014?",
alternativas: [
{
texto:"Argentina.",
afirmacao:"afirmação"
},
{
texto:"Alemanha.",
afirmacao:"afirmação."

}
]

},
{
enunciado: "qual time é o maior do sul?",
alternativas: [
{
texto:"Grêmio",
afirmacao:"afirmação"
},
{
texto:"Internacional",
afirmacao:"afirmação."

}
]

},
{
enunciado: "Qual time mais tem titulos no Brasil.",
alternativas: [
{
texto:"Flamengo, Grêmio, Palmeiras .",
afirmacao:"afirmação"
},
{
texto:"Argentina, Internacional, Vasco.",
afirmacao:"afirmação."

}
]


},
{
enunciado: "Qual foi a primeira seleção campeã da copa do mundo?",
alternativas: [
{
texto:"Italia.",
afirmacao:"afirmação"
},
{
texto:"uruguai.",
afirmacao:"afirmação"

}
]

}

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
if(atual >= perguntas.length){
mostraResultado();
return
}
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
caixaAlternativas.textContent = "";
mostraAlternativas();
}

function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas){
const botaoAlternativas = document.createElement("button");
botaoAlternativas.textContent = alternativa.texto;
botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opcaoSelecionada){
atual++;
mostraPergunta();
const afirmacoes = opcaoSelecionada
}
function mostraResultado(){
caixaPerguntas.textContent = "Futebol é conciderado como um instrumento de socialização. Além disso, é considerado um instrumento de relacionamento social extremamente valioso que permite ao praticante revelar suas intenções, expressar seus sentimentos, construindo estratégias e criando códigos para que possam atingir os objetivos.";
textoResultados.textContent = historiaFinal += afirmacoes + " ";
caixaAlternativas.textContent = "";
}
mostraPergunta();