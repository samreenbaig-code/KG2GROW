import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-home',

  standalone: true,

  templateUrl: './home.component.html',

  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {


  /* ============================= */
  /* MUSIC STATUS */
  /* Check if sound is muted */
  /* ============================= */

  isMuted = true;


  /* ============================= */
  /* LOADING PROGRESS */
  /* Loading bar percentage */
  /* ============================= */

  progress = 0;


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for page navigation */
  /* ============================= */

  constructor(private router: Router) {}


  /* ============================= */
  /* ON INIT */
  /* Start loading animation */
  /* ============================= */

  ngOnInit(): void {


    /* ============================= */
    /* LOADING ANIMATION */
    /* Increase loading progress */
    /* ============================= */

    let interval = setInterval(() => {


      /* Increase progress */

      if (this.progress < 100) {

        this.progress += 5;
      }


      /* Stop animation */

      else {

        clearInterval(interval);
      }

    }, 100);

  }


  /* ============================= */
  /* START APP */
  /* Navigate to account page */
  /* ============================= */

  startApp(): void {

    this.router.navigate(['/account']);
  }


  /* ============================= */
  /* TOGGLE SOUND */
  /* Play or pause music */
  /* ============================= */

  toggleSound(audio: HTMLAudioElement): void {


    /* ============================= */
    /* PLAY MUSIC */
    /* ============================= */

    if (this.isMuted) {

      audio.play();

      this.isMuted = false;
    }


    /* ============================= */
    /* PAUSE MUSIC */
    /* ============================= */

    else {

      audio.pause();

      this.isMuted = true;
    }

  }

}