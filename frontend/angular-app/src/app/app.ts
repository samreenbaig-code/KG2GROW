import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { StarService } from './services/star.service';

import { TopBarComponent }
from './components/top-bar/top-bar';


/* ============================= */
/* ROOT COMPONENT */
/* Main app component */
/* ============================= */

@Component({

  selector: 'app-root',

  standalone: true,


  /* ============================= */
  /* IMPORTED COMPONENTS */
  /* ============================= */

  imports: [

    RouterModule,

    TopBarComponent
  ],

  templateUrl: './app.html',

  styleUrls: ['./app.css']
})

export class AppComponent {


  /* ============================= */
  /* CONSTRUCTOR */
  /* Access star service */
  /* ============================= */

  constructor(

    public starService: StarService

  ){}


  /* ============================= */
  /* SOUND STATUS */
  /* Track music mute state */
  /* ============================= */

  isMuted = false;


  /* ============================= */
  /* TOGGLE SOUND */
  /* Play or pause background audio */
  /* ============================= */

  toggleSound(audio: HTMLAudioElement){


    /* ============================= */
    /* TURN SOUND ON */
    /* ============================= */

    if(this.isMuted){


      /* Play music */

      audio.play();


      /* Update sound state */

      this.isMuted = false;

    }


    /* ============================= */
    /* TURN SOUND OFF */
    /* ============================= */

    else {


      /* Pause music */

      audio.pause();


      /* Update sound state */

      this.isMuted = true;
    }
  }

}