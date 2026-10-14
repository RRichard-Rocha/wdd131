let numAvaliacoes = Number(localStorage.getItem("contadorAvaliacoes-ls")) || 0;

numAvaliacoes++;

localStorage.setItem("contadorAvaliacoes-ls", numAvaliacoes);

const spanContador = document.querySelector("#contador-avaliacoes");
if (spanContador) {
  spanContador.textContent = numAvaliacoes;
}