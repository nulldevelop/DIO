# projeto-qrcode-DIO

Kit de utilidades de linha de comando para e-commerces, feito durante o bootcamp da [DIO](https://www.dio.me/). Oferece dois utilitários:

- **Gerador de QR Code** — a partir de um link, gera o QR Code no terminal (tamanho normal ou reduzido) ou salva como imagem PNG.
- **Gerador de senha** — cria uma senha aleatória com base nas regras definidas no `.env`.

## Requisitos

- [Node.js](https://nodejs.org/) 18+

## Instalação

```bash
npm install
```

## Configuração

As opções do gerador de senha são controladas pelo arquivo `.env` na raiz do projeto:

```env
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTERS=true
PASSWORD_LENGTH=12
```

## Uso

```bash
npm start
```

O menu principal pede para escolher a ferramenta:

```
1 - QRCODE
2 - PASSWORD
```

### QR Code

Informe o link e o tipo de saída desejado:

```
1 - NORMAL    -> imprime o QR Code (tamanho padrão) no terminal
2 - TERMINAL  -> imprime o QR Code reduzido, ideal para terminais menores
3 - IMAGEM    -> salva o QR Code como arquivo PNG em ./output
```

### Senha

Gera uma senha aleatória seguindo as regras configuradas no `.env` e a exibe no terminal.

## Estrutura

```
src/
  index.js                    # ponto de entrada / menu principal
  prompts-schema/             # definição dos prompts de CLI
  services/
    qr-code/                  # geração de QR Code (terminal e imagem)
    password/                 # geração de senha aleatória
```
