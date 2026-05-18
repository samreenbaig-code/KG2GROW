import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-number-level1',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './number-level1.component.html',

  styleUrls: ['./number-level1.component.css']
})

export class NumberLevel1Component {


  /* ============================= */
  /* NUMBER LIST */
  /* Numbers from 1 to 20 */
  /* ============================= */

  numbers = [

    1,2,3,4,5,

    6,7,8,9,10,

    11,12,13,14,15,

    16,17,18,19,20
  ];


  /* ============================= */
  /* SELECTED NUMBER */
  /* Stores clicked number */
  /* ============================= */

  selectedNumber: number | null = null;


  /* ============================= */
  /* SHOW NUMBER */
  /* Open popup and speak number */
  /* ============================= */

  showNumber(num:number){


    /* Save selected number */

    this.selectedNumber = num;


    /* ============================= */
    /* NUMBER OBJECT NAMES */
    /* Related objects for numbers */
    /* ============================= */

    const numberWords:any = {

      1:"banana",

      2:"ducks",

      3:"oranges",

      4:"car",

      5:"balloons",

      6:"kites",

      7:"flower",

      8:"stars",

      9:"fish",

      10:"toys",

      11:"pencils",

      12:"tomatoes",

      13:"shoes",

      14:"carrot",

      15:"mangoes",

      16:"cupcake",

      17:"apples",

      18:"blocks",

      19:"Balls",

      20:"bunnys"
    };


    /* ============================= */
    /* SPEAK NUMBER */
    /* Voice pronunciation */
    /* ============================= */

    const numberSpeech =

    new SpeechSynthesisUtterance(
      num.toString()
    );


    /* Voice settings */

    numberSpeech.pitch = 1.6;

    numberSpeech.rate = 0.9;


    /* Speak number */

    speechSynthesis.speak(numberSpeech);


    /* ============================= */
    /* SPEAK OBJECT NAME */
    /* Wait then say object */
    /* ============================= */

    setTimeout(() => {


      const objectSpeech =

      new SpeechSynthesisUtterance(
        numberWords[num]
      );


      /* Voice settings */

      objectSpeech.pitch = 1.6;

      objectSpeech.rate = 0.9;


      /* Speak object */

      speechSynthesis.speak(objectSpeech);

    },2000);

  }


  /* ============================= */
  /* CLOSE POPUP */
  /* Hide popup card */
  /* ============================= */

  closeCard(){

    this.selectedNumber = null;
  }

}