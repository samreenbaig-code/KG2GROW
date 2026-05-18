import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-account',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './account.component.html',

  styleUrls: ['./account.component.css']
})

export class AccountComponent {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for page navigation */
  /* ============================= */

  constructor(private router: Router) {}


  /* ============================= */
  /* SELECT PARENT */
  /* Open login page for parent */
  /* ============================= */

  selectParent() {

    this.router.navigate(['/login']);
  }


  /* ============================= */
  /* SELECT KID */
  /* Open login page for kid */
  /* ============================= */

  selectKid() {

    this.router.navigate(['/login']);
  }

}