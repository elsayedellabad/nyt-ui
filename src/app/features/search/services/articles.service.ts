import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY, ARTICLES_SEARCH } from 'src/app/core';
import { ArticlesResponse } from '../models/articles-response';
import { SearchFiltersModel } from '../models/search-filters.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  searchArticles(filters: SearchFiltersModel): Observable<ArticlesResponse> {
      let apiUrl = ARTICLES_SEARCH;
      let query = '';
      if (filters.q)
        query = `&q=${filters.q}`;
      apiUrl = `${apiUrl}${query}`;
      return this.http.get<ArticlesResponse>(apiUrl);
  }
}
