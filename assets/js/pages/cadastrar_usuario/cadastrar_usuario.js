// Selecionando o formulário (o meu)
const formulario = document.getElementById("formulario-cadastro-usuario");


// Função para visibilidade da senha
function toggleVisibilityWithText(campoId, botao) {
    const campo = document.getElementById(campoId); // Seleciona o campo de senha
    if (campo.type === "password") {
        campo.type = "text"; // Exibe a senh
        botao.textContent = "Ocultar"; // Atualiza o texto do botão
    } else {
        campo.type = "password"; // Oculta tabaca da senha
        botao.textContent = "Ver"; // Atualiza o texto do botão
    }
}

// Função para criar mensagens de erro
function exibirErro(campo, mensagem) {
    const elementoErro = document.createElement("small");
    elementoErro.classList.add("mensagem-erro");
    elementoErro.textContent = mensagem;
    campo.parentNode.appendChild(elementoErro);
    campo.classList.add("campo-invalido");
} //seja o que Deus quiser

// Remover mensagens de erro antigas
function limparErros() {
    const erros = document.querySelectorAll(".mensagem-erro");
    erros.forEach((erro) => erro.remove());

    const camposInvalidos = document.querySelectorAll(".campo-invalido");
    camposInvalidos.forEach((campo) => campo.classList.remove("campo-invalido"));
}

// Função para validar os campos do formulário
function validarFormulario() {
    limparErros(); // Limpar mensagens de erro anteriores

    // Selecionando os campos
    const nomeUsuario = document.getElementById("nomeSetor");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const confirmarSenha = document.getElementById("confirmarSenha");

    let formularioValido = true;

    // Validação dos campos
    if (nomeUsuario.value.trim() === "") {
        exibirErro(nomeUsuario, "O campo Nome Completo é obrigatório.");
        formularioValido = false;
    }

    if (email.value.trim() === "") {
        exibirErro(email, "O campo E-mail é obrigatório.");
        formularioValido = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            exibirErro(email, "O e-mail informado não é válido.");
            formularioValido = false;
        }
    }

    if (senha.value.trim() === "") {
        exibirErro(senha, "O campo Senha é obrigatório.");
        formularioValido = false;
    } else if (senha.value.trim().length < 8) {
        exibirErro(senha, "A senha deve ter no mínimo 8 caracteres.");
        formularioValido = false;
    }

    if (confirmarSenha.value.trim() === "") {
        exibirErro(confirmarSenha, "O campo Confirmar Senha é obrigatório.");
        formularioValido = false;
    } else if (senha.value.trim() !== confirmarSenha.value.trim()) {
        exibirErro(confirmarSenha, "As senhas não coincidem.");
        formularioValido = false;
    }

    return formularioValido; /// Retorna true se o formulário estiver ok
}

// Função para enviar dados para o back-end falso
async function enviarCadastro(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Valida o formulário antes de enviar
    const formularioValido = validarFormulario();
    if (!formularioValido) {
        return; // Se o formulário for inválido, interrompe o envio, tive problemas com isso
    }

    // Capturar os dados do formulário
    const nome = document.getElementById("nomeSetor").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Objeto com os dados para enviar
    const dados = {
        nome: nome,
        email: email,
        senha: senha
    };

    try {
        // Fazendo a requisição usando Fetch API trabalhoso
        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // Método HTTP POST para enviar dados
            headers: {
                "Content-Type": "application/json" // Indicando que estamos enviando JSON
            },
            body: JSON.stringify(dados) // Convertendo os dados para JSON
        });

        // Processando a suposta resposta do servidor
        const resultado = await resposta.json();

        // Exibindo feedback para o usuário
        if (resposta.ok) {
            alert(`Sucesso! ${resultado.nome} foi cadastrado com sucesso. ID: ${resultado.id || 101}`);
        } else {
            alert("Erro ao cadastrar o usuário. Tente novamente.");
        }
    } catch (erro) {
        // Tratando possíveis erros (ex: falha na conexão)...
        alert("Erro interno do servidor. Por favor, tente novamente mais tarde.");
        console.error(erro);
    }
}

/// Adicionando o evento submit ao formulário
formulario.addEventListener("submit", enviarCadastro);

// Validar dinamicamente enquanto o usuario digita (botei por recomendação, mas não entendi) (entendi depois kkkkk)
const campos = formulario.querySelectorAll("input");
campos.forEach((campo) => {
    campo.addEventListener("input", () => {
        limparErros(); // Remover erros anteiores ao digitar
    });
});