# Contratos
 
contratos de cadastro de usuarios:
cadastro realizado com sucesso:
requisição:
{
  "nome": "ricardo vilela",
  "email": "ricardo.vilela@gmail.com",
  "senha": "10102005"
}

resposta;
{
  "status": "sucesso!",
  "mensagem": "'Nome' cadastrado com sucesso",
  "ID": 101
}
----------------
tentativa de cadastro com email já cadastrado:
requisição: 
{
  "nome": "Fabricio Freitas",
  "email": "ricardo.vilela@gmail.com",
  "senha": "abcd1234"
}

resposta:
{
  "status": "erro",
  "mensagem": "Email já cadastrado. Por favor, use outro email."
}
----------------
erro no servidor:
requisição:
{
  "nome": "francisco junior",
  "email": "franciscão@gmail.com",
  "senha": "padaria0"
}

resposta:
{
  "status": "erro",
  "mensagem": "Erro interno do servidor. Por favor, tente novamente mais tarde."
}
consegui integrar outras situações no css e JS.
------------------------------------