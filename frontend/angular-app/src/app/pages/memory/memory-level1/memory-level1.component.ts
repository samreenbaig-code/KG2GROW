import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-memory-level1',

  standalone: true,

  imports:[CommonModule],

  templateUrl: './memory-level1.component.html',

  styleUrls: ['./memory-level1.component.css']
})

export class MemoryLevel1Component {


  /* ============================= */
  /* CARD ARRAY */
  /* Stores all memory cards */
  /* ============================= */

  cards:any[] = [];


  /* ============================= */
  /* FLIPPED CARDS */
  /* Store selected card indexes */
  /* ============================= */

  flippedCards:number[] = [];


  /* ============================= */
  /* GAME MESSAGE */
  /* Show game status */
  /* ============================= */

  message = "";


  /* ============================= */
  /* CURRENT LEVEL */
  /* ============================= */

  level = 1;


  /* ============================= */
  /* MAXIMUM LEVEL */
  /* ============================= */

  maxLevel = 3;


  /* ============================= */
  /* NEXT BUTTON STATUS */
  /* Show or hide next button */
  /* ============================= */

  showNextBtn = false;


  /* ============================= */
  /* ANIMAL IMAGES */
  /* Memory game images */
  /* ============================= */

  allImages = [

    '/cat.png',

    '/dog.png',

    '/fox.png',

    '/parrot.png',

    '/panda.png',

    '/rabbit.png',

    '/bear.png',

    '/bird.png'
  ];


  /* ============================= */
  /* CONSTRUCTOR */
  /* Start game automatically */
  /* ============================= */

  constructor(){

    this.startGame();
  }


  /* ============================= */
  /* START GAME */
  /* Create cards based on level */
  /* ============================= */

  startGame(){


    /* Default pair count */

    let pairCount = 4;


    /* ============================= */
    /* LEVEL SETTINGS */
    /* ============================= */

    if(this.level === 1)

      pairCount = 4;

    else if(this.level === 2)

      pairCount = 6;

    else

      pairCount = 8;


    /* Select images */

    const selected =
    this.allImages.slice(0, pairCount);


    /* Duplicate images for matching */

    let temp = [...selected, ...selected];


    /* Shuffle cards */

    temp = temp.sort(
      () => Math.random() - 0.5
    );


    /* Create card objects */

    this.cards = temp.map(img => ({

      image: img,

      flipped: false,

      matched: false
    }));


    /* Reset flipped cards */

    this.flippedCards = [];


    /* Level message */

    this.message = `Level ${this.level}`;


    /* Hide next button */

    this.showNextBtn = false;
  }


  /* ============================= */
  /* FLIP CARD */
  /* User clicks a card */
  /* ============================= */

  flipCard(index:number){


    /* Current card */

    const card = this.cards[index];


    /* Stop invalid clicks */

    if(

      card.flipped ||

      card.matched ||

      this.flippedCards.length === 2
    ){

      return;
    }


    /* Flip card */

    card.flipped = true;


    /* Save selected card */

    this.flippedCards.push(index);


    /* ============================= */
    /* CHECK TWO CARDS */
    /* ============================= */

    if(this.flippedCards.length === 2){


      /* Get selected indexes */

      const [i1, i2] = this.flippedCards;


      /* ============================= */
      /* MATCH FOUND */
      /* ============================= */

      if(

        this.cards[i1].image ===
        this.cards[i2].image
      ){


        /* Mark as matched */

        this.cards[i1].matched = true;

        this.cards[i2].matched = true;


        /* Reset selected cards */

        this.flippedCards = [];


        /* Check win */

        this.checkWin();
      }


      /* ============================= */
      /* WRONG MATCH */
      /* ============================= */

      else {


        /* Flip cards back */

        setTimeout(()=>{

          this.cards[i1].flipped = false;

          this.cards[i2].flipped = false;

          this.flippedCards = [];

        },800);

      }

    }

  }


  /* ============================= */
  /* WIN CHECK */
  /* Check if all cards matched */
  /* ============================= */

  checkWin(){


    /* Check all cards */

    const allMatched =

    this.cards.every(c => c.matched);


    /* ============================= */
    /* PLAYER WINS */
    /* ============================= */

    if(allMatched){


      /* Show success message */

      this.message = "🎉 Great job!";


      /* Show next level button */

      this.showNextBtn = true;


      /* Voice message */

      const speech =
      new SpeechSynthesisUtterance(
        "Great job!"
      );


      speech.pitch = 1.5;


      /* Speak message */

      speechSynthesis.speak(speech);

    }

  }


  /* ============================= */
  /* NEXT LEVEL */
  /* Open next memory level */
  /* ============================= */

  nextLevel(){


    /* ============================= */
    /* MOVE TO NEXT LEVEL */
    /* ============================= */

    if(this.level < this.maxLevel){


      /* Increase level */

      this.level++;


      /* Restart game */

      this.startGame();

    }


    /* ============================= */
    /* GAME COMPLETE */
    /* ============================= */

    else {


      /* Show finish message */

      this.message =
      "🏆 You finished all levels!";


      /* Hide next button */

      this.showNextBtn = false;

    }

  }


  /* ============================= */
  /* FINISH GAME */
  /* End current game */
  /* ============================= */

  finishGame(){


    /* Show finish message */

    this.message =
    "👋 Game Finished! Great job!";


    /* Remove cards */

    this.cards = [];


    /* Hide next button */

    this.showNextBtn = false;


    /* Voice message */

    const speech =
    new SpeechSynthesisUtterance(
      "Game finished"
    );


    /* Speak message */

    speechSynthesis.speak(speech);

  }

}