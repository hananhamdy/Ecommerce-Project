import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { AuthenticationService } from '../../services/authentication.service';
import { LocalStorage } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: User | null = null;

  constructor(private _router: Router, private _authenticationService: AuthenticationService, private _localStorage: LocalStorage) {
  }

  ngOnInit(): void {
    this._authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }

  logout() {
    this.user = null;
    this._localStorage.remove('loggedInUser');
    this._router.navigate(['/login']);
  }

}
