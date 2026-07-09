import fs from "fs";
import path from "path";
import qr from "qrcode-terminal";
import qrImage from "qrcode";
import chalk from "chalk";

async function saveAsImage(link) {
  const outputDir = path.resolve("output");
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  const filePath = path.join(outputDir, `qrcode-${Date.now()}.png`);
  await qrImage.toFile(filePath, link);

  console.log(chalk.green("QR Code gerado com sucesso:\n"));
  console.log(chalk.cyan(filePath));
}

async function handle(err, result) {
  if (err) {
    console.log(chalk.red("error on application:"), err.message);
    return;
  }

  if (result.type == 3) {
    await saveAsImage(result.link);
    return;
  }

  const isSmall = result.type == 2;

  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n"));
    console.log(qrcode);
  });
}

export default handle;
