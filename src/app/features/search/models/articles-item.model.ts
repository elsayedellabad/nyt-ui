import {ArticlesMultimedia} from "./articles-multimedia.model";
import {ArticlesHeadline} from "./articles-headline.model";
import {ArticlesKeywords} from "./articles-keywords.model";
import { ArticlesByline } from "./articles-byline.model";

export interface ArticlesItem {
  abstract: string;
  web_url: string;
  snippet: string;
  print_section:string;
  print_page: string;
  lead_paragraph: string;
  subsection_name: string;
  source: string;
  multimedia: ArticlesMultimedia[];
  headline: ArticlesHeadline;
  keywords: ArticlesKeywords[];
  pub_date: string;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: ArticlesByline;
  type_of_material: string;
  _id: string;
  word_count: number;
  uri: string;
}
