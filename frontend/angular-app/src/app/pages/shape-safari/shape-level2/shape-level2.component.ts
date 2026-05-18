import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-shape-level2',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './shape-level2.component.html',

  styleUrls: ['./shape-level2.component.css']
})

export class ShapeLevel2Component {


  /* ============================= */
  /* SELECTED COLOR */
  /* Store chosen paint color */
  /* ============================= */

  selectedColor: string = '';


  /* ============================= */
  /* COLOR STATUS */
  /* Check if shape painted */
  /* ============================= */

  isColored: boolean = false;


  /* ============================= */
  /* SPARKLE EFFECT */
  /* Show animation after coloring */
  /* ============================= */

  showSparkle: boolean = false;


  /* ============================= */
  /* SHAPE LIST */
  /* Shapes for coloring game */
  /* ============================= */

  shapes = [

    'circle',

    'square',

    'triangle',

    'heart',

    'star'
  ];


  /* ============================= */
  /* CURRENT SHAPE INDEX */
  /* Track active shape */
  /* ============================= */

  currentIndex = 0;


  /* ============================= */
  /* CURRENT SHAPE */
  /* Return active shape name */
  /* ============================= */

  get currentShape(){

    return this.shapes[this.currentIndex];
  }


  /* ============================= */
  /* SELECT COLOR */
  /* Save selected palette color */
  /* ============================= */

  selectColor(color:string){

    this.selectedColor = color;
  }


  /* ============================= */
  /* PAINT SHAPE */
  /* Fill shape with selected color */
  /* ============================= */

  paintShape(){


    /* Only paint if color selected */

    if(this.selectedColor){


      /* Enable colored status */

      this.isColored = true;


      /* ============================= */
      /* SPEAK SHAPE NAME */
      /* Voice feedback */
      /* ============================= */

      const msg =

      new SpeechSynthesisUtterance(

        this.currentShape
      );


      /* Speak shape */

      speechSynthesis.speak(msg);


      /* ============================= */
      /* SPARKLE ANIMATION */
      /* ============================= */

      this.showSparkle = true;


      /* Hide sparkle after delay */

      setTimeout(()=>{

        this.showSparkle = false;

      },1000);

    }

  }


  /* ============================= */
  /* NEXT SHAPE */
  /* Open next coloring shape */
  /* ============================= */

  nextShape(){


    /* Move to next shape */

    if(this.currentIndex < this.shapes.length - 1){


      this.currentIndex++;


      /* Reset color selection */

      this.selectedColor = '';


      /* Reset paint status */

      this.isColored = false;

    }


    /* ============================= */
    /* ALL SHAPES COMPLETE */
    /* ============================= */

    else{


      alert(

        "Great Job! ⭐ You finished all shapes!"
      );

    }

  }

}