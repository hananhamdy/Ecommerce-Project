import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { MatMenuModule } from '@angular/material/menu';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorage } from '../../services/local-storage.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: User | null = null;

  constructor(private _router: Router, private _authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this._authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.user = null;
    localStorage.removeItem('loggedInUser');
    this._router.navigate(['/login']);
  }

}
