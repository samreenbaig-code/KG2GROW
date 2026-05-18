import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-abc-level4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abc-level4.component.html',
  styleUrls: ['./abc-level4.component.css']
})
export class AbcLevel4Component {

  words = [
    { word: 'CAT', image: '/cat.png' },
    { word: 'DOG', image: '/dog.png' },
    { word: 'FOX', image: '/fox.png' },
    { word: 'BEAR', image: '/bear.png' }
  ];

  current = 0;

  letters: string[] = [];
  answer: string[] = [];

  showConfetti = false;
  wrongAnswer = false;

  draggedLetter = '';

  ngOnInit() {
    this.loadWord();
  }

  /* SPEECH FUNCTION (Reusable) */

  speak(text:string){

    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance();

    speech.text = text.toLowerCase();
    speech.rate = 0.9;
    speech.pitch = 1.2;

    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices.find(v => v.lang === 'en-US') || voices[0];

    window.speechSynthesis.speak(speech);
  }

  loadWord() {

    const word = this.words[this.current].word;

    this.answer = new Array(word.length).fill('');

    this.letters = word.split('').sort(() => Math.random() - 0.5);
  }

  checkAnswer(){

    const result = this.answer.join('');
    const correctWord = this.words[this.current].word;

    if(result === correctWord){

  this.showConfetti = true;

  /* stop any speaking letters */

  window.speechSynthesis.cancel();

  /* speak the full word */

  setTimeout(()=>{

    const wordSpeech = new SpeechSynthesisUtterance();
    wordSpeech.text = correctWord.toLowerCase();
    wordSpeech.rate = 0.9;
    wordSpeech.pitch = 1.2;

    window.speechSynthesis.speak(wordSpeech);

  },400);

  /* praise */

  setTimeout(()=>{

  window.speechSynthesis.cancel();

  const praise = new SpeechSynthesisUtterance(
    correctWord.toLowerCase() + ". Great job"
  );

  praise.rate = 0.9;
  praise.pitch = 1.2;

  window.speechSynthesis.speak(praise);

},1500);
  /* next word */

  setTimeout(()=>{

    this.showConfetti = false;
    this.nextWord();

  },3000);

}
    else if(result.length === correctWord.length && result !== correctWord){

      this.wrongAnswer = true;

      this.speak("Try again");

      setTimeout(()=>{
        this.wrongAnswer = false;
      },700);

    }

  }

  nextWord() {

    this.current++;

    if (this.current >= this.words.length) {
      alert("⭐ Level Complete!");
      this.current = 0;
    }

    this.loadWord();
  }

  previousWord(){

    this.current--;

    if(this.current < 0){
      this.current = this.words.length - 1;
    }

    this.loadWord();
  }

  dragStart(letter:string){
    this.draggedLetter = letter;
  }

  allowDrop(event:any){
    event.preventDefault();
  }

  dropLetter(event:any,index:number){

    event.preventDefault();

    const correctWord = this.words[this.current].word;
    const correctLetter = correctWord[index];

    /* speak only the dragged letter */

    this.speak(this.draggedLetter);

    if(this.draggedLetter === correctLetter){

      this.answer[index] = this.draggedLetter;

      this.letters = this.letters.filter(l => l !== this.draggedLetter);
      setTimeout(()=>{
      this.checkAnswer();
      },500);

    }

    else{

      this.wrongAnswer = true;

      this.speak("Try again");

      setTimeout(()=>{
        this.wrongAnswer = false;
      },700);

    }

  }
/* ============================= */
/* MOBILE TOUCH LETTER */
/* ============================= */

selectedLetter = '';


/* Touch Start */

touchStart(letter:string){

  this.selectedLetter = letter;
}


/* Touch Move */

touchMove(event:any){

  event.preventDefault();
}


/* Touch Drop */

touchDrop(index:number){

  if(!this.selectedLetter) return;

  this.answer[index] = this.selectedLetter;

  this.checkAnswer();
}
}