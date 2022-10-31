import {ArticlesPerson} from "./articles-person";

export interface ArticlesByline {
  original: string;
  person: ArticlesPerson[];
  organization: string;
}
