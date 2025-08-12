const botoes = 
document.querySelectorAll(".botao");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        alert("Obrigo por comprar conosco, de brinde leve nossa pimenta!");
    });
});