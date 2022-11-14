import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listagem1Page } from './listagem1.page';

const routes: Routes = [
  {
    path: '',
    component: Listagem1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listagem1PageRoutingModule {}
