import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-number-level4',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './number-level4.component.html',

  styleUrls: ['./number-level4.component.css']
})

export class NumberLevel4Component
implements AfterViewInit {


  /* ============================= */
  /* CANVAS REFERENCE */
  /* Access HTML canvas element */
  /* ============================= */

  @ViewChild('traceCanvas')

  canvas!: ElementRef<HTMLCanvasElement>;


  /* ============================= */
  /* CANVAS CONTEXT */
  /* Used for drawing */
  /* ============================= */

  ctx!: CanvasRenderingContext2D;


  /* ============================= */
  /* DRAWING STATUS */
  /* Check if user is drawing */
  /* ============================= */

  drawing = false;


  /* ============================= */
  /* CURRENT NUMBER */
  /* Active tracing number */
  /* ============================= */

  currentNumber = 1;


  /* ============================= */
  /* MESSAGE */
  /* Success message */
  /* ============================= */

  message = "";


  /* ============================= */
  /* DRAW COUNT */
  /* Count drawing strokes */
  /* ============================= */

  drawCount = 0;


  /* ============================= */
  /* RAINBOW COLORS */
  /* Brush color list */
  /* ============================= */

  colors = [

    '#ff595e',

    '#ffca3a',

    '#8ac926',

    '#1982c4',

    '#6a4c93',

    '#ff924c'
  ];


  /* ============================= */
  /* CURRENT COLOR INDEX */
  /* Track active rainbow color */
  /* ============================= */

  colorIndex = 0;


  /* ============================= */
  /* AFTER VIEW INIT */
  /* Setup drawing canvas */
  /* ============================= */

  ngAfterViewInit(){


    /* Get canvas context */

    this.ctx =

    this.canvas.nativeElement.getContext('2d')!;


    /* Brush width */

    this.ctx.lineWidth = 14;


    /* Smooth brush */

    this.ctx.lineCap = "round";


    /* Default color */

    this.ctx.strokeStyle = "#ff595e";

  }


  /* ============================= */
  /* START DRAWING */
  /* Begin tracing */
  /* ============================= */

  startDrawing(event:MouseEvent){


    /* Enable drawing */

    this.drawing = true;


    /* Start new path */

    this.ctx.beginPath();


    /* Move brush position */

    this.ctx.moveTo(

      event.offsetX,

      event.offsetY
    );

  }


  /* ============================= */
  /* DRAW FUNCTION */
  /* Draw on canvas */
  /* ============================= */

  draw(event:MouseEvent){


    /* Stop if not drawing */

    if(!this.drawing) return;


    /* Set rainbow color */

    this.ctx.strokeStyle =

    this.colors[this.colorIndex];


    /* Draw line */

    this.ctx.lineTo(

      event.offsetX,

      event.offsetY
    );


    /* Apply drawing */

    this.ctx.stroke();


    /* Change color */

    this.colorIndex++;


    /* Restart color cycle */

    if(this.colorIndex >= this.colors.length){

      this.colorIndex = 0;
    }


    /* Count drawing movement */

    this.drawCount++;


    /* Finish tracing */

    if(this.drawCount > 120){

      this.finishTracing();
    }

  }


  /* ============================= */
  /* STOP DRAWING */
  /* End tracing */
  /* ============================= */

  stopDrawing(){

    this.drawing = false;

  }


  /* ============================= */
  /* CLEAR CANVAS */
  /* Reset drawing board */
  /* ============================= */

  clearCanvas(){


    /* Remove drawing */

    this.ctx.clearRect(

      0,

      0,

      this.canvas.nativeElement.width,

      this.canvas.nativeElement.height
    );


    /* Reset message */

    this.message = "";


    /* Reset draw count */

    this.drawCount = 0;

  }


  /* ============================= */
  /* NEXT NUMBER */
  /* Load next tracing number */
  /* ============================= */

  nextNumber(){


    /* Clear board */

    this.clearCanvas();


    /* Next number */

    this.currentNumber++;


    /* Restart after 10 */

    if(this.currentNumber > 10){

      this.currentNumber = 1;
    }


    /* Voice instruction */

    const speech =

    new SpeechSynthesisUtterance(

      "Trace number " +

      this.currentNumber
    );


    /* Voice settings */

    speech.pitch = 1.4;

    speech.rate = 0.9;


    /* Speak */

    speechSynthesis.speak(speech);

  }


  /* ============================= */
  /* FINISH TRACING */
  /* Success action */
  /* ============================= */

  finishTracing(){


    /* Stop drawing */

    this.drawing = false;


    /* Success message */

    this.message = "Great work! ⭐";


    /* Voice message */

    const speech =

    new SpeechSynthesisUtterance(
      "Great work"
    );


    /* Voice settings */

    speech.pitch = 1.4;

    speech.rate = 0.9;


    /* Speak */

    speechSynthesis.speak(speech);

  }


  /* ============================= */
  /* SET DRAW COLOR */
  /* Change brush color */
  /* ============================= */

  setColor(color:string){


    /* Update brush color */

    this.ctx.strokeStyle = color;

  }

}