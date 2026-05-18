import { Component, OnInit, OnDestroy } from '@angular/core';

import { CommonModule } from '@angular/common';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-abc-level1',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './abc-level1.component.html',

  styleUrls: ['./abc-level1.component.css']
})

export class AbcLevel1Component implements OnInit, OnDestroy {


  /* ============================= */
  /* ALPHABET LETTERS */
  /* Convert A-Z into array */
  /* ============================= */

  letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');


  /* ============================= */
  /* SELECTED LETTER */
  /* Currently clicked letter */
  /* ============================= */

  selectedLetter: string | null = null;


  /* ============================= */
  /* SELECTED IMAGE */
  /* Image for selected letter */
  /* ============================= */

  selectedImage: string = '';


  /* ============================= */
  /* PLAYER SCORE */
  /* ============================= */

  score: number = 0;


  /* ============================= */
  /* PLAYER STARS */
  /* ============================= */

  stars: number = 0;


  /* ============================= */
  /* MUSIC STATUS */
  /* ============================= */

  musicOn: boolean = true;


  /* ============================= */
  /* BACKGROUND MUSIC */
  /* ============================= */

  backgroundMusic = new Audio('/bg_music.mp3');


  /* ============================= */
  /* LETTER WORDS */
  /* Example: A for Apple */
  /* ============================= */

  letterWords: any = {

    A: "Apple ",

    B: "Baby ",

    C: "Cat ",

    D: "Dog ",

    E: "Elephant ",

    F: "Fish ",

    G: "Giraffe ",

    H: "House ",

    I: "Ice Cream ",

    J: "Juice ",

    K: "Kite ",

    L: "Lion ",

    M: "Monkey ",

    N: "Nest ",

    O: "Orange ",

    P: "Panda ",

    Q: "Queen ",

    R: "Rabbit ",

    S: "Sun ",

    T: "Tiger ",

    U: "Umbrella ",

    V: "Violin ",

    W: "Whale ",

    X: "Xylophone ",

    Y: "Yacht ",

    Z: "Zebra "
  };


  /* ============================= */
  /* ON INIT */
  /* Start background music */
  /* ============================= */

  ngOnInit() {


    /* Repeat music */

    this.backgroundMusic.loop = true;


    /* Music volume */

    this.backgroundMusic.volume = 0.3;


    /* Play music after first click */

    document.addEventListener('click', () => {

      if (this.musicOn) {

        this.backgroundMusic.play();
      }

    }, { once: true });

  }


  /* ============================= */
  /* ON DESTROY */
  /* Stop music when leaving page */
  /* ============================= */

  ngOnDestroy() {

    this.backgroundMusic.pause();
  }


  /* ============================= */
  /* TOGGLE MUSIC */
  /* Turn music ON/OFF */
  /* ============================= */

  toggleMusic() {


    /* Reverse current music state */

    this.musicOn = !this.musicOn;


    /* Play or pause music */

    this.musicOn

      ? this.backgroundMusic.play()

      : this.backgroundMusic.pause();
  }


  /* ============================= */
  /* SPEAK LETTER */
  /* Speak selected alphabet */
  /* ============================= */

  speak(letter: string) {


    /* ============================= */
    /* LOCK SYSTEM */
    /* Unlock letters after score */
    /* ============================= */

    if (this.score < 5 && letter > 'E') {

      alert("🔒 Unlock more letters after 5 points!");

      return;
    }


    /* Save selected letter */

    this.selectedLetter = letter;


    /* Load letter image */

    this.selectedImage = `/letters/${letter}.png`;


    /* Increase score */

    this.score++;


    /* Add star */

    this.stars++;


    /* Stop previous voice */

    window.speechSynthesis.cancel();


    /* Create speech */

    const utterance = new SpeechSynthesisUtterance(

      `${letter} for ${this.letterWords[letter]}`
    );


    /* Speech speed */

    utterance.rate = 0.6;


    /* Speech voice pitch */

    utterance.pitch = 1.4;


    /* Speak text */

    window.speechSynthesis.speak(utterance);


    /* Launch confetti effect */

    this.launchConfetti();
  }


  /* ============================= */
  /* GET RANDOM COLORS */
  /* Different colors for letters */
  /* ============================= */

  getColor(index: number): string {

    const colors = [

      '#ff6b6b',

      '#ff9f43',

      '#feca57',

      '#1dd1a1',

      '#54a0ff',

      '#5f27cd'
    ];


    /* Return color using index */

    return colors[index % colors.length];
  }


  /* ============================= */
  /* CONFETTI EFFECT */
  /* Show celebration animation */
  /* ============================= */

  launchConfetti() {


    /* Animation duration */

    const duration = 800;


    /* Animation end time */

    const end = Date.now() + duration;


    /* Create confetti repeatedly */

    const interval = setInterval(() => {


      /* Stop animation */

      if (Date.now() > end) {

        clearInterval(interval);
      }


      /* Create confetti element */

      else {

        const confetti = document.createElement('div');


        /* Add CSS class */

        confetti.className = 'confetti';


        /* Random position */

        confetti.style.left =
        Math.random() * window.innerWidth + 'px';


        /* Add to screen */

        document.body.appendChild(confetti);


        /* Remove after animation */

        setTimeout(() => confetti.remove(), 800);
      }

    }, 100);

  }

}