import fs from "fs";
import path from "path";

import {
  PodcastModel,
  PodcastPage,
  PodcastQuery,
} from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  query: PodcastQuery
): Promise<PodcastPage> => {
  const language = "utf-8";

  const rawData = fs.readFileSync(pathData, language);
  let episodes = JSON.parse(rawData) as PodcastModel[];

  if (query.search) {
    const search = query.search.toLocaleLowerCase();
    episodes = episodes.filter((podcast) =>
      `${podcast.episode} ${podcast.podcastName}`
        .toLocaleLowerCase()
        .includes(search)
    );
  }

  if (query.podcast) {
    const podcastName = query.podcast.toLocaleLowerCase();
    episodes = episodes.filter(
      (podcast) => podcast.podcastName.toLocaleLowerCase() === podcastName
    );
  }

  if (query.category) {
    const category = query.category.toLocaleLowerCase();
    episodes = episodes.filter((podcast) =>
      podcast.categories.some(
        (item) => item.toLocaleLowerCase() === category
      )
    );
  }

  episodes.sort((first, second) => {
    const firstValue =
      query.sort === "podcast" ? first.podcastName : first.episode;
    const secondValue =
      query.sort === "podcast" ? second.podcastName : second.episode;

    return firstValue.localeCompare(secondValue, "pt-BR");
  });

  const start = (query.page - 1) * query.limit;
  const items = episodes.slice(start, start + query.limit);

  return {
    items,
    total: episodes.length,
    page: query.page,
    limit: query.limit,
    pages: Math.ceil(episodes.length / query.limit),
  };
};
