import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-puzzle-level3',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './puzzle-level3.html',

  styleUrls: ['./puzzle-level3.css']
})

export class PuzzleLevel3Component {


  /* ============================= */
  /* CURRENT LEVEL INDEX */
  /* Track active puzzle level */
  /* ============================= */

  level = 0;


  /* ============================= */
  /* RESULT MESSAGE */
  /* Show correct/wrong message */
  /* ============================= */

  message = '';


  /* ============================= */
  /* NEXT BUTTON STATUS */
  /* Show next button after success */
  /* ============================= */

  showNextBtn = false;


  /* ============================= */
  /* DRAGGED LETTER */
  /* Store selected letter */
  /* ============================= */

  draggedLetter = '';


  /* ============================= */
  /* WORD PUZZLE LEVELS */
  /* Game data for each word */
  /* ============================= */

  words = [


    /* ============================= */
    /* APPLE LEVEL */
    /* ============================= */

    {

      word: 'APPLE',

      missing: 'P',

      display: 'A _ P L E',

      emoji: '🍎',

      options: ['P', 'B', 'T']
    },


    /* ============================= */
    /* DOG LEVEL */
    /* ============================= */

    {

      word: 'DOG',

      missing: 'O',

      display: 'D _ G',

      emoji: '🐶',

      options: ['A', 'O', 'E']
    },


    /* ============================= */
    /* CAT LEVEL */
    /* ============================= */

    {

      word: 'CAT',

      missing: 'A',

      display: 'C _ T',

      emoji: '🐱',

      options: ['U', 'A', 'O']
    }

  ];


  /* ============================= */
  /* CURRENT LEVEL DATA */
  /* Return active puzzle object */
  /* ============================= */

  get current(){

    return this.words[this.level];
  }


  /* ============================= */
  /* DRAG LETTER */
  /* Save dragged letter */
  /* ============================= */

  drag(letter:string){

    this.draggedLetter = letter;
  }


  /* ============================= */
  /* ALLOW DROP */
  /* Enable dropping */
  /* ============================= */

  allowDrop(event:any){

    event.preventDefault();
  }


  /* ============================= */
  /* DROP LETTER */
  /* Check dropped answer */
  /* ============================= */

  drop(event:any){


    /* Prevent browser action */

    event.preventDefault();


    /* ============================= */
    /* CORRECT LETTER */
    /* ============================= */

    if(this.draggedLetter === this.current.missing){


      /* Show completed letter */

      this.draggedLetter =

      this.current.missing;


      /* Success message */

      this.message =

        `🎉 ${this.current.word}
        ${this.current.emoji}`;


      /* Show next button */

      this.showNextBtn = true;


      /* ============================= */
      /* SPEAK WORD */
      /* Voice pronunciation */
      /* ============================= */

      const speech =

        new SpeechSynthesisUtterance(

          this.current.word
        );


      /* Voice settings */

      speech.pitch = 1.3;

      speech.rate = 0.9;


      /* Speak word */

      speechSynthesis.speak(speech);

    }


    /* ============================= */
    /* WRONG LETTER */
    /* ============================= */

    else {


      /* Error message */

      this.message =

      '❌ Try Again';


      /* Remove message later */

      setTimeout(()=>{

        this.message = '';

      },1000);
    }
  }


  /* ============================= */
  /* NEXT LEVEL */
  /* Open next word puzzle */
  /* ============================= */

  next(){


    /* Move to next level */

    this.level++;


    /* Restart after last level */

    if(this.level >= this.words.length){

      this.level = 0;
    }


    /* Reset values */

    this.message = '';

    this.showNextBtn = false;

    this.draggedLetter = '';
  }

}