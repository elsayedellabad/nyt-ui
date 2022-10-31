import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNewsContainerComponent } from './components/top-news-container/top-news-container.component';
import { NewsComponent } from './components/news/news.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'nytimes/news',
    pathMatch: 'full',
  },
  {
    path: 'nytimes',
    component: TopNewsContainerComponent,
    children: [
      {
        path: 'news',
        component: NewsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopNewsRoutingModule {}
