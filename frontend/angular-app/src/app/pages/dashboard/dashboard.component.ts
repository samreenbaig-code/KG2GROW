import { Component } from '@angular/core';

import { Router } from '@angular/router';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-dashboard',

  standalone: true,

  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for page navigation */
  /* ============================= */

  constructor(private router: Router) {}


  /* ============================= */
  /* OPEN GAME PAGE */
  /* Navigate to selected page */
  /* ============================= */

  goToPage(page: string) {

    this.router.navigate([`/${page}`]);
  }


  /* ============================= */
  /* GO HOME */
  /* Navigate to home page */
  /* ============================= */

  goHome(){

    this.router.navigate(['/home']);
  }


  /* ============================= */
  /* OPEN NUMBER SECTION */
  /* Navigate to number game */
  /* ============================= */

  openNumber(){

    this.router.navigate(['/number']);
  }


  /* ============================= */
  /* OPEN COLOR QUEST */
  /* Navigate to color game */
  /* ============================= */

  goToColorQuest(){

    this.router.navigate(['/color']);
  }


  /* ============================= */
  /* OPEN MEMORY MATCH */
  /* Navigate to memory game */
  /* ============================= */

  goToMemoryMatch(){

    this.router.navigate(['/memory-match']);
  }

}