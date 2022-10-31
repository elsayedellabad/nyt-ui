import {ArticlesItem} from "./articles-item.model";
import { ArticlesMeta } from "./articles-meta.model";

export interface ArticlesDocuments {
  docs: ArticlesItem[];
  meta: ArticlesMeta;

}
