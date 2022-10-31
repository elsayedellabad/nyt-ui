import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchFiltersModel } from '../../models/search-filters.model';
import { ArticlesItem } from '../../models/articles-item.model';
import { PageEvent } from '@angular/material/paginator';
import { ArticlesService } from '../../services/articles.service';
import { emptyCardData, SpinnerService } from 'src/app/shared';
import { LocalStorageService } from 'src/app/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  articles: ArticlesItem[] = [];
  dataSource!: ArticlesItem[];
  length: number = 0;
  pageIndex: number | undefined = 1;
  pageSize: number | undefined = 6;
  previousPageIndex: number | undefined = 0;
  searchHistory: string[] = [];
  constructor(
    private articlesService: ArticlesService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    let filters: SearchFiltersModel = {
      q: '',
    };
    this.searchArticles(filters);
    this.getSavedSearchHistory();
  }

  public searchArticles(filters: SearchFiltersModel) {
    this.saveSearchHistory(filters);
    this.articlesService.searchArticles(filters).subscribe({
      next: (result) => {
        this.length = result.response.docs.length;
        this.articles = result.response.docs;
        this.getServerData({
          length: this.length,
          pageIndex: 0,
          pageSize: 6,
          previousPageIndex: this.previousPageIndex,
        });
      },
      error: (e) => {
        console.log(e.error['message']);
      },
    });
  }

  saveSearchHistory(filters: SearchFiltersModel) {
    const searchValue: string = filters.q.trim().toLowerCase();
    if (searchValue?.length > 0) {
      if (this.searchHistory.length > 0) {
        const index = this.searchHistory.indexOf(searchValue);
        index !== -1 ? this.searchHistory.splice(index, 1) : '';
      }
      this.searchHistory.unshift(searchValue);
      if (this.searchHistory.length > 5) {
        this.searchHistory = this.searchHistory.slice(0, 5);
      }
      if (this.searchHistory.length > 0) {
        const user = this.localStorageService.get('user');
        if (user) {
          const email = user['email'];
          this.localStorageService.set(email, this.searchHistory);
        }
      }
    }
  }

  getSavedSearchHistory() {
    const user = this.localStorageService.get('user');
    if (user) {
      const email = user['email'];
      const savedSearchHistory = this.localStorageService.get(email);
      if (savedSearchHistory) {
        this.searchHistory = savedSearchHistory;
      }
    }
  }

  public getServerData(event: PageEvent) {
    if (event.pageIndex == 0)
      this.dataSource = this.articles.slice(0, event.pageSize);
    else
      this.dataSource = this.articles.slice(
        event.pageIndex * event.pageSize,
        (event.pageIndex + 1) * event.pageSize
      );
    this.pageIndex = event?.pageIndex;
    this.pageSize = event?.pageSize;
    this.previousPageIndex = event?.previousPageIndex;

    return event;
  }

  formatCardData(articleItem: ArticlesItem) {
    let cardData = emptyCardData();
    cardData.title = articleItem?.abstract;
    cardData.section = articleItem?.section_name;
    cardData.imageUrl =
      articleItem?.multimedia && articleItem?.multimedia[0]
        ? 'https://static01.nyt.com/' + articleItem?.multimedia[0]?.url
        : '';
    cardData.description = articleItem?.lead_paragraph;
    cardData.created_date = '';
    cardData.updated_date = '';
    cardData.published_date = articleItem?.pub_date;
    return cardData;
  }
}
