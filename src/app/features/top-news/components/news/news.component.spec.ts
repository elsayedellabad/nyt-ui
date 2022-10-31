import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NewsComponent } from './news.component';
import { PageEvent } from '@angular/material/paginator';
import { NewsService } from '../../services/news.service';
import { of } from 'rxjs';
import * as mockHomeStoriesData from 'src/app/core/mocks/mocked-home-stories.json';
import { NewsItem } from '../../models/news-item.model';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let newsServiceSpy: any;

  beforeEach(async () => {
    newsServiceSpy = jasmine.createSpyObj(['getNewsByCategory']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [NewsComponent],
      providers: [{ providers: NewsService, useValue: newsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    newsServiceSpy = TestBed.inject(NewsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test getTopStories() with default category "home.json"', () => {
    const serviceSpy = spyOn(newsServiceSpy, 'getNewsByCategory');
    serviceSpy.and.returnValue(of(mockHomeStoriesData));
    component.getTopStories('');
    expect(component.length).toEqual(34);
  });

  it('Test onCategoryChange() ', () => {
    const compSpy = spyOn(component, 'getTopStories');
    component.onCategoryChange('a');
    expect(component.getTopStories).toHaveBeenCalled();
    expect(component.getTopStories).toHaveBeenCalledWith('a');
  });

  it('Test formatCardData()', () => {
    let articleItem: NewsItem = 
    {
      "section": "world",
      "subsection": "americas",
      "title": "Brazil’s election officials demand answers for police stops of buses carrying voters.",
      "abstract": "There were dozens of reports on social media on Sunday that federal highway agents were stopping vehicles and questioning people in several states across Brazil.",
      "url": "https://www.nytimes.com/2022/10/30/world/americas/brazil-voters-police-elections.html",
      "uri": "nyt://article/d1ff1afa-fe56-5e13-88e1-e3eb314b0264",
      "byline": "By Ana Ionova, André Spigariol, Laís Martins and Jack Nicas",
      "item_type": "Article",
      "updated_date": "2022-10-30T15:44:42-04:00",
      "created_date": "2022-10-30T15:15:00-04:00",
      "published_date": "2022-10-30T15:15:00-04:00",
      "material_type_facet": "",
      "kicker": "",
      "des_facet": ["Elections"],
      "org_facet": [],
      "per_facet": [
        "Bolsonaro, Jair (1955- )",
        "Moraes, Alexandre de (1968- )"
      ],
      "geo_facet": ["Brazil"],
      "multimedia": [
        {
          "url": "https://static01.nyt.com/images/2022/10/30/multimedia/30brazil-morais-2-1-d4ad/30brazil-morais-2-1-d4ad-superJumbo.jpg",
          "format": "Super Jumbo",
          "height": 1365,
          "width": 2048,
          "type": "image",
          "subtype": "photo",
          "caption": "Alexandre de Moraes, a Supreme Court justice who leads Brazil’s election agency, issued an order to the Brazil’s federal highway police chief, calling on him to provide proof that his officers were not violating election rules.",
          "copyright": "Dado Galdieri for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2022/10/30/multimedia/30brazil-morais-2-1-d4ad/30brazil-morais-2-1-d4ad-threeByTwoSmallAt2X.jpg",
          "format": "threeByTwoSmallAt2X",
          "height": 400,
          "width": 600,
          "type": "image",
          "subtype": "photo",
          "caption": "Alexandre de Moraes, a Supreme Court justice who leads Brazil’s election agency, issued an order to the Brazil’s federal highway police chief, calling on him to provide proof that his officers were not violating election rules.",
          "copyright": "Dado Galdieri for The New York Times"
        },
        {
          "url": "https://static01.nyt.com/images/2022/10/30/multimedia/30brazil-morais-2-1-d4ad/30brazil-morais-2-1-d4ad-thumbLarge.jpg",
          "format": "Large Thumbnail",
          "height": 150,
          "width": 150,
          "type": "image",
          "subtype": "photo",
          "caption": "Alexandre de Moraes, a Supreme Court justice who leads Brazil’s election agency, issued an order to the Brazil’s federal highway police chief, calling on him to provide proof that his officers were not violating election rules.",
          "copyright": "Dado Galdieri for The New York Times"
        }
      ],
      "short_url": "https://nyti.ms/3SQiz88"
    };
    component.formatCardData(articleItem);
    expect(component.formatCardData).toHaveBeenCalled;
  });
});
