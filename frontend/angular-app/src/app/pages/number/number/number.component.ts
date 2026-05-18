import { Component } from '@angular/core';

import { Router } from '@angular/router';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-number',

  standalone: true,

  templateUrl: './number.component.html',

  styleUrls: ['./number.component.css']
})

export class NumberComponent {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for page navigation */
  /* ============================= */

  constructor(private router: Router) {}


  /* ============================= */
  /* START LEVEL */
  /* Open selected number level */
  /* ============================= */

  startLevel(level:number){


    /* ============================= */
    /* LEVEL 1 */
    /* Learn numbers game */
    /* ============================= */

    if(level === 1){

      this.router.navigate(['/number-level1'])
    }


    /* ============================= */
    /* LEVEL 2 */
    /* Count objects game */
    /* ============================= */

    if(level === 2){

      this.router.navigate(['/number-level2'])
    }


    /* ============================= */
    /* LEVEL 3 */
    /* Simple math game */
    /* ============================= */

    if(level === 3){

      this.router.navigate(['/number-level3'])
    }


    /* ============================= */
    /* LEVEL 4 */
    /* Number tracing game */
    /* ============================= */

    if(level === 4){

      this.router.navigate(['/number-level4'])
    }

  }

}