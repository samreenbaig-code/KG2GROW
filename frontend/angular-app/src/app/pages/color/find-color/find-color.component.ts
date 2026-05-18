import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
selector:'app-find-color',
standalone:true,
imports:[CommonModule],
templateUrl:'./find-color.component.html',
styleUrls:['./find-color.component.css']
})
export class FindColorComponent{

colors = ['red','yellow','blue','green'];

targetColor = '';
question = '';
message = '';

showConfetti = false;

constructor(){
this.nextQuestion();
}

nextQuestion(){

const random = Math.floor(Math.random()*this.colors.length);

this.targetColor = this.colors[random];

this.question = "Find the " + this.targetColor + " balloon";

this.speak(this.question);

}

checkColor(color:string){

if(color === this.targetColor){

this.message = "Great Job!";
this.showConfetti = true;

this.speak("Great Job");

setTimeout(()=>{
this.showConfetti = false;
this.message = "";
this.nextQuestion();
},2000);

}else{

this.message = "Try Again";
this.speak("Try Again");

}

}

speak(text:string){

const msg = new SpeechSynthesisUtterance(text);
speechSynthesis.speak(msg);

}

}