document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");
    if(form){
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const nome = document.getElementById("nome");
            const email = document.getElementById("email");
            const mensagem = document.getElementById("mensagem");
            const resposta = document.getElementById("resposta");

            if(
                nome.value.trim() === "" ||
                email.value.trim() === "" ||
                mensagem.value.trim() === ""
            ){
                resposta.textContent =
                    "Preencha todos os campos.";
                resposta.style.color = "red";
                return;
            }
            resposta.textContent =
                `Obrigado, ${nome.value}! Sua mensagem foi enviada com sucesso.`;

            resposta.style.color = "green";
            form.reset();
        });
    }
});