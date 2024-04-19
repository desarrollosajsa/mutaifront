import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    FormsModule
  ],
  providers: [
    MessageService
  ],
})
export class LoginModule { }
