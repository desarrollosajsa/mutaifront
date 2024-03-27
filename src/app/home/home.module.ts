import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantillaModule } from '../plantilla/plantilla.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PlantillaModule
  ],
  exports: [
    DashboardComponent,
    HomeComponent
  ]
})
export class HomeModule { }
