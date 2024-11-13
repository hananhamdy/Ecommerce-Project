import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { MatMenuModule } from '@angular/material/menu';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: User | null = null;

  constructor(private _router: Router, private _cookieService: CookieService) {
  }

  ngOnInit(): void {
    // const userCookie = this._cookieService.get('loggedInUser');
    // this.user = JSON.parse(userCookie) as User;
  }

  logout() {
    this._cookieService.delete('loggedInUser');
    this._router.navigate(['/home']);
  }

}
