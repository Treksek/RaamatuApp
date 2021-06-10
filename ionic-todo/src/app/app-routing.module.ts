import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnboardingGuard } from './guards/onboarding.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [OnboardingGuard],
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    
  },
  
 
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'edit-todo',
    loadChildren: () => import('./edit-todo/edit-todo.module').then( m => m.EditTodoPageModule)
  },
  {
    path: 'edit-todo/:id',
    loadChildren: () => import('./edit-todo/edit-todo.module').then( m => m.EditTodoPageModule)
      
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }