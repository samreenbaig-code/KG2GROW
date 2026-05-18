import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar-select.component.html',
  styleUrls: ['./avatar-select.component.css']
})
export class AvatarSelectComponent {

  avatars = [
    '/avatars/bear.png',
    '/avatars/rabbit.png',
    '/avatars/fox.png',
    '/avatars/panda.png'
  ];



constructor(private router: Router){}

selectAvatar(avatar:string){

localStorage.setItem("avatar",avatar);

this.router.navigate(['/home']);

}

}