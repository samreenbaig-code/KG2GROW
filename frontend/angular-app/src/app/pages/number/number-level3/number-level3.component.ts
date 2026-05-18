import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-number-level3',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './number-level3.component.html',

  styleUrls: ['./number-level3.component.css']
})

export class NumberLevel3Component {


  /* ============================= */
  /* FIRST NUMBER */
  /* ============================= */

  num1 = 0;


  /* ============================= */
  /* SECOND NUMBER */
  /* ============================= */

  num2 = 0;


  /* ============================= */
  /* MATH OPERATOR */
  /* + or - */
  /* ============================= */

  operator = '+';


  /* ============================= */
  /* CORRECT ANSWER */
  /* ============================= */

  correctAnswer = 0;


  /* ============================= */
  /* ANSWER OPTIONS */
  /* Multiple choice answers */
  /* ============================= */

  options: number[] = [];


  /* ============================= */
  /* RESULT MESSAGE */
  /* Show correct/wrong message */
  /* ============================= */

  message = "";


  /* ============================= */
  /* ANSWER DISPLAY */
  /* Show hidden answer */
  /* ============================= */

  showAnswer = false;


  /* ============================= */
  /* CONSTRUCTOR */
  /* Generate first question */
  /* ============================= */

  constructor() {

    this.generateQuestion();
  }


  /* ============================= */
  /* GENERATE QUESTION */
  /* Create random math question */
  /* ============================= */

  generateQuestion() {


    /* ============================= */
    /* EASY MATH QUESTIONS */
    /* ============================= */

    const tricks = [

      { a:1,b:1,op:'+'},

      { a:2,b:1,op:'+'},

      { a:1,b:2,op:'+'},

      { a:3,b:1,op:'-'},

      { a:4,b:2,op:'-'},

      { a:2,b:2,op:'+'},

      { a:5,b:3,op:'-'},

      { a:3,b:1,op:'+'},

      { a:4,b:1,op:'-'},

      { a:5,b:2,op:'-'}
    ];


    /* ============================= */
    /* RANDOM QUESTION */
    /* ============================= */

    const random =

    tricks[
      Math.floor(
        Math.random() * tricks.length
      )
    ];


    /* Set values */

    this.num1 = random.a;

    this.num2 = random.b;

    this.operator = random.op;


    /* ============================= */
    /* CALCULATE ANSWER */
    /* ============================= */

    if (this.operator === '+') {

      this.correctAnswer =
      this.num1 + this.num2;

    }

    else {

      this.correctAnswer =
      this.num1 - this.num2;
    }


    /* ============================= */
    /* CREATE ANSWER OPTIONS */
    /* ============================= */

    this.options = [

      this.correctAnswer,

      this.correctAnswer + 1,

      this.correctAnswer - 1
    ]

    .filter(n => n >= 0)

    .sort(() => Math.random() - 0.5);


    /* Reset message */

    this.message = "";


    /* Hide answer */

    this.showAnswer = false;

  }


  /* ============================= */
  /* CHECK ANSWER */
  /* Verify selected answer */
  /* ============================= */

  checkAnswer(num:number){


    /* ============================= */
    /* CORRECT ANSWER */
    /* ============================= */

    if(num === this.correctAnswer){


      /* Success message */

      this.message = "Great job! 🎉";


      /* Show answer */

      this.showAnswer = true;


      /* Voice feedback */

      const speech =

      new SpeechSynthesisUtterance(

        this.num1 +

        " " +

        this.operator +

        " " +

        this.num2 +

        " equals " +

        this.correctAnswer
      );


      /* Voice settings */

      speech.pitch = 1.4;


      /* Speak answer */

      speechSynthesis.speak(speech);

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
  /* NEXT QUESTION */
  /* Generate another math problem */
  /* ============================= */

  nextQuestion(){

    this.generateQuestion();

  }

}