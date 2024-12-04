
//Sem o event.preventDefault(), a página seria recarregada imediatamente e o código JavaScript não teria chance de verificar os dados ou tomar outras ações antes do envio.


document.getElementById("form").addEventListener("submit", function (event) {
    // Impedir envio do formulário
    event.preventDefault();

// Capturar valores dos campos
const form = document.getElementById('form');
const email = document.getElementById('email').value
const senha = document.getElementById('senha').value

// Variável para rastrear se há erros
let hasErrors = false;

// Validação do campo Email
    if (email === "") {
        alert("O campo 'Email' é obrigatório.");
        hasErrors = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Por favor, insira um endereço de email válido.");
        hasErrors = true;
    }

// Validação do campo Senha
if (senha === "") {
    alert("O campo 'Senha' é obrigatório.");
    hasErrors = true;
} else if (senha.length < 5) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    hasErrors = true;
}

// Se não houver erros, submeter o formulário
if (!hasErrors) {
    alert("Formulário enviado com sucesso!");
    this.submit();
}
;

})


