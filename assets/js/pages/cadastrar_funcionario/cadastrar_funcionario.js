function validar(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    const nomeFuncionario = document.getElementById('nomeFuncionario').value;
    const cpfFuncionario = document.getElementById('cpfFuncionario').value;
    const nascFuncionario = document.getElementById('nascFuncionario').value;
    const sexo = document.getElementById('sexo').value;
    const endereco = document.getElementById('endereco').value;
    const municipio = document.getElementById('municipio').value;
    const telefone = document.getElementById('telefone').value;
    const dependentes = document.getElementById('dependentes').value;
    const agenciaBancaria = document.getElementById('agenciaBancaria').value;
    const contaBancaria = document.getElementById('contaBancaria').value;
    const dataAdmissao = document.getElementById('dataAdmissao').value;
    const email = document.getElementById('email').value;

    if (nomeFuncionario === '') {
        alert('Por favor, preencha o campo Nome do Funcionário.');
        return false;
    }
    
    if (cpfFuncionario === '') {
        alert('Por favor, preencha o campo CPF.');
        return false;
    }
    
    if (nascFuncionario === '') {
        alert('Por favor, preencha o campo Data de Nascimento.');
        return false;
    }
    
    if (sexo === '') {
        alert('Por favor, preencha o campo Sexo.');
        return false;
    }
    
    if (endereco === '') {
        alert('Por favor, preencha o campo Endereço.');
        return false;
    }
    
    if (email === '') {
        alert('Por favor, preencha o campo E-mail.');
        return false;
    }
    
    if (municipio === '') {
        alert('Por favor, preencha o campo Município.');
        return false;
    }
    
    if (telefone === '') {
        alert('Por favor, preencha o campo Telefone.');
        return false;
    }
    
    if (dependentes === '') {
        alert('Por favor, preencha o campo Dependentes.');
        return false;
    }
    
    if (agenciaBancaria === '') {
        alert('Por favor, preencha o campo Agência Bancária.');
        return false;
    }
    
    if (contaBancaria === '') {
        alert('Por favor, preencha o campo Conta Bancária.');
        return false;
    }
    
    if (dataAdmissao === '') {
        alert('Por favor, preencha o campo Data de Admissão.');
        return false;
    }
    

    // Valida o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido.');
        return false;
    }
    
    alert('Funcionário cadastrado com sucesso!');
    document.getElementById('formulario-funcionario').reset();
}