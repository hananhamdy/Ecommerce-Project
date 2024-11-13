import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../core-module/components/header/header.component";
import { FooterComponent } from "../core-module/components/footer/footer.component";
import { Title } from '@angular/platform-browser';
import { AuthorizedGuard } from '../core-module/routing-guards/autherized.guard';
import { NotAuthorizedGuard } from '../core-module/routing-guards/notAutherized.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  providers: [NotAuthorizedGuard, AuthorizedGuard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private _titleService:Title) {
    this._titleService.setTitle("STC Task");
  }
}
