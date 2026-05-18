import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-color-matching',
standalone: true,
imports:[CommonModule],
templateUrl: './color-matching.component.html',
styleUrls: ['./color-matching.component.css']
})

export class ColorMatchingComponent{

message = '';

objects = [

{ name:'apple', img:'/apple.png' },
{ name:'banana', img:'/banana.png' },
{ name:'blueberry', img:'/blueberry.png' },
{ name:'watermelon', img:'/watermelon.png' }

];

constructor(){

this.shuffle();

}

/* shuffle fruits */

shuffle(){

for(let i=this.objects.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[this.objects[i],this.objects[j]] =
[this.objects[j],this.objects[i]];

}

}

/* start dragging */

drag(event:any,color:string){

event.dataTransfer.setData("color",color);

}

/* allow dropping */

allowDrop(event:any){

event.preventDefault();

}

/* drop color */

drop(event:any,object:string){

event.preventDefault();

const color = event.dataTransfer.getData("color");

/* fill the circle */

const zone = document.getElementById(object);

if(zone){
zone.style.background = color;
}

/* check answer */

if(
(object==='apple' && color==='red') ||
(object==='banana' && color==='yellow') ||
(object==='blueberry' && color==='blue') ||
(object==='watermelon' && color==='green')
){

this.message = "Great Match! 🎉";

this.speak("Great match");

}else{

this.message = "Try Again";

this.speak("Try again");

}

}

/* voice */

speak(text:string){

const msg = new SpeechSynthesisUtterance(text);

speechSynthesis.speak(msg);

}

}