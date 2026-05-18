import { TopBarComponent } from '../../../components/top-bar/top-bar';
import { HttpClient } from '@angular/common/http';

import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-puzzle-level2',

  standalone: true,

  imports: [
    CommonModule,
    TopBarComponent
  ],

  templateUrl: './puzzle-level2.html',

  styleUrls: ['./puzzle-level2.css']
})

export class PuzzleLevel2Component
implements AfterViewInit {

  @ViewChild('canvas', { static: true })

  canvasRef!: ElementRef<HTMLCanvasElement>;

  ctx!: CanvasRenderingContext2D;

  currentIndex = 0;

  message = "";

  showNextBtn = false;

  shapeIndex = 0;


  /* ✅ HTTP CONSTRUCTOR */

  constructor(private http: HttpClient){}


  /* ============================= */
  /* SHAPES */
  /* ============================= */

  shapes = [

    /* 🔵 CIRCLE */

    [
      {x:250,y:80},
      {x:350,y:130},
      {x:400,y:250},
      {x:350,y:370},
      {x:250,y:420},
      {x:150,y:370},
      {x:100,y:250},
      {x:150,y:130}
    ],

    /* 🔺 TRIANGLE */

    [
      {x:250,y:120},
      {x:380,y:360},
      {x:120,y:360}
    ],

    /* 🟥 SQUARE */

    [
      {x:100,y:100},
      {x:400,y:100},
      {x:400,y:400},
      {x:100,y:400}
    ]
  ];


  get dots(){

    return this.shapes[this.shapeIndex];
  }


  ngAfterViewInit(){

    setTimeout(()=>{

      this.initCanvas();

    },200);
  }


  initCanvas(){

    const canvas =
      this.canvasRef.nativeElement;

    this.ctx =
      canvas.getContext('2d')!;

    this.drawDots();
  }


  /* ============================= */
  /* DRAW DOTS */
  /* ============================= */

  drawDots(){

    this.ctx.clearRect(
      0,
      0,
      700,
      700
    );

    this.ctx.fillStyle = "black";

    this.ctx.font = "30px Arial";

    this.dots.forEach((dot, i)=>{

      this.ctx.beginPath();

      this.ctx.arc(
        dot.x,
        dot.y,
        12,
        0,
        Math.PI * 2
      );

      this.ctx.fill();

      this.ctx.fillText(
        (i + 1).toString(),
        dot.x + 18,
        dot.y - 18
      );

    });
  }


  /* ============================= */
  /* CLICK */
  /* ============================= */

  click(event:any){

    if(this.showNextBtn) return;

    const canvas =
      this.canvasRef.nativeElement;

    const rect =
      canvas.getBoundingClientRect();

    const scaleX =
      canvas.width / rect.width;

    const scaleY =
      canvas.height / rect.height;

    const x =
      (event.clientX - rect.left)
      * scaleX;

    const y =
      (event.clientY - rect.top)
      * scaleY;

    const nextDot =
      this.dots[this.currentIndex];

    if(this.isNear({x,y}, nextDot)){

      /* FIRST DOT */

      if(this.currentIndex === 0){

        this.ctx.beginPath();

        this.ctx.moveTo(
          nextDot.x,
          nextDot.y
        );

      }

      /* DRAW LINE */

      else {

        this.ctx.lineTo(
          nextDot.x,
          nextDot.y
        );

        this.ctx.strokeStyle =
          "#ff9800";

        this.ctx.lineWidth = 8;

        this.ctx.lineCap =
          "round";

        this.ctx.stroke();
      }

      this.currentIndex++;


      /* COMPLETE */

      if(
        this.currentIndex
        === this.dots.length
      ){

        this.ctx.lineTo(
          this.dots[0].x,
          this.dots[0].y
        );

        this.ctx.stroke();

        this.message =
          "🎉 Great job!";

        this.showNextBtn = true;


        /* ✅ SAVE PROGRESS */

        this.http.post(

          'http://localhost/backend/api/progress.php',

          {
            email:'test@gmail.com',
            game:'Puzzle Level 2',
            score:100
          }

        ).subscribe(res=>{

          console.log(res);

        });

      }

    }

    else {

      this.message =
        "❌ Follow the dots!";

      setTimeout(()=>{

        this.message = "";

      },1000);
    }
  }


  /* ============================= */
  /* CHECK DISTANCE */
  /* ============================= */

  isNear(pos:any, dot:any){

    return Math.hypot(

      dot.x - pos.x,

      dot.y - pos.y

    ) < 40;
  }


  /* ============================= */
  /* NEXT SHAPE */
  /* ============================= */

  next(){

    this.shapeIndex++;

    if(
      this.shapeIndex
      >= this.shapes.length
    ){

      this.shapeIndex = 0;
    }

    this.currentIndex = 0;

    this.message = "";

    this.showNextBtn = false;

    this.drawDots();
  }

}