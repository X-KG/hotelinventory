import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HoverDirective } from '../hover.directive';
import { JsonPipe } from '@angular/common';
import { EmailvalidatorDirective } from '../emailvalidator/emailvalidator.directive';
import { Router } from '@angular/router';




@Component({
  selector: 'hinv-login',
  standalone: true,
  imports: [FormsModule, HoverDirective, JsonPipe, EmailvalidatorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{


  




  email: string = '';
  password: string = '';

  constructor(private route: Router) { }
  
  ngOnInit(): void {}

  
  login() {
    if(this.email==="admin@gmail.com" && this.password==="Admin") {
      this.route.navigate(['/rooms', 'add']);
    }
  }

}
