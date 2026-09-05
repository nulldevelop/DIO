import type { HttpResponse } from "../models/http-reponse-model.js";

export const successResponse = async (data: any): Promise<HttpResponse> => ({
  statusCode: 200,
  body: data,
});

export const badRequest = async (data: any): Promise<HttpResponse> => ({
  statusCode: 400,
  body: data,
});

export const notFound = async (): Promise<HttpResponse> => ({
  statusCode: 404,
  body: null,
});
