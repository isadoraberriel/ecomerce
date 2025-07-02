// Muda a cor de fundo da loja
function mudarCor() {
    document.body.style.backgroundColor = "#ffe4e1"; // Rosa claro
}

// Muda o texto do banner principal
function mudarTexto() {
    const banner = document.querySelector('.banner p');
    banner.innerText = "Linha be you com 10% de desconto. Corre que é por tempo limitado!";
}

// Mostra um alerta de promoção
function mostrarPromocao() {
    alert("Frete gratis em compras a partir de 69.99");
}
