import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-puzzle',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './puzzle.html',

  styleUrls: ['./puzzle.css']
})

export class PuzzleComponent {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for page navigation */
  /* ============================= */

  constructor(private router: Router){}


  /* ============================= */
  /* GO TO LEVEL */
  /* Open selected puzzle level */
  /* ============================= */

  goToLevel(level:number){


    /* ============================= */
    /* LEVEL 1 */
    /* Animal puzzle game */
    /* ============================= */

    if(level === 1){

      this.router.navigate(['/puzzle-level1']);
    }


    /* ============================= */
    /* LEVEL 2 */
    /* Shape puzzle game */
    /* ============================= */

    if(level === 2){

      this.router.navigate(['/puzzle-level2']);
    }


    /* ============================= */
    /* LEVEL 3 */
    /* Alphabet puzzle game */
    /* ============================= */

    if(level === 3){

      this.router.navigate(['/puzzle-level3']);
    }

  }

}
