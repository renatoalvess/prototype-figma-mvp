function validar(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    const nomeSetor = document.getElementById('nomeCargo').value;
    const endereco = document.getElementById('salarioBase').value;
    const responsavel = document.getElementById('cargahoraria').value;
    const email = document.getElementById('gratificacao').value;

    if (nomeSetor === '') {
        alert('Por favor, preencha o campo Nome do Cargo.');
        return false;
    }
    if (endereco === '') {
        alert('Por favor, preencha o campo Salário Base.');
        return false;
    }
    if (responsavel === '') {
        alert('Por favor, preencha o campo Carga horária mensal.');
        return false;
    }
    if (email === '') {
        alert('Por favor, preencha o campo Valor da gratificação.');
        return false;
    }

    alert('Cargo cadastrado com sucesso!');
    document.getElementById('formulario-cargo').reset();
}