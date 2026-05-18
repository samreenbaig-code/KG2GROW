import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-number-level2',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './number-level2.component.html',

  styleUrls: ['./number-level2.component.css']
})

export class NumberLevel2Component {


  /* ============================= */
  /* OBJECT TYPES */
  /* Fruit image names */
  /* ============================= */

  objectTypes = [

    'apple',

    'banana',

    'strawberry',

    'grapes'
  ];


  /* ============================= */
  /* CURRENT OBJECT */
  /* Selected fruit type */
  /* ============================= */

  currentObject = 'apple';


  /* ============================= */
  /* OBJECT ARRAY */
  /* Stores objects to display */
  /* ============================= */

  objects:number[] = [];


  /* ============================= */
  /* CORRECT ANSWER */
  /* Number of displayed objects */
  /* ============================= */

  correctAnswer = 0;


  /* ============================= */
  /* ANSWER OPTIONS */
  /* Number buttons */
  /* ============================= */

  options:number[] = [];


  /* ============================= */
  /* RESULT MESSAGE */
  /* Show correct/wrong result */
  /* ============================= */

  message = "";


  /* ============================= */
  /* STAR ANIMATION */
  /* Show celebration stars */
  /* ============================= */

  showStars = false;


  /* ============================= */
  /* CONSTRUCTOR */
  /* Start game automatically */
  /* ============================= */

  constructor(){

    this.generateGame();
  }


  /* ============================= */
  /* GENERATE GAME */
  /* Create random counting game */
  /* ============================= */

  generateGame(){


    /* ============================= */
    /* RANDOM FRUIT */
    /* Choose random object */
    /* ============================= */

    this.currentObject = this.objectTypes[

      Math.floor(
        Math.random() * this.objectTypes.length
      )
    ];


    /* ============================= */
    /* RANDOM OBJECT COUNT */
    /* Number between 1 and 4 */
    /* ============================= */

    this.correctAnswer =

    Math.floor(Math.random() * 4) + 1;


    /* ============================= */
    /* CREATE OBJECTS */
    /* Fill array with objects */
    /* ============================= */

    this.objects =

    Array(this.correctAnswer).fill(0);


    /* ============================= */
    /* CREATE ANSWER OPTIONS */
    /* Random answer buttons */
    /* ============================= */

    this.options = [

      this.correctAnswer,

      this.correctAnswer + 1,

      this.correctAnswer - 1

    ]

    .filter(n => n > 0)

    .sort(() => Math.random() - 0.5);


    /* Clear message */

    this.message = "";

  }


  /* ============================= */
  /* CHECK ANSWER */
  /* Verify selected number */
  /* ============================= */

  checkAnswer(num:number){


    /* ============================= */
    /* CORRECT ANSWER */
    /* ============================= */

    if(num === this.correctAnswer){


      /* Success message */

      this.message = "Great job! 🎉";


      /* Show stars */

      this.showStars = true;


      /* Voice feedback */

      const speech =

      new SpeechSynthesisUtterance(
        "Great job"
      );


      speech.pitch = 1.6;


      /* Speak message */

      speechSynthesis.speak(speech);


      /* ============================= */
      /* HIDE STARS */
      /* Remove animation later */
      /* ============================= */

      setTimeout(()=>{

        this.showStars = false;

      },2000);

    }


    /* ============================= */
    /* WRONG ANSWER */
    /* ============================= */

    else{


      /* Error message */

      this.message = "Try again";


      /* Voice feedback */

      const speech =

      new SpeechSynthesisUtterance(
        "Try again"
      );


      /* Speak message */

      speechSynthesis.speak(speech);

    }

  }


  /* ============================= */
  /* NEXT GAME */
  /* Generate new counting game */
  /* ============================= */

  nextGame(){

    this.generateGame();

  }

}