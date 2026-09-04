# Projetos DIO

Repositório de estudos e projetos desenvolvidos durante minha jornada na [DIO (Digital Innovation One)](https://www.dio.me/).

Cada pasta representa uma aplicação independente, com seu próprio código, dependências e documentação.

## Projetos

| Projeto | Descrição | Tecnologias |
| --- | --- | --- |
| [APIPODCAST](APIPODCAST/) | API de descoberta de episódios com interface web, filtros, busca, ordenação e paginação. | TypeScript, Node.js, HTTP nativo |
| [QRCODE](QRCODE/) | Ferramenta de linha de comando para gerar QR Codes e senhas configuráveis. | JavaScript, Node.js |

## Como executar

Os comandos devem ser executados dentro da pasta do projeto escolhido.

### APIPODCAST

```powershell
cd APIPODCAST
npm install
$env:PORT="3333"
npm run start:dev
```

Depois, abra a interface visual em <http://localhost:3333/>.

A API também pode ser consultada diretamente:

```text
GET http://localhost:3333/api/podcasts
GET http://localhost:3333/api/podcasts?q=flow&category=esporte
```

Documentação completa: [APIPODCAST/README.md](APIPODCAST/README.md).

### QRCODE

```powershell
cd QRCODE
npm install
npm start
```

O programa apresenta um menu no terminal para escolher entre gerar um QR Code ou uma senha. A configuração da senha fica no arquivo `.env` do projeto.

Documentação completa: [QRCODE/README.md](QRCODE/README.md).

## Requisitos

- Node.js 18 ou superior
- npm

## Organização

```text
.
├── APIPODCAST/    # API e catálogo visual de episódios
├── QRCODE/        # utilitários de QR Code e senha
└── README.md      # visão geral do repositório
```

> Repositório de aprendizado, prática e evolução contínua.
