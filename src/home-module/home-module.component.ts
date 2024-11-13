import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-module',
  standalone: true,
  imports: [],
  templateUrl: './home-module.component.html',
  styleUrl: './home-module.component.scss'
})
export class HomeModuleComponent {
  constructor(private _titleService:Title) {
    this._titleService.setTitle("Home Page");
  }

}
