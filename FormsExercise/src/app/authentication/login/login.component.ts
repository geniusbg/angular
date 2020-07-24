import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel
  loginFailed: boolean;
  errMessage: string;
  constructor(private authService: AuthService, private router: Router) {
    this.model = new LoginModel('', '')
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
    },
      err => {
        this.loginFailed = true;
        this.errMessage = err.error.description;
      })
  }
}
