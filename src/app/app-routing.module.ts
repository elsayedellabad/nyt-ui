import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AuthGuard, PageNotFoundComponent } from './core';

const appRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/top-news/top-news.module').then(
        (m) => m.TopNewsModule
      ),
  },
  {
    path: 'auth',
    canActivate: [],
    loadChildren: () =>
      import('./features/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'topnews',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/top-news/top-news.module').then(
        (m) => m.TopNewsModule
      ),
  },
  {
    path: 'search',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/search/search.module').then((m) => m.SearchModule),
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
