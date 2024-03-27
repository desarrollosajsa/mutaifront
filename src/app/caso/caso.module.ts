import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasoComponent } from './caso/caso.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    CasoComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    CasoComponent
  ]
})
export class CasoModule { }
