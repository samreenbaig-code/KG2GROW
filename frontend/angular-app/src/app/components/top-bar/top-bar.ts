import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


/* ============================= */
/* COMPONENT DECORATOR */
/* ============================= */

@Component({

  selector: 'app-top-bar',

  standalone: true,

  imports:[CommonModule],

  templateUrl: './top-bar.html',

  styleUrls: ['./top-bar.css']
})

export class TopBarComponent {


  /* ============================= */
  /* MUSIC STATUS */
  /* Check if music is playing */
  /* ============================= */

  musicPlaying = false;


  /* ============================= */
  /* AUDIO FILE */
  /* Background music file */
  /* ============================= */

  audio = new Audio('/bg_music.mp3');


  /* ============================= */
  /* CONSTRUCTOR */
  /* Router for navigation */
  /* ============================= */

  constructor(private router:Router){}


  /* ============================= */
  /* TOGGLE MUSIC */
  /* Play or pause background music */
  /* ============================= */

  toggleMusic(){


    /* ============================= */
    /* IF MUSIC IS PLAYING */
    /* Pause the music */
    /* ============================= */

    if(this.musicPlaying){

      this.audio.pause();

      this.musicPlaying = false;

    }


    /* ============================= */
    /* IF MUSIC IS OFF */
    /* Start playing music */
    /* ============================= */

    else {

      /* Repeat music forever */

      this.audio.loop = true;


      /* Play music */

      this.audio.play();


      /* Update button state */

      this.musicPlaying = true;
    }
  }


  /* ============================= */
  /* GO BACK */
  /* Return to previous page */
  /* ============================= */

  goBack(){

    window.history.back();
  }

}