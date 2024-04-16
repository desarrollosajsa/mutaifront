import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { PlantillaModule } from '../plantilla/plantilla.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlantillaModule
  ]
})
export class UserModule { }
