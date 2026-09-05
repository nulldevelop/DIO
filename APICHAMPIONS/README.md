# API Champions

API REST para consulta e gerenciamento de jogadores e clubes de futebol.

## Tecnologias

- Node.js
- TypeScript
- Express
- CORS
- tsx
- tsup

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
```

## Execução

### Desenvolvimento

```bash
npm run dev
```

A API ficará disponível em `http://localhost:3000`.

### Build de produção

```bash
npm run build
npm start
```

## Rotas

Todas as rotas utilizam o prefixo `/api`.

### Status da API

```http
GET /api/
```

### Players

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/api/players` | Lista todos os jogadores |
| GET | `/api/players/:id` | Busca um jogador por ID |
| POST | `/api/players` | Cria um jogador |
| PUT | `/api/players/:id` | Atualiza um jogador por ID |
| DELETE | `/api/players/:id` | Remove um jogador por ID |

Exemplo de payload para `POST` e `PUT`:

```json
{
  "name": "Vinicius Junior",
  "club": "Real Madrid",
  "nationality": "Brazil",
  "position": "Forward",
  "statistics": {
    "Overall": 90,
    "Pace": 95,
    "Shooting": 84,
    "Passing": 81,
    "Dribbling": 92,
    "Defending": 35,
    "Physical": 75
  }
}
```

### Clubs

```http
GET /api/clubs
```

Lista os clubes cadastrados na base de dados.

## CORS

- Requisições `GET` são públicas.
- Requisições `POST`, `PUT` e `DELETE` são aceitas somente para a origem `https://nulldev.com.br`.
- Requisições locais sem o header `Origin` continuam funcionando.

CORS controla chamadas feitas por navegadores. Ele não substitui autenticação ou autorização para proteger a API contra chamadas diretas.

## Estrutura principal

```text
src/
├── controllers/
├── data/
├── models/
├── repositories/
├── services/
├── app.ts
├── routes.ts
└── server.ts
```
