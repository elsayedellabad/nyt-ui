import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nytimes',
    pathMatch: 'full'
  },
  {
    path: 'nytimes',
    component: SearchContainerComponent,
    children: [
      {
        path: 'articles',
        component: SearchComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
