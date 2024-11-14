import { Component, inject, OnInit } from '@angular/core';
import { User } from '../../core/interfaces/user.interface';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private _snackBar = inject(MatSnackBar);
  user: User | null = null;

  constructor(private _authenticationService: AuthenticationService, private _router: Router) {
  }

  ngOnInit(): void {
    this._authenticationService.getCurrentUser().subscribe(user => {
      user?.role != 'admin' ? this._router.navigate(['/home']) : this.user = user;
      this._snackBar.open('Access Denied', 'Close', {
        duration: 2000,
      });
    });
  }

}
