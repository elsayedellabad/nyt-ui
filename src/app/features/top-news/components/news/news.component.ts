import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { NewsService } from '../../services/news.service';
import { NewsItem } from '../../models/news-item.model';
import { CardDataModel, emptyCardData } from 'src/app/shared';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  stories: NewsItem[] = [];
  dataSource!: NewsItem[];
  length: number = 0;
  pageIndex: number | undefined = 1;
  pageSize: number | undefined = 6;
  previousPageIndex: number | undefined = 0;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getTopStories('home');
  }

  /**
   * Description. This is the getTopStories function that get's top stories for home page according to selected category
   * @param {string} category
   * 
   */
  public getTopStories(category: string) {
    this.newsService.getNewsByCategory(category).subscribe({
      next: (result) => {
        this.length = result.num_results;
        this.stories = result.results;
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

  /**
   * @desc This is the getServerData function handle pagination for top stories
   * @param {PageEvent} event
   * @returns {PageEvent} event
   */
  public getServerData(event: PageEvent) {
    if (event.pageIndex == 0)
      this.dataSource = this.stories.slice(0, event.pageSize);
    else
      this.dataSource = this.stories.slice(
        event.pageIndex * event.pageSize,
        (event.pageIndex + 1) * event.pageSize
      );
    this.pageIndex = event?.pageIndex;
    this.pageSize = event?.pageSize;
    this.previousPageIndex = event?.previousPageIndex;

    return event;
  }

  /**
   * @desc This is the onCategoryChange function that is called when category value changed
   * @param {string} value
   */
  onCategoryChange(value: string) {
    this.getTopStories(value);
  }

  /**
   * @desc This is the formatCardData function that format news data 
   * that will be sent to "app-cards" component
   * 
   * @param {NewsItem} newsItem - to rendered in card
   * @returns {CardDataModel}
   */
  formatCardData(newsItem: NewsItem) {
    let cardData = emptyCardData();
    cardData.title = newsItem?.title;
    cardData.section = newsItem?.section;
    cardData.imageUrl = newsItem.multimedia ? newsItem?.multimedia[0].url : '';
    cardData.description = newsItem?.abstract;
    cardData.created_date = newsItem?.created_date;
    cardData.updated_date = newsItem?.updated_date;
    cardData.published_date = newsItem?.published_date;
    return cardData;
  }
}
