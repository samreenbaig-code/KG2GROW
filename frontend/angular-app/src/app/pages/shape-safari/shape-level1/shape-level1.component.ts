import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

selector:'app-shape-level1',

standalone:true,

imports:[CommonModule],

templateUrl:'./shape-level1.component.html',

styleUrls:['./shape-level1.component.css']

})

export class ShapeLevel1Component{


/* ============================= */
/* SELECTED SHAPE */
/* Store clicked shape name */
/* ============================= */

selectedShape:string | null = null;


/* ============================= */
/* SHAPE IMAGE LIST */
/* Shape popup images */
/* ============================= */

shapeImages:any = {


/* Circle image */

Circle:'/circle1.png',


/* Square image */

Square:'/square1.png',


/* Triangle image */

Triangle:'/triangle1.png',


/* Star image */

Star:'/star1.png',


/* Heart image */

Heart:'/heart1.png'

};


/* ============================= */
/* SHOW SHAPE */
/* Open popup and speak shape */
/* ============================= */

showShape(name:string){


/* Save selected shape */

this.selectedShape = name;


/* ============================= */
/* VOICE SPEAK */
/* Speak shape name */
/* ============================= */

const speech =

new SpeechSynthesisUtterance(name);


/* Voice pitch */

speech.pitch = 3.9;


/* Speak sound */

speechSynthesis.speak(speech);

}


/* ============================= */
/* CLOSE POPUP */
/* Hide popup card */
/* ============================= */

closeCard(){


/* Remove selected shape */

this.selectedShape = null;

}

}