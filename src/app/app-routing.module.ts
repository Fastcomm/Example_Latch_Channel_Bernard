import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./login/components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./channels/components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/components/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'channels.component',
    loadChildren: () => import('./channels/components/channels.component/channels.component.module').then( m => m.Channels.ComponentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
