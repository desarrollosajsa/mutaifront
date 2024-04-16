import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{

  title = 'Lista de usuarios';
  resp: any;
  users: any;
  formData = {
    first_name: '',
    last_name: '',
    password: '',
    email: ''
  };


  constructor(private _servUser: UserService) {
    this.getUsers();
  }

  getUsers() {
    this._servUser.getUsers(localStorage.getItem("token")).subscribe((resp) => {
      this.resp = resp;
      if (this.resp.status == 200) {
        this.users = this.resp.data;
      } else {
        alert(this.resp.message);
      }
    })
  }

  onSubmit() {
    console.log(this.formData);
    this._servUser.postUsersCreate(localStorage.getItem("token"), this.formData).subscribe((resp) => {
      this.resp = resp;
      if (this.resp.status == 200) {
        this.getUsers();
        alert('Usuario creado con exito');
        this.formData.email = '';
        this.formData.first_name = '';
        this.formData.last_name = '';
        this.formData.password = '';


      } else {
        alert(this.resp.message);
      }
    })

  }

}
