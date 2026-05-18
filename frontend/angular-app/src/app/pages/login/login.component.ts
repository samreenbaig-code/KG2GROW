import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

import { RouterModule } from '@angular/router';


@Component({

  selector: 'app-login',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent
implements OnInit {

  email = '';

  password = '';

  error = '';


  /* ============================= */
  /* CONSTRUCTOR */
  /* ============================= */

  constructor(
    private router: Router
  ){}


  /* ============================= */
  /* AUTO FILL SAVED EMAIL */
  /* ============================= */

  ngOnInit(){

    const savedEmail =

      localStorage.getItem(
        'savedEmail'
      );

    if(savedEmail){

      this.email = savedEmail;
    }
  }


  /* ============================= */
  /* LOGIN */
  /* ============================= */

  login(){

    /* demo login */

    if(

      this.email &&
      this.password

    ){

      /* save email */

      localStorage.setItem(

        'savedEmail',

        this.email

      );


      /* clear error */

      this.error = '';


      /* go dashboard/home */

      this.router.navigate([
        '/dashboard'
      ]);

    }

    else {

      this.error =

        'Invalid email or password.';
    }
  }


  /* ============================= */
  /* GO REGISTER */
  /* ============================= */

  goToRegister(){

    this.router.navigate([
      '/register'
    ]);
  }

}