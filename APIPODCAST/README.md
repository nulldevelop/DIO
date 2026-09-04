# Podcast Discovery API

API HTTP em TypeScript para explorar um catalogo local de episodios de podcast. O projeto evolui o exercicio original para uma pequena API de descoberta, com busca textual, filtros, ordenacao, paginacao e respostas com metadados.

## Requisitos

- Node.js 18+

## Executar

```bash
npm install
$env:PORT="3333"
npm run start:dev
```

Com o servidor ativo, abra `http://localhost:3333/` no navegador para acessar a interface visual. A porta pode ser alterada trocando o valor de `PORT`.

No Linux ou macOS:

```bash
PORT=3333 npm run start:dev
```

## Endpoints

Além da interface, a API continua disponível em JSON para uso no Postman, Insomnia ou outro cliente HTTP.

### Listar episodios

```http
GET /api/podcasts
```

A rota aceita os seguintes parametros:

| Parametro | Tipo | Descricao |
| --- | --- | --- |
| `q` | string | Procura no nome do podcast e no titulo do episodio. |
| `podcast` | string | Filtra por nome exato do podcast, sem diferenciar maiusculas. |
| `category` | string | Filtra por categoria. |
| `page` | number | Pagina iniciando em 1. Padrao: `1`. |
| `limit` | number | Itens por pagina, de 1 a 50. Padrao: `10`. |
| `sort` | `episode` ou `podcast` | Ordenacao alfabetica. Padrao: `episode`. |

Exemplo:

```text
GET /api/podcasts?q=flow&category=esporte&page=1&limit=5&sort=podcast
```

Resposta:

```json
{
  "items": [],
  "total": 0,
  "page": 1,
  "limit": 5,
  "pages": 0
}
```

`GET /api/list` continua disponivel como atalho compativel para a listagem.

Rotas inexistentes retornam `404`. Metodos diferentes de `GET` retornam `405`. Parametros invalidos retornam `400` com um objeto `error`.

## Organizacao

- `src/models`: contratos da API e tipos de consulta.
- `src/repositories`: leitura e filtragem do catalogo JSON.
- `src/services`: interpretacao dos parametros e regras de consulta.
- `src/controllers`: serializacao das respostas HTTP.
- `src/routes`: nomes das rotas publicas.

## Verificacao

```bash
npx tsc --noEmit
```
