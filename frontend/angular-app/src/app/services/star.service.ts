import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarService {

stars = 0;

constructor(){

const savedStars = localStorage.getItem('stars');

if(savedStars){
this.stars = Number(savedStars);
}

}

addStar(){

this.stars++;

localStorage.setItem('stars', this.stars.toString());

}

getStars(){
return this.stars;
}

}