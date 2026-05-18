import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule, Router } from '@angular/router';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-abc-level2',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './abc-level2.component.html',

  styleUrls: ['./abc-level2.component.css']
})

export class AbcLevel2Component {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for navigation */
  /* ============================= */

  constructor(private router: Router){}


  /* ============================= */
  /* GO HOME */
  /* Navigate to dashboard */
  /* ============================= */

  goHome(){

    this.router.navigate(['/dashboard']);
  }


  /* ============================= */
  /* ALPHABET LIST */
  /* Convert A-Z into array */
  /* ============================= */

  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


  /* ============================= */
  /* CURRENT LETTER INDEX */
  /* Start game from letter B */
  /* ============================= */

  currentIndex = 1;


  /* ============================= */
  /* TARGET LETTER */
  /* Letter user must find */
  /* ============================= */

  targetLetter = this.alphabet[this.currentIndex];


  /* ============================= */
  /* PLAYER SCORE */
  /* ============================= */

  score = 0;


  /* ============================= */
  /* BALLOON SPACING */
  /* Distance between balloons */
  /* ============================= */

  spacing = window.innerWidth / 7;


  /* ============================= */
  /* SOUND EFFECTS */
  /* ============================= */

  popSound = new Audio('/sounds/pop.mp3');

  wrongSound = new Audio('/sounds/wrong.mp3');


  /* ============================= */
  /* BALLOON IMAGES */
  /* Different balloon colors */
  /* ============================= */

  balloonImages: string[] = [

    '/balloons/orange.png',

    '/balloons/green.png',

    '/balloons/blue.png',

    '/balloons/yellow.png',

    '/balloons/red.png'
  ];


  /* ============================= */
  /* BALLOON ARRAY */
  /* Stores all balloons */
  /* ============================= */

  bubbles: any[] = [];


  /* ============================= */
  /* ON INIT */
  /* Create first balloons */
  /* ============================= */

  ngOnInit() {

    this.createInitialBubbles();
  }


  /* ============================= */
  /* CREATE FIRST BALLOONS */
  /* Add balloons on screen */
  /* ============================= */

  createInitialBubbles() {


    /* Create 6 balloons */

    for (let i = 0; i < 6; i++) {

      this.bubbles.push(this.createBubble(i));
    }


    /* Ensure one correct letter exists */

    this.bubbles[0].letter = this.targetLetter;
  }


  /* ============================= */
  /* CREATE SINGLE BALLOON */
  /* ============================= */

  createBubble(index:number) {


    return {


      /* Random alphabet letter */

      letter: this.alphabet[
        Math.floor(Math.random() * this.alphabet.length)
      ],


      /* Random balloon image */

      image: this.balloonImages[
        Math.floor(Math.random() * this.balloonImages.length)
      ],


      /* Balloon horizontal position */

      left: (index * this.spacing + 50) + 'px',


      /* Random animation delay */

      delay: Math.random() * 3,


      /* Balloon status */

      status: ''
    };
  }


  /* ============================= */
  /* POP BALLOON */
  /* Check if selected letter is correct */
  /* ============================= */

  popBubble(bubble:any, index:number) {


    /* ============================= */
    /* CORRECT LETTER */
    /* ============================= */

    if (bubble.letter === this.targetLetter) {


      /* Play pop sound */

      this.popSound.currentTime = 0;

      this.popSound.play();


      /* Increase score */

      this.score++;


      /* Show correct animation */

      bubble.status = 'correct';


      /* Remove balloon */

      setTimeout(()=>{

        this.bubbles.splice(index,1);


        /* Add new balloon */

        this.bubbles.push(
          this.createBubble(this.bubbles.length)
        );

      },400);


      /* Move to next letter */

      this.nextLetter();
    }


    /* ============================= */
    /* WRONG LETTER */
    /* ============================= */

    else {


      /* Play wrong sound */

      this.wrongSound.currentTime = 0;

      this.wrongSound.play();


      /* Show wrong effect */

      bubble.status = 'wrong';


      /* Remove wrong effect */

      setTimeout(() => {

        bubble.status = '';

      }, 800);
    }
  }


  /* ============================= */
  /* NEXT LETTER */
  /* Move to next alphabet */
  /* ============================= */

  nextLetter() {


    /* Increase alphabet index */

    this.currentIndex++;


    /* ============================= */
    /* FINISH GAME */
    /* ============================= */

    if(this.currentIndex >= this.alphabet.length){


      /* Show success message */

      alert("🎉 Amazing! You finished the alphabet!");


      /* Reset game */

      this.currentIndex = 0;

      this.score = 0;
    }


    /* Update target letter */

    this.targetLetter =
    this.alphabet[this.currentIndex];


    /* ============================= */
    /* ENSURE CORRECT LETTER EXISTS */
    /* ============================= */

    const randomIndex =

      Math.floor(
        Math.random() * this.bubbles.length
      );


    /* Replace random balloon letter */

    this.bubbles[randomIndex].letter =
    this.targetLetter;
  }

}