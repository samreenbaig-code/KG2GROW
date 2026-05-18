import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-memory-level3',

  standalone: true,

  imports:[CommonModule],

  templateUrl: './memory-level3.component.html',

  styleUrls: ['./memory-level3.component.css']
})

export class MemoryLevel3Component {


  /* ============================= */
  /* CARD ARRAY */
  /* Store all memory cards */
  /* ============================= */

  cards:any[] = [];


  /* ============================= */
  /* FLIPPED CARDS */
  /* Store selected card indexes */
  /* ============================= */

  flippedCards:number[] = [];


  /* ============================= */
  /* GAME MESSAGE */
  /* Display game result/status */
  /* ============================= */

  message = "";


  /* ============================= */
  /* NEXT BUTTON STATUS */
  /* Show or hide play again button */
  /* ============================= */

  showNextBtn = false;


  /* ============================= */
  /* SHAPE IMAGES */
  /* Shape memory game images */
  /* ============================= */

  shapes = [

    '/circle.png',

    '/square.png',

    '/triangle.png',

    '/star.png',

    '/heart.png',

    '/diamond.png'
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
  /* Create shuffled memory cards */
  /* ============================= */

  startGame(){


    /* Select shape images */

    const selected =

    this.shapes.slice(0,6);


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


    /* Reset selected cards */

    this.flippedCards = [];


    /* Default message */

    this.message = "Match the shapes!";


    /* Hide play again button */

    this.showNextBtn = false;
  }


  /* ============================= */
  /* FLIP CARD */
  /* User clicks memory card */
  /* ============================= */

  flipCard(index:number){


    /* Get selected card */

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


        /* Mark cards as matched */

        this.cards[i1].matched = true;

        this.cards[i2].matched = true;


        /* Reset flipped cards */

        this.flippedCards = [];


        /* Check win condition */

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

        },700);

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


      /* Success message */

      this.message =
      "🎉 Awesome! You matched all shapes!";


      /* Show play again button */

      this.showNextBtn = true;


      /* Voice feedback */

      const speech =
      new SpeechSynthesisUtterance(
        "Amazing job!"
      );


      speech.pitch = 1.5;


      /* Speak message */

      speechSynthesis.speak(speech);
    }
  }


  /* ============================= */
  /* PLAY AGAIN */
  /* Restart memory game */
  /* ============================= */

  nextGame(){

    this.startGame();
  }

}