import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

selector: 'app-shape-level3',

standalone: true,

imports: [CommonModule],

templateUrl: './shape-level3.component.html',

styleUrls: ['./shape-level3.component.css']

})

export class ShapeLevel3Component {


/* ============================= */
/* SHAPE LIST */
/* All matching game shapes */
/* ============================= */

shapes = [

'circle',

'square',

'triangle',

'heart',

'star'

];


/* ============================= */
/* CURRENT SHAPE INDEX */
/* Track active shape */
/* ============================= */

currentIndex = 0;


/* ============================= */
/* CURRENT SHAPE */
/* Return active target shape */
/* ============================= */

get currentShape(){

return this.shapes[this.currentIndex];

}


/* ============================= */
/* SELECT SHAPE */
/* Check user selected shape */
/* ============================= */

selectShape(shape:string){


/* ============================= */
/* CORRECT ANSWER */
/* ============================= */

if(shape === this.currentShape){


/* Voice feedback */

const msg =

new SpeechSynthesisUtterance(

"Correct!"
);


/* Speak message */

speechSynthesis.speak(msg);


/* Go to next shape */

this.nextShape();

}


/* ============================= */
/* WRONG ANSWER */
/* ============================= */

else{


/* Voice feedback */

const msg =

new SpeechSynthesisUtterance(

"Try again"
);


/* Speak message */

speechSynthesis.speak(msg);

}

}


/* ============================= */
/* NEXT SHAPE */
/* Move to next game shape */
/* ============================= */

nextShape(){


/* Move forward */

if(this.currentIndex < this.shapes.length - 1){


this.currentIndex++;

}


/* ============================= */
/* GAME COMPLETE */
/* ============================= */

else{


alert(

"Amazing! You finished shape matching ⭐"
);

}

}

}