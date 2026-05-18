import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { StarService } from '../../services/star.service';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector:'app-abc-level3',

  standalone:true,

  imports:[
    CommonModule,
    RouterModule
  ],

  templateUrl:'./abc-level3.component.html',

  styleUrls:['./abc-level3.component.css']
})

export class AbcLevel3Component implements AfterViewInit {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Star service for rewards */
  /* ============================= */

  constructor(private starService: StarService){}


  /* ============================= */
  /* CANVAS REFERENCE */
  /* Get canvas from HTML */
  /* ============================= */

  @ViewChild('canvas')

  canvas!:ElementRef<HTMLCanvasElement>;


  /* ============================= */
  /* CANVAS CONTEXT */
  /* Used for drawing */
  /* ============================= */

  ctx!:CanvasRenderingContext2D;


  /* ============================= */
  /* DRAWING STATUS */
  /* Check if user is drawing */
  /* ============================= */

  drawing = false;


  /* ============================= */
  /* DRAW COLOR */
  /* Default tracing color */
  /* ============================= */

  color = "#ff3b30";


  /* ============================= */
  /* LETTER LIST */
  /* Alphabet A-Z */
  /* ============================= */

  letters = [

    'A','B','C','D','E','F','G',

    'H','I','J','K','L','M',

    'N','O','P','Q','R','S',

    'T','U','V','W','X','Y','Z'
  ];


  /* ============================= */
  /* CURRENT LETTER INDEX */
  /* ============================= */

  current = 0;


  /* ============================= */
  /* TRACE PROGRESS */
  /* Track completed checkpoints */
  /* ============================= */

  progress = 0;


  /* ============================= */
  /* STAR EFFECT */
/* ============================= */

  showStars = false;


  /* ============================= */
  /* CONFETTI EFFECT */
/* ============================= */

  showConfetti = false;


  /* ============================= */
  /* TRACE CHECKPOINTS */
  /* User must pass these points */
  /* ============================= */

  checkpoints = [

    {x:200,y:80},

    {x:180,y:120},

    {x:160,y:160},

    {x:140,y:200},

    {x:120,y:240}
  ];


  /* ============================= */
  /* AFTER VIEW INIT */
  /* Setup canvas */
  /* ============================= */

  ngAfterViewInit(){


    /* Get canvas */

    const canvas = this.canvas.nativeElement;


    /* Get drawing context */

    this.ctx = canvas.getContext('2d')!;


    /* Brush size */

    this.ctx.lineWidth = 8;


    /* Smooth line edges */

    this.ctx.lineCap = "round";


    /* Draw dotted guide letter */

    this.drawGuide();
  }


  /* ============================= */
  /* DRAW GUIDE LETTER */
  /* Show dotted alphabet */
  /* ============================= */

  drawGuide(){


    /* Get canvas */

    const canvas = this.canvas.nativeElement;


    /* Clear previous drawing */

    this.ctx.clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );


    /* Font size */

    this.ctx.font = "200px Arial";


    /* Dotted line style */

    this.ctx.setLineDash([10,10]);


    /* Guide color */

    this.ctx.strokeStyle = "#cccccc";


    /* Draw alphabet */

    this.ctx.strokeText(
      this.letters[this.current],
      120,
      250
    );


    /* Remove dotted effect */

    this.ctx.setLineDash([]);
  }


  /* ============================= */
  /* SET COLOR */
  /* Change drawing color */
  /* ============================= */

  setColor(color:string){

    this.color = color;
  }


  /* ============================= */
  /* START DRAWING */
  /* Mouse or touch start */
  /* ============================= */

  startDraw(event:any){


    /* Drawing enabled */

    this.drawing = true;


    /* Start new line */

    this.ctx.beginPath();


    /* Canvas position */

    const rect =
    this.canvas.nativeElement.getBoundingClientRect();


    /* Mouse position */

    const x =
    event.clientX - rect.left;

    const y =
    event.clientY - rect.top;


    /* Start drawing position */

    this.ctx.moveTo(x,y);
  }


  /* ============================= */
  /* DRAW FUNCTION */
  /* Draw while moving */
  /* ============================= */

  draw(event:any){


    /* Stop if not drawing */

    if(!this.drawing) return;


    /* Canvas position */

    const rect =
    this.canvas.nativeElement.getBoundingClientRect();


    /* Current mouse position */

    const x =
    event.clientX - rect.left;

    const y =
    event.clientY - rect.top;


    /* Set line color */

    this.ctx.strokeStyle = this.color;


    /* Draw line */

    this.ctx.lineTo(x,y);

    this.ctx.stroke();


    /* Check tracing progress */

    this.checkTrace(x,y);
  }


  /* ============================= */
  /* STOP DRAWING */
  /* ============================= */

  stopDraw(){

    this.drawing = false;
  }


  /* ============================= */
  /* CHECK TRACE */
  /* Verify user passed checkpoint */
  /* ============================= */

  checkTrace(x:number,y:number){


    /* Current checkpoint */

    const point =
    this.checkpoints[this.progress];


    /* Stop if no checkpoint */

    if(!point) return;


    /* Calculate distance */

    const distance = Math.sqrt(

      Math.pow(point.x-x,2) +

      Math.pow(point.y-y,2)
    );


    /* If close enough */

    if(distance < 60){


      /* Move to next checkpoint */

      this.progress++;


      /* Completed tracing */

      if(this.progress >= this.checkpoints.length){


        console.log("TRACE COMPLETE");


        this.finishTrace();
      }
    }
  }


  /* ============================= */
  /* FINISH TRACE */
  /* Reward player */
  /* ============================= */

  finishTrace(){


    /* Add star */

    this.starService.addStar();


    /* Show animations */

    this.showStars = true;

    this.showConfetti = true;


    /* Voice feedback */

    const speech =
    new SpeechSynthesisUtterance("Good job");


    speech.rate = 0.5;

    speech.pitch = 1.1;


    /* Speak voice */

    window.speechSynthesis.speak(speech);


    /* Move to next letter */

    setTimeout(()=>{


      /* Hide effects */

      this.showStars = false;

      this.showConfetti = false;


      /* Open next letter */

      this.nextLetter();

    },1500);

  }


  /* ============================= */
  /* NEXT LETTER */
  /* Show next alphabet */
  /* ============================= */

  nextLetter(){


    /* Increase letter index */

    this.current++;


    /* Restart alphabet */

    if(this.current >= this.letters.length){

      this.current = 0;
    }


    /* Speak current letter */

    const speech =
    new SpeechSynthesisUtterance(
      this.letters[this.current]
    );


    window.speechSynthesis.speak(speech);


    /* Reset checkpoints */

    this.progress = 0;


    /* Draw new guide */

    this.drawGuide();

  }

}