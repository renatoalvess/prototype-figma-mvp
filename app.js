
const express = require('express');
const app = express();

// Iniciar o servidor
const PORT = 3001;

// Configurar a pasta de arquivos estáticos
app.use(express.static('assets'));

// Configurar a template engine EJS
app.set('view engine', 'ejs');

// Rota principal - Tela de Login
app.get('/', (req, res) => {
  res.render('index'); // Renderiza o arquivo `views/index.ejs`
});

// Rota recuperar Login
app.get('/recuperar-login', (req, res) => {
  res.render('recuperar_login'); // Renderiza o arquivo `views/recuperar_login.ejs`
});
// Rota dashboard
app.get('/dashboard', (req, res) => {
  res.render('dashboard'); // Renderiza o arquivo `views/dashboard.ejs`
});
// Rota cadastrar usuário
app.get('/cadastrar_usuario', (req, res) => {
  res.render('cadastrar_usuario'); // Renderiza o arquivo `views/cadastrar_usuario.ejs`
});

// Rota página Cadastrar Setor
app.get('/cadastrar-setor', (req, res) => {
  res.render('cadastrar_setor'); // Renderiza o arquivo `views/cadastrar_setor.ejs`
});
// Rota página Pesquisar Setor
app.get('/listar-setores', (req, res) => {
  res.render('listar_setores'); // Renderiza o arquivo `views/pesquisar_setor.ejs`
});

// Rota página Cadastrar Cargo
app.get('/cadastrar-cargo', (req, res) => {
  res.render('cadastrar_cargo'); // Renderiza o arquivo `views/cadastrar_cargo.ejs`
});

// Rota página listar Cargos
app.get('/listar-cargos', (req, res) => {
  res.render('listar_cargos'); // Renderiza o arquivo `views/listar_cargos.ejs`
});

// Rota página Cadastrar Funcionario
app.get('/cadastrar-funcionario', (req, res) => {
  res.render('cadastrar_funcionario'); // Renderiza o arquivo `views/cadastrar_funcionario.ejs`
});

// Rota página Listar Funcionarios
app.get('/listar-funcionarios', (req, res) => {
  res.render('listar_funcionarios'); // Renderiza o arquivo `views/listar_funcionarios.ejs`
});

// Rota página Gerar Pagamento
app.get('/gerar-pagamento', (req, res) => {
  res.render('gerar_pagamento'); // Renderiza o arquivo `views/listar_funcionarios.ejs`
});


// Inicia o servidor se não estiver em modo de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  });

}

// app.listen(PORT, () => {
//   console.log(`Servidor rodando em http://localhost:${PORT}`);
// });

module.exports = app;