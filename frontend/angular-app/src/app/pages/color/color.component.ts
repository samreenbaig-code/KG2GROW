import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-color',
templateUrl: './color.component.html',
styleUrls: ['./color.component.css']
})

export class ColorComponent{

constructor(private router: Router){}

goLevel1(){
this.router.navigate(['/color-matching']);
}

goLevel2(){
this.router.navigate(['/find-color']);
}

goLevel3(){
this.router.navigate(['/learn-colors']);
}

} 