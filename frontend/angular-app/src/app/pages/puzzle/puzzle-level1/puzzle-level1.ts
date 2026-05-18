import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-puzzle-level1',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './puzzle-level1.html',

  styleUrls: ['./puzzle-level1.css']
})

export class PuzzleLevel1Component {


  /* ============================= */
  /* RESULT MESSAGE */
  /* Show game status message */
  /* ============================= */

  message = "";


  /* ============================= */
  /* PLACED PUZZLE ARRAY */
  /* 2x2 puzzle board */
  /* ============================= */

  placed: any[] = new Array(4).fill(null);


  /* ============================= */
  /* ORIGINAL PUZZLE PIECES */
  /* Correct puzzle images */
  /* ============================= */

  originalCards = [

    { id: 0, src: '/p1.png' },

    { id: 1, src: '/p2.png' },

    { id: 2, src: '/p3.png' },

    { id: 3, src: '/p4.png' }
  ];


  /* ============================= */
  /* ACTIVE SHUFFLED PIECES */
  /* Puzzle pieces shown to player */
  /* ============================= */

  pieces: any[] = [];


  /* ============================= */
  /* DRAGGED PUZZLE PIECE */
  /* Store selected piece */
  /* ============================= */

  draggedPiece: any = null;


  /* ============================= */
  /* CONSTRUCTOR */
  /* Start game automatically */
  /* ============================= */

  constructor() {

    this.startGame();
  }


  /* ============================= */
  /* START GAME */
  /* Reset and shuffle puzzle */
  /* ============================= */

  startGame() {


    /* Reset board */

    this.placed = new Array(4).fill(null);


    /* Clear message */

    this.message = "";


    /* ============================= */
    /* SHUFFLE PUZZLE PIECES */
    /* Clone original array */
    /* ============================= */

    this.pieces =

    [...this.originalCards]

    .sort(() => Math.random() - 0.5);
  }


  /* ============================= */
  /* DRAG FUNCTION */
  /* Save dragged puzzle piece */
  /* ============================= */

  drag(event: any, piece: any) {

    this.draggedPiece = piece;
  }


  /* ============================= */
  /* ALLOW DROP */
  /* Enable dropping on board */
  /* ============================= */

  allowDrop(event: any) {

    event.preventDefault();
  }


  /* ============================= */
  /* DROP FUNCTION */
  /* Place puzzle piece */
  /* ============================= */

  drop(event: any, index: number) {


    /* Prevent browser action */

    event.preventDefault();


    /* Stop if no piece selected */

    if (!this.draggedPiece) return;


    /* ============================= */
    /* CORRECT POSITION */
    /* ============================= */

    if (this.draggedPiece.id === index) {


      /* Place image on board */

      this.placed[index] =

      this.draggedPiece.src;


      /* Remove used piece */

      this.pieces =

      this.pieces.filter(
        p => p !== this.draggedPiece
      );


      /* Clear dragged piece */

      this.draggedPiece = null;


      /* Check if game finished */

      this.checkWin();

    }


    /* ============================= */
    /* WRONG POSITION */
    /* ============================= */

    else {


      /* Error message */

      this.message =

      "❌ Try correct position!";


      /* Remove message later */

      setTimeout(() => {

        this.message = "";

      }, 1000);
    }
  }


  /* ============================= */
  /* WIN CHECK */
  /* Check if puzzle complete */
  /* ============================= */

  checkWin() {


    /* Verify all pieces placed */

    const done =

    this.placed.every(
      p => p !== null
    );


    /* ============================= */
    /* GAME COMPLETE */
    /* ============================= */

    if (done) {


      /* Success message */

      this.message =

      "🎉 Puzzle Complete!";


      /* Voice feedback */

      const speech =

      new SpeechSynthesisUtterance(
        "Great job!"
      );


      /* Voice settings */

      speech.pitch = 1.4;


      /* Speak */

      speechSynthesis.speak(speech);
    }
  }


  /* ============================= */
  /* RESET GAME */
  /* Restart puzzle */
  /* ============================= */

  resetGame() {

    this.startGame();
  }

}