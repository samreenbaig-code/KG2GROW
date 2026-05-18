import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

selector:'app-shape-safari',

standalone:true,

imports:[CommonModule],

templateUrl:'./shape-safari.component.html',

styleUrls:['./shape-safari.component.css']

})

export class ShapeSafariComponent{


/* ============================= */
/* CONSTRUCTOR */
/* Router for page navigation */
/* ============================= */

constructor(private router:Router){}


/* ============================= */
/* START LEVEL */
/* Open selected shape level */
/* ============================= */

startLevel(level:number){


/* ============================= */
/* LEVEL 1 */
/* Learn Shapes */
/* ============================= */

if(level===1){

this.router.navigate(['/shape-level1']);

}


/* ============================= */
/* LEVEL 2 */
/* Shape Coloring */
/* ============================= */

if(level===2){

this.router.navigate(['/shape-level2']);

}


/* ============================= */
/* LEVEL 3 */
/* Shape Matching */
/* ============================= */

if(level===3){

this.router.navigate(['/shape-level3']);

}

}

}