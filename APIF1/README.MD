# API de Fórmula 1

API REST simples para consultar equipes e pilotos da Fórmula 1. O projeto foi desenvolvido com Node.js, TypeScript e Fastify, mantendo os dados em memória e disponibilizando apenas endpoints de leitura (`GET`).

## Tecnologias

- Node.js 20+
- TypeScript
- Fastify
- `@fastify/cors`
- `tsx` para desenvolvimento
- `tsup` para compilação

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie em modo de desenvolvimento:

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000`.

Para executar com atualização automática durante o desenvolvimento:

```bash
npm run start:watch
```

Para compilar o projeto:

```bash
npm run dist
```

## Endpoints

### Equipes

```http
GET /teams
GET /teams/:id
```

### Pilotos

```http
GET /drivers
GET /drivers/:id
```

Exemplo:

```bash
curl http://localhost:3000/teams/1
```

As respostas são retornadas em JSON. Quando uma equipe ou piloto não é encontrado, a API retorna `404` com uma mensagem de erro.

## Estrutura do projeto

```text
src/
├── app.ts                 # Configuração da aplicação Fastify
├── server.ts              # Inicialização do servidor
├── data/                  # Dados das equipes e dos pilotos
├── dtos/                  # Tipos dos objetos da API
└── routes/                # Rotas de equipes e pilotos
```
