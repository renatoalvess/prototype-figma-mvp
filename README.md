# Protótipo de Alta Fidelidade - Sistema de Recursos Humanos - Projeto Integrado III UFCA

## Este repositório tem como objetivo gerenciar setores, cargos, funcionários e a folha de pagamento de uma empresa de recursos humanos de pequeno porte.

## Sobre o Projeto

O sistema de RH é composto por:
- **Dashboard**: Visão geral com informações da empresa.
- **Gerenciamento de Setores**: Cadastro, edição e exclusão de setores.
- **Gerenciamento Cargos**: Cadastro, edição e exclusão de cargos.
- **Gerenciamento de Funcionários**: Cadastro, edição e exclusão de funcionários.
- **Folha de Pagamento**: Gerenciamento de pagamentos.
- **Benefícios**: Gerenciamento de benefícios.
- **tela de cadastro de usuario**: realização de cadastro de novos usuarios.
- **tela de login**: login do usuario.
- **tela de esqueci sua senha**: destinada a recuperação de acesso ao sistema.

## tecnologias utilizadas
o MVP é composto de HTLM e CSS para estruturação e estilização do sistema, JavaScript para interação do usuario, fetch API para simular comunicação com back-end, com formato de dados em JSON. 

Express e EJS para criar páginas dinâmicas com um front-end modularizado. Para reutilizar componentes e configurar um servidor.

## Protótipo de Alta Fidelidade
O protótipo foi desenvolvido no Figma. Você pode visualizá-lo [aqui](https://www.figma.com/design/J624QdsPAa08a9QNeclkdP/Prot%C3%B3tipo-Preliminar-de-Alta-Fidelidade---RH?node-id=0-1&t=NG6QlhGzwUmRtFVg-1).

### Telas Principais
- **Dashboard**: Visão geral do sistema.
  ![Dashboard](design/1homepage.png)
- **Setores**: Cadastro e pesquisa de setores.
  ![Setores](design/2setores.png)
- **Cargos**: Cadastro de cargos.
  ![Cargos](design/3cargos.png)
- **Cargos/pesquisa**: Pesquisa de cargos.
  ![Pesquisar cargos](design/4cargos_pesquisar.png)
- **Cargos/pesquisa/lista de cargos**: Lista todos os cargos.
  ![Lista de cargos](design/5cargos_pesquisar_lista.png)
- **Cargos/pesquisa/lista de cargos/editar**: Edita o cargo.
  ![Editar cargo](design/6cargos_pesquisar_editar.png)
  
## Pré-requisitos
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) (gerenciado pelo Node.js)

## Como Instalar e Rodar o Projeto
1. Clone este repositório:
   ```bash
   https://github.com/renatoalvess/prototype-figma-mvp.git

2. Acesse o diretório do projeto:
   ```bash
   cd prototype-figma-mvp

3. Instale as dependências:
   ```bash
   npm install

4. Inicie o servidor:
   ```bash
   node app.js

5. Acesse no navegador:
   ```bash
   http://localhost:3000

## Como Contribuir como colaborador
1. Faça um fork do projeto.
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b minha-feature

3. Faça as alterações desejadas e commit:
   ```bash
   git commit -m "Adiciona nova feature"

4. Envie suas alterações para o repositório remoto:
   ```bash
   git push origin minha-feature

5. Abra um Pull Request.


##  Instruções sobre o Processo de Integração Contínua (CI)

Este projeto utiliza GitHub Actions para automatizar a verificação da qualidade, testes e segurança do código. As Actions são configuradas nos arquivos .yml dentro da pasta .github/workflows/.

Sempre que você faz um push para a branch main ou abre/atualiza um Pull Request direcionado a branch main, as seguintes verificações são executadas automaticamente:

1. CI Basico: Build e Testes Node.js (ci-node.yml)
Este é o processo central de CI, garantindo a funcionalidade e estabilidade do codigo.

O que faz:

- Baixa o código do repositório.

- Configura o ambiente Node.js (versão 20).

- Instala todas as dependências do projeto (npm install).

- Executa todos os testes automatizados do projeto (npm test).

Garante que qualquer nova alteração não introduza erros e que o projeto continue funcional.

2. Auditoria de Segurança de Dependências (ci-node.yml)
Uma camada de segurança crucial para as bibliotecas que seu projeto utiliza.

O que faz:

- Só é executado se o "Build e Testes" passar com sucesso.

- Instala as dependências (de forma segura, sem rodar scripts).

- Executa uma auditoria de segurança (npm audit --audit-level=high) para detectar vulnerabilidades conhecidas nas dependencias do projeto.

Previne que o projeto incorpore bibliotecas com falhas de segurança conhecidas, protegendo o sistema contra possíveis ataques.

3. Verificação de Credenciais Expostas (scan-secrets.yml)
Uma verificação de segurança vital para proteger informações sensíveis.

O que faz:

- Baixa o código do repositório, incluindo todo o histórico de commits.

- Usa a ferramenta Gitleaks para escanear o código e o histórico em busca de senhas, chaves de API ou outros segredos que possam ter sido acidentalmente commitados.

Protege o projeto contra vazamentos acidentais de informações sensíveis.

4. Como Acompanhar o Status das Verificações
Você pode monitorar o progresso e os resultados de todas essas verificações de algumas formas:

Na aba Actions do repositório:

- Vá para a página principal do seu repositório no GitHub.

- Clique na aba Actions.

- Você verá uma lista de todas as execuções de workflow. Clique em uma execução específica para ver os detalhes dos jobs (Build e Testes, Auditoria de Segurança, Verificar Credenciais) e seus logs.

##  [Componente Extensionista] O que é o Processo de Integração Contínua (CI)?

- Aluno: **Renato Alves**

A integração contínua é responsável por integrar e testar automaticamente alterações no código-fonte de um projeto. 
O bjetivo é indentificar problemas o mais rápido possível, para que possam ser corrigidos de forma eficaz.

As ferramentas realizam várias operações como compilação de código, testes automatizados, análise de código, etc. 
Isso permite entregar um software com maior qualidade e em menos tempo, reduzindo trabalho e custos. 
A integração contínua também facilita a colaboração entre as equipes, acelerando e simplifcando o processo de entrega.

Pra quem está aprendendo a programar é importante tentar entender e aplicar desde cedo, pois ajuda a criar boas práticas,
promove um desenvovlimento mais rápido, seguro, e organizado, evitando grandes problemas futuros.

- Aluno: **José Valbério**

Para quem está começando a programar, aprender sobre integração contínua desde cedo pode fazer toda a diferença. Essa prática estimula bons hábitos, como manter o código sempre funcionando, colaborar com outros desenvolvedores e organizar melhor o fluxo de trabalho.

A integração contínua permite que alterações no código sejam rapidamente testadas e integradas ao projeto principal de forma automática. Em vez de esperar que vários erros se acumulem e virem um problema maior, o time consegue detectar falhas logo no início e corrigi-las com agilidade.

Com o uso de ferramentas específicas, esse processo se torna ainda mais eficiente. Elas cuidam de tarefas como compilar o código, rodar testes automatizados e verificar se tudo continua funcionando como esperado. Isso reduz retrabalho e aumenta a confiança no sistema que está sendo construído.

O objetivo é claro: facilitar o trabalho em equipe e permitir a entrega de um produto com mais qualidade em menos tempo. A integração contínua se torna, assim, um verdadeiro aliado no desenvolvimento de software moderno.

- Aluno: **Antonio Harisson**

a integração continua é uma pratica de desenvolvimento e da cultura devOps, onde há a integração 
codigo e suas modificações em um repositorio, geralmente o Git. não só isso, a IC trabalha para 
garantir a qualidade do software, rezudindo erros e tornando mais eficiente o trabalho de desenvolvimento. 

a partir de scripts e automações, é possivel automatizar diversas ações, como: detectar e resolver problemas 
com rapidez, a partir de uma automação que testa constantemente o codigo fonte do projeto;
reduzir o tempo de validação do codigo;
identificar redundancias e codigos sem utilidade, garantindo um projeto limpo e eficiente;
identificar e notificar por email, mensagem e ate whatsapp, quando uma modificação ocorrer ou uma ação 
for realizada, como push, pull, merge... 

com a IA, a integração continua se tornou mais requintada e funcional, com automações capazes  
de ler o codigo, identificar problemas (bugs, redundancias...) e propor uma solução, tudo em questão de segundos. 
w