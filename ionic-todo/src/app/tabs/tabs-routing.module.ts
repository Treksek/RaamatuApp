import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { OnboardingGuard } from '../guards/onboarding.guard';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () => import('../intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'edit-todo',
    loadChildren: () => import('../edit-todo/edit-todo.module').then( m => m.EditTodoPageModule)
  },
  {
    path: 'edit-todo/:id',
    loadChildren: () => import('../edit-todo/edit-todo.module').then( m => m.EditTodoPageModule)
      
    
  },
    
  {
    path: 'tabs',
    canActivate: [OnboardingGuard],
    component: TabsPage,
    children: [
    
      {
        path: 'home',
        children: [
          {
            path: '', loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'add-todo',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../add-todo/add-todo.module').then(m => m.AddTodoPageModule)
          }
        ]
      },
      
      {
        path: 'search',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../search/search.module').then(m => m.SearchPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}