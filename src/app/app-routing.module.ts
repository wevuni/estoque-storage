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
    path: 'listagem',
    loadChildren: () => import('./listagem/entrada/listagem.module').then( m => m.ListagemPageModule)
  },
  {
    path: 'detalhes/:id',
    loadChildren: () => import('./detalhes/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'listagem1',
    loadChildren: () => import('./listagem1/listagem1/listagem1.module').then( m => m.Listagem1PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
