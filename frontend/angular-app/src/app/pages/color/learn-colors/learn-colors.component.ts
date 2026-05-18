import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learn-colors',
  standalone: true,
  imports: [CommonModule],   // ⭐ ADD THIS
  templateUrl: './learn-colors.component.html',
  styleUrls: ['./learn-colors.component.css']
})
export class LearnColorsComponent {

  currentImage:string='';
  currentText:string='';

  showColor(color:string){

    if(color === 'red'){
      this.currentImage='/apple1.png';
      this.currentText='Red Apple';
      this.speak('Red Apple');
    }

    if(color === 'yellow'){
      this.currentImage='/banana.png';
      this.currentText='Yellow Banana';
      this.speak('Yellow Banana');
    }

    if(color === 'blue'){
      this.currentImage='/blueberry.png';
      this.currentText='Blueberry';
      this.speak('Blue Berry');
    }

    if(color === 'green'){
      this.currentImage='/watermelon.png';
      this.currentText='Green Watermelon';
      this.speak('Green Watermelon');
    }

  }

  speak(text:string){
    const msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  }

}