import { NewsItem } from './news-item.model';

export interface NewsResponse {
  status: string;
  copyright: string;
  section: string;
  last_updated: string;
  num_results: number;
  results: NewsItem[];
}
