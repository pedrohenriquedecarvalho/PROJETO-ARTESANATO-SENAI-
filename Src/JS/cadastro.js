
document.getElementById("form").addEventListener("submit", function (event) {
    // Impedir envio do formulário
    event.preventDefault();

// Capturar valores dos campos
const form = document.getElementById('form');
const email = document.getElementById('email').value
const senha = document.getElementById('senha').value
const nome = document.getElementById('nome').value
const fone = document.getElementById('telefone').value

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

 // validar nome do cliente
if (nome === "") {
    alert("O campo 'nome' é obrigatório.");
    hasErrors = true;
} else if (nome.length < 3) {
    alert("o nome está incorreto");
    hasErrors = true;
}

// validar telefone do cliente


if (fone === ""){
    alert("O campo 'telefone' é obrigatório.");
    hasErrors = true;
} else if(/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{4})\-?(\d{4}))$/.test(fone) === false) {
    
    alert("Por favor, insira um telefone válido.");
    hasErrors = true;
}



// Se não houver erros, submeter o formulário
if (!hasErrors) {
    alert("Formulário enviado com sucesso!");
    this.submit();
}
;

})