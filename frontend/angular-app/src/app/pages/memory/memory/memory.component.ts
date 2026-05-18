import { Component } from '@angular/core';

import { Router } from '@angular/router';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-memory',

  templateUrl: './memory.component.html',

  styleUrls: ['./memory.component.css']
})

export class MemoryComponent {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for page navigation */
  /* ============================= */

  constructor(private router: Router) {}


  /* ============================= */
  /* OPEN MEMORY LEVEL */
  /* Navigate to selected level */
  /* ============================= */

  goToLevel(level:number){


    /* ============================= */
    /* LEVEL 1 */
    /* Animal memory game */
    /* ============================= */

    if(level === 1){

      this.router.navigate(['/memory-level1']);
    }


    /* ============================= */
    /* LEVEL 2 */
    /* Fruit memory game */
    /* ============================= */

    if(level === 2){

      this.router.navigate(['/memory-level2']);
    }


    /* ============================= */
    /* LEVEL 3 */
    /* Shape memory game */
    /* ============================= */

    if(level === 3){

      this.router.navigate(['/memory-level3']);
    }

  }

}