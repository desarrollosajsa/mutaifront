import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { CasoComponent } from './caso/caso/caso.component';
import { CustomerDetailComponent } from './home/detail/customer-detail/customer-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'caso', component: CasoComponent},
  { path: 'customer-detail/:id', component: CustomerDetailComponent},
  { path: 'users', component: UserListComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
