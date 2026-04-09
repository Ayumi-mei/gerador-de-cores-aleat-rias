function gerarCor() {
  const letras = "0123456789ABCDEF";
  let cor = "#";

  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }

  document.body.style.background = cor;
  document.getElementById("colorCode").textContent = cor;
}

function copiarCor() {
  const cor = document.getElementById("colorCode").textContent;

  navigator.clipboard.writeText(cor);
  alert("Cor copiada: " + cor);
}