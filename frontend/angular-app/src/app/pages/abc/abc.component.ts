import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';

import { TopBarComponent } from '../../components/top-bar/top-bar';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-abc',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './abc.component.html',

  styleUrls: ['./abc.component.css']
})

export class Abc {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for page navigation */
  /* ============================= */

  constructor(private router: Router) {}


  /* ============================= */
  /* START LEVEL FUNCTION */
  /* Open selected ABC level */
  /* ============================= */

  startLevel(level: number) {


    /* ============================= */
    /* LEVEL 1 */
    /* Navigate to ABC Level 1 */
    /* ============================= */

    if (level === 1) {

      this.router.navigate(['/abc-level1']);
    }


    /* ============================= */
    /* LEVEL 2 */
    /* Navigate to ABC Level 2 */
    /* ============================= */

    if (level === 2) {

      this.router.navigate(['/abc-level2']);
    }


    /* ============================= */
    /* LEVEL 3 */
    /* Navigate to ABC Level 3 */
    /* ============================= */

    if (level === 3) {

      this.router.navigate(['/abc-level3']);
    }


    /* ============================= */
    /* LEVEL 4 */
    /* Navigate to ABC Level 4 */
    /* ============================= */

    if(level === 4){

      this.router.navigate(['/abc-level4']);
    }

  }

}