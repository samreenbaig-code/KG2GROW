import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';


@Component({

  selector: 'app-register',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule
  ],

  templateUrl: './register.html',

  styleUrls: ['./register.css']

})

export class RegisterComponent {

  name = '';

  email = '';

  password = '';

  message = '';

  constructor(
    private http: HttpClient
  ){}

  register(){

  this.http.post(
  'http://localhost/clevercubs-web/backend/auth/register.php',

    {

      name: this.name,

      email: this.email,

      password: this.password

    }

  ).subscribe((res:any)=>{

    console.log(res);

    if(res.success){

      this.message = "🎉 Account Created!";

      alert("Account Created!");

    }else{

      this.message = "❌ Register failed";

      alert("Register failed");

    }

  });

}
}