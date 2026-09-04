import * as http from "http";
import fs from "fs";
import path from "path";

import {
  getListEpisodes,
  sendError,
} from "./controllers/podscasts-controller";

import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const publicPath = path.join(process.cwd(), "public");
const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && baseUrl === "/") {
    serveStaticFile("index.html", response);
    return;
  }

  if (request.method === HttpMethod.GET && baseUrl?.startsWith("/")) {
    const fileName = baseUrl.slice(1);
    if (["app.js", "styles.css"].includes(fileName)) {
      serveStaticFile(fileName, response);
      return;
    }
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
    return;
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.PODCASTS) {
    await getListEpisodes(request, response);
    return;
  }

  sendError(
    response,
    request.method === HttpMethod.GET ? 404 : 405,
    request.method === HttpMethod.GET ? "Rota não encontrada." : "Método não permitido."
  );
};

function serveStaticFile(fileName: string, response: http.ServerResponse) {
  const filePath = path.join(publicPath, fileName);
  const extension = path.extname(filePath);

  if (!fs.existsSync(filePath)) {
    sendError(response, 404, "Arquivo não encontrado.");
    return;
  }

  response.writeHead(200, {
    "Content-Type": contentTypes[extension] ?? "application/octet-stream",
  });
  response.end(fs.readFileSync(filePath));
}
