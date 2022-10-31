import { ArticlesLegacy } from "./articles-legacy.model";

export interface ArticlesMultimedia {
  rank: number;
  subtype: string;
  caption: string;
  credit: string;
  type: string;
  url: string;
  height: number;
  width: number;
  legacy: ArticlesLegacy;
  subType: string;
  crop_name: string;
}
