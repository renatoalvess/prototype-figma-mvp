const request = require('supertest');
const app = require('./app');

describe('Testes das Rotas de Renderização de Páginas', () => {

  // Teste para a rota principal (página de login)
  it('Deve responder com status 200 e conteúdo HTML na rota GET /', async () => {
    const response = await request(app).get('/');

    // 1. Verifica se a requisição foi bem-sucedida
    expect(response.statusCode).toBe(200);

    // 2. Verifica se o tipo de conteúdo é HTML
    expect(response.headers['content-type']).toMatch(/html/);

    // 3. Verifica se o HTML contém o texto "Login"
    expect(response.text).toContain('Sistema de Recursos Humanos');
  });

  // Teste para a rota do dashboard
  it('Deve responder com status 200 e conteúdo HTML na rota GET /dashboard', async () => {
    const response = await request(app).get('/dashboard');

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);

    expect(response.text).toContain('Dashboard');
  });

  // Teste para a rota de cadastrar usuário
  it('Deve responder com status 200 e conteúdo HTML na rota GET /cadastrar_usuario', async () => {
    const response = await request(app).get('/cadastrar_usuario');

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);
    
    expect(response.text).toContain('Cadastrar Usuário');
  });

  // Teste para a rota /listar-cargos
  it('Deve responder com status 200 na rota GET /listar-cargos', async () => {
    const response = await request(app).get('/listar-cargos');

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/html/);

    expect(response.text).toContain('Listar Cargos');
  });

});
