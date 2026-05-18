import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-shape-level1',
standalone:true,
imports:[CommonModule],
templateUrl:'./shape-level1.component.html',
styleUrls:['./shape-level1.component.css']
})

export class ShapeLevel1Component{

selectedShape:string | null = null;

shapeImages:any = {

Circle:'assets/shapes/circle.png',
Square:'assets/shapes/square.png',
Triangle:'assets/shapes/triangle.png',
Star:'assets/shapes/star.png',
Heart:'assets/shapes/heart.png'

};

showShape(name:string){

this.selectedShape = name;

const speech = new SpeechSynthesisUtterance(name);

speech.pitch = 1.4;

speechSynthesis.speak(speech);

}

closeCard(){

this.selectedShape = null;

}

}