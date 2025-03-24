
const express = require('express');
const app = express();

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
  res.render('cadastrar_usuario'); // Renderiza o arquivo `views/recuperar_login.ejs`
});

// Outra rota (exemplo: página Cadastrar Setor)
app.get('/cadastrar-setor', (req, res) => {
  res.render('cadastrar_setor'); // Renderiza o arquivo `views/cadastrar_setor.ejs`
});
// Outra rota (exemplo: página CadastrarUsuário)
app.get('/cadastrar-usuario', (req, res) => {
  res.render('cadastrar_usuario'); // Renderiza o arquivo `views/cadastrar_usuário.ejs`
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});