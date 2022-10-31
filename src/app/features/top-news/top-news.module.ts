import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './components/news/news.component';
import { TopNewsRoutingModule } from './top-news-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { TopNewsContainerComponent } from './components/top-news-container/top-news-container.component';
import { CategoryFilterComponent } from 'src/app/shared/components/category-filter/category-filter.component';
import { CardsModule } from 'src/app/shared/modules/cards/cards.module';
@NgModule({
  declarations: [
    TopNewsContainerComponent,
    NewsComponent,
    CategoryFilterComponent,
  ],
  imports: [
    CommonModule,
    TopNewsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    CardsModule,
  ],
})
export class TopNewsModule {}
