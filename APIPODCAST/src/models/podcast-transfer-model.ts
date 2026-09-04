import { PodcastPage } from "./podcast-model";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastPage | { error: string };
}
