import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listagem1PageRoutingModule } from './listagem1-routing.module';

import { Listagem1Page } from './listagem1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listagem1PageRoutingModule
  ],
  declarations: [Listagem1Page]
})
export class Listagem1PageModule {}
