document.getElementById("enviarMsg").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o envio imediato do formulário
    console.log("Botão clicado!"); // Verifica se o clique está sendo registrado
    alert("Mensagem enviada com sucesso!"); // Exibe o alerta
});
