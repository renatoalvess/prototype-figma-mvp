function validar(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    const nomeSetor = document.getElementById('nomeSetor').value;
    const endereco = document.getElementById('endereco').value;
    const responsavel = document.getElementById('responsavel').value;
    const email = document.getElementById('email').value;

    if (nomeSetor === '') {
        alert('Por favor, preencha o campo Nome do Setor.');
        return false;
    }
    if (endereco === '') {
        alert('Por favor, preencha o campo Endereço.');
        return false;
    }
    if (responsavel === '') {
        alert('Por favor, preencha o campo Responsável.');
        return false;
    }
    if (email === '') {
        alert('Por favor, preencha o campo E-mail.');
        return false;
    }

    // Valida o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }

    alert('Formulário enviado com sucesso!');
    document.getElementById('formulario-setor').reset();
}