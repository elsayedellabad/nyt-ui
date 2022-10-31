import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import { SearchRoutingModule } from './search-routing.module';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchComponent } from './components/search/search.component';
import { FiltersComponent } from './filters/filters.component';
import { CardsModule } from 'src/app/shared';

@NgModule({
  declarations: [
    SearchComponent,
    SearchContainerComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSelectModule,
    CardsModule
  ]
})
export class SearchModule { }
