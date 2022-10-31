import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/news-response.model';
import { HttpClient } from '@angular/common/http';
import { SCIENCE_STORIES, TOP_STORIES, WORLD_STORIES } from 'src/app/core';

SCIENCE_STORIES;
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNewsByCategory(category: string): Observable<NewsResponse> {
    let apiUrl;
    switch (category) {
      case 'world':
        apiUrl = WORLD_STORIES;
        break;
      case 'science':
        apiUrl = SCIENCE_STORIES;
        break;
      default:
        apiUrl = TOP_STORIES;
        break;
    }
    return this.http.get<NewsResponse>(apiUrl);
  }
}
