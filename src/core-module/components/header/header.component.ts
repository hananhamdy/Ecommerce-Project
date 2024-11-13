import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { CommonCashService } from '../../services/common-cash-service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: User | null = null;

  constructor(private _commonCashService: CommonCashService, private _router: Router) {
  }

  ngOnInit(): void {
    this._commonCashService.currentUser$.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this._commonCashService.clearUser();
    this._router.navigate(['/home']);
  }

}
