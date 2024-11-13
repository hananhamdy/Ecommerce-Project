import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-module',
  standalone: true,
  imports: [],
  templateUrl: './login-module.component.html',
  styleUrl: './login-module.component.scss'
})
export class LoginModuleComponent {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Login");
  }

}
