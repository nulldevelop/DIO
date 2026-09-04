export interface PodcastModel {
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}

export type PodcastSort = "episode" | "podcast";

export interface PodcastQuery {
  search?: string;
  podcast?: string;
  category?: string;
  page: number;
  limit: number;
  sort: PodcastSort;
}

export interface PodcastPage {
  items: PodcastModel[];
  total: number;
  page: number;
  limit: number;
  pages: number;
}
