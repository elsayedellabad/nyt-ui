import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PageEvent } from '@angular/material/paginator';
import { of } from 'rxjs';
import { ArticlesService } from '../../services/articles.service';
import { SearchComponent } from './search.component';
import { SearchFiltersModel } from '../../models/search-filters.model';
import * as mockSearchArticlesData from 'src/app/core/mocks/mocked-articles.json';
import { LocalStorageService } from 'src/app/core';
import { ArticlesItem } from '../../models/articles-item.model';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let articlesServiceSpy: any;
  let localStorageServiceSpy: any;
  beforeEach(async () => {
    articlesServiceSpy = jasmine.createSpyObj(['searchArticles']);
    localStorageServiceSpy = jasmine.createSpyObj(['get']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [SearchComponent],
      providers: [{ providers: ArticlesService, useValue: articlesServiceSpy },
        { providers: LocalStorageService, useValue: localStorageServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    articlesServiceSpy = TestBed.inject(ArticlesService);
    localStorageServiceSpy = TestBed.inject(LocalStorageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test searchArticles() with "articlesearch.json"', () => {
    const serviceSpy = spyOn(articlesServiceSpy, 'searchArticles');
    serviceSpy.and.returnValue(of(mockSearchArticlesData));
    const filters: SearchFiltersModel = { q: '' };
    component.searchArticles(filters);
    expect(component.length).toEqual(10);
  });

  it('Test saveSearchHistory()', () => {
    component.searchHistory = ['Egypt', 'USA'];
    const filters: SearchFiltersModel = { q: 'Germany' };
    component.saveSearchHistory(filters);
    expect(component.searchHistory.length).toEqual(3);
  });

  it('Test saveSearchHistory() with 5 elements exist with search word', () => {
    component.searchHistory = ['Egypt', 'USA', 'France', 'UAE', 'London'];
    const filters: SearchFiltersModel = { q: 'Germany' };
    const serviceSpy = spyOn(localStorageServiceSpy, 'get');
    serviceSpy.and.returnValue(of({"email":"bruno@email.com","password":"bruno"}));
    component.saveSearchHistory(filters);
    expect(component.searchHistory.length).toEqual(5);
  });

  it('Test saveSearchHistory() with empty search word', () => {
    component.searchHistory = ['Egypt', 'USA', 'France', 'UAE'];
    const filters: SearchFiltersModel = { q: '' };
    component.saveSearchHistory(filters);
    expect(component.searchHistory.length).toEqual(4);
  });

  it('Test getSavedSearchHistory()', () => {
    const serviceSpy = spyOn(localStorageServiceSpy, 'get');
    serviceSpy.and.returnValue(of({"email":"bruno@email.com","password":"bruno"}));
    component.getSavedSearchHistory();
    expect(component.getSavedSearchHistory).toHaveBeenCalled;
  });

  it('Test formatCardData()', () => {
    let articleItem: ArticlesItem = 

    {
           "abstract": "A.J. Brown and the Eagles’ personnel make play-calling simple, Derrick Henry is back, and the Vikings’ success depends on football no-brainers: win the turnover battle and don’t commit penalties.",
           "web_url": "https://www.nytimes.com/2022/10/30/sports/football/nfl-week-8-scores.html",
           "snippet": "A.J. Brown and the Eagles’ personnel make play-calling simple, Derrick Henry is back, and the Vikings’ success depends on football no-brainers: win the turnover battle and don’t commit penalties.",
           "lead_paragraph": "With N.F.C. teams playing disconcertingly average football, only the 6-1 Minnesota Vikings have established a cushion in their division, while the N.F.C. East, led by the unbeaten Philadelphia Eagles, has looked like the toughest division in football.",
           "print_section": "s",
           "print_page": "4",
           "source": "The New York Times",
           "multimedia": [
             {
               "rank": 0,
               "subtype": "xlarge",
               "caption": '',
               "credit": '',
               "type": "image",
               "url": "images/2022/10/30/sports/30nfl-wwl-aj/merlin_215727063_c9a596b8-4f72-4b27-ac75-06e86c96c941-articleLarge.jpg",
               "height": 400,
               "width": 600,
               "legacy": {
                 "xlarge": "images/2022/10/30/sports/30nfl-wwl-aj/merlin_215727063_c9a596b8-4f72-4b27-ac75-06e86c96c941-articleLarge.jpg",
                 "xlargewidth": 600,
                 "xlargeheight": 400
               },
               "subType": "xlarge",
               "crop_name": "articleLarge"
             }
           ],
           "headline": {
             "main": "What We Learned From Week 8 in the N.F.L.",
             "kicker": 'null',
             "content_kicker": '',
             "print_headline": "What We Learned This Week",
             "name": '',
             "seo": '',
             "sub": ''
           },
           "keywords": [
             { "name": "subject", "value": "Football", "rank": 1, "major": "N" },
             {
               "name": "organizations",
               "value": "Minnesota Vikings",
               "rank": 2,
               "major": "N"
             },
             
           ],
           "pub_date": "2022-10-30T22:31:56+0000",
           "document_type": "article",
           "news_desk": "Sports",
           "section_name": "Sports",
           "subsection_name": "Pro Football",
           "byline": {
             "original": "By Derrik Klassen",
             "person": [
               
             ],
             "organization": ''
           },
           "type_of_material": "News",
           "_id": "nyt://article/a43caf85-c285-5824-bc7e-b6880acee4fa",
           "word_count": 3153,
           "uri": "nyt://article/a43caf85-c285-5824-bc7e-b6880acee4fa"
         }
    component.formatCardData(articleItem);
    expect(component.formatCardData).toHaveBeenCalled;
  });
});
