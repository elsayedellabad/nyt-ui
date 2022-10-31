import {ArticlesDocuments} from "./articles-documents.model.";

export interface ArticlesResponse {
  status: string;
  copyright: string;
  response: ArticlesDocuments; 
}
