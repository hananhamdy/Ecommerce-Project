import { Title } from '@angular/platform-browser';
import {ChangeDetectionStrategy, Component, OnInit, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersResponse } from './users';
import { Router } from '@angular/router';
import { User } from './user.interface';

@Component({
  selector: 'app-login-module',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-module.component.html',
  styleUrl: './login-module.component.scss'
})
export class LoginModuleComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  isUserNotValid = false;

  constructor(private _titleService:Title, private _formBuilder: FormBuilder, private _router: Router) {
    this._titleService.setTitle("Login");
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this._formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required]),
    });
  }

  submitLoginForm() {
    const usernameInput = this.loginForm.get('username')?.value;
    const passwordInput = this.loginForm.get('password')?.value;
    UsersResponse.some((user: User) => {
      if (user.username === usernameInput && user.password === passwordInput) {
        this.isUserNotValid = false;
        this._router.navigate(['/home']);
      } else {
        this.isUserNotValid = true;
      }
    });
  }
}
