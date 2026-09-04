import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { PodcastQuery, PodcastSort } from "../models/podcast-model";
import { serviceListEpisodes } from "./list-episodes-service";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  requestUrl: string | undefined
): Promise<PodcastTransferModel> => {
  const params = new URL(requestUrl ?? "/", "http://localhost").searchParams;
  const page = Number(params.get("page") ?? "1");
  const limit = Number(params.get("limit") ?? "10");
  const sort = params.get("sort") ?? "episode";

  if (
    !Number.isInteger(page) ||
    page < 1 ||
    !Number.isInteger(limit) ||
    limit < 1 ||
    limit > 50 ||
    !["episode", "podcast"].includes(sort)
  ) {
    return {
      statusCode: StatusCode.BadRequest,
      body: {
        error:
          "Parâmetros inválidos. Use page >= 1, limit entre 1 e 50 e sort=episode|podcast.",
      },
    };
  }

  const query: PodcastQuery = {
    search: params.get("q") ?? undefined,
    podcast: params.get("podcast") ?? undefined,
    category: params.get("category") ?? undefined,
    page,
    limit,
    sort: sort as PodcastSort,
  };

  return serviceListEpisodes(query);
};
