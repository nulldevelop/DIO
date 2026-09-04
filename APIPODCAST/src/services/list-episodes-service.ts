import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { PodcastQuery } from "../models/podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (
  query: PodcastQuery
): Promise<PodcastTransferModel> => {
  const data = await repositoryPodcast(query);

  return {
    statusCode: StatusCode.OK,
    body: data,
  };
};
