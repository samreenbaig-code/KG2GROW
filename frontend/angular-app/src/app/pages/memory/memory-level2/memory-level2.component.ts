import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-memory-level2',

  standalone: true,

  imports:[CommonModule],

  templateUrl: './memory-level2.component.html',

  styleUrls: ['./memory-level2.component.css']
})

export class MemoryLevel2Component {

  /* ============================= */
  /* CURRENT FRUIT IMAGE */
  /* ============================= */

  currentFruit = '';


  /* ============================= */
  /* CORRECT COLOR */
  /* ============================= */

  correctColor = '';


  /* ============================= */
  /* MESSAGE TEXT */
  /* ============================= */

  message = '';


  /* ============================= */
  /* SHOW NEXT BUTTON */
  /* ============================= */

  showNextBtn = false;


  /* ============================= */
  /* FRUIT DATA */
  /* ============================= */

  fruits = [

    { name:'apple', img:'/apple.png', color:'red' },

    { name:'banana', img:'/banana.png', color:'yellow' },

    { name:'grapes', img:'/grapes.png', color:'purple' },

    { name:'orange', img:'/orange.png', color:'orange' },

    { name:'watermelon', img:'/watermelon.png', color:'green' }

  ];


  /* ============================= */
  /* COLOR OPTIONS */
  /* ============================= */

  options:string[] = [];


  /* ============================= */
  /* CONSTRUCTOR */
  /* ============================= */

  constructor(){

    this.generateQuestion();
  }


  /* ============================= */
  /* GENERATE NEW QUESTION */
  /* ============================= */

  generateQuestion(){

    /* Random Fruit */

    const random =
    this.fruits[Math.floor(Math.random()*this.fruits.length)];


    /* Set Fruit Image */

    this.currentFruit = random.img;


    /* Correct Answer */

    this.correctColor = random.color;


    /* All Colors */

    const allColors = [
      'red',
      'yellow',
      'green',
      'orange',
      'purple',
      'blue'
    ];


    /* Remove Correct Color */

    const filtered =
    allColors.filter(c => c !== this.correctColor);


    /* Random Wrong Answers */

    const randomOptions =
    filtered.sort(()=>Math.random()-0.5).slice(0,2);


    /* Final Options */

    this.options = [

      this.correctColor,

      ...randomOptions

    ].sort(()=>Math.random()-0.5);


    /* Reset */

    this.message = '';

    this.showNextBtn = false;
  }


  /* ============================= */
  /* CHECK ANSWER */
  /* ============================= */

  checkAnswer(color:string){

    /* Correct Answer */

    if(color === this.correctColor){

      this.message = "🎉 Great job!";

      this.showNextBtn = true;


      /* Voice */

      const speech =
      new SpeechSynthesisUtterance("Great job!");

      speech.pitch = 1.5;

      speechSynthesis.speak(speech);

    }


    /* Wrong Answer */

    else {

      this.message = "❌ Try again";


      /* Voice */

      const speech =
      new SpeechSynthesisUtterance("Try again");

      speechSynthesis.speak(speech);
    }
  }


  /* ============================= */
  /* NEXT QUESTION */
  /* ============================= */

  nextQuestion(){

    this.generateQuestion();
  }

}