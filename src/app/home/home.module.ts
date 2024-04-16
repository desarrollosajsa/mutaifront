import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlantillaModule } from '../plantilla/plantilla.module';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerDetailComponent } from './detail/customer-detail/customer-detail.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule,
    PlantillaModule
  ],
  exports: [
    DashboardComponent,
    HomeComponent
  ]
})
export class HomeModule { }
