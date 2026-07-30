let notaSelecionada;

function calcular(botao) {
  const numero = botao.textContent;
  notaSelecionada = numero;
}

function mostrarNota() {
  // Verifica se a notaSelecionada ainda está sem valor (undefined)
  if (!notaSelecionada) {
    alert("Please select a rating before submitting.");
    return; // Para a execução da função aqui
  }

  const avaliationDiv = document.querySelector(".avaliation");
  const tankyouDiv = document.querySelector(".tankyou");

  // Adiciona a "capa de invisibilidade" na tela de avaliação
  avaliationDiv.classList.add("hidden");
  // Remove a "capa de invisibilidade" da tela de "Obrigado"
  tankyouDiv.classList.remove("hidden");

  document.querySelector(".number-tank").textContent = notaSelecionada;
}
