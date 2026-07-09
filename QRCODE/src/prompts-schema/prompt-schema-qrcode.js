import chalk from "chalk";

const promptSchemaQRCode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR CODE"),
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRcode (1- NORMAL ou 2- TERMINAL ou 3- IMAGEM (PNG)"
    ),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha apenas entre 1, 2 e 3"),
    required: true,
  },
];

export default promptSchemaQRCode;
