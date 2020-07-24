import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/authentication/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginModel
  loginFailed: Boolean
  errMsg: string

  constructor(private authService: AuthService, private router: Router) {
    this.model = new LoginModel("", "")
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      this.router.navigate([''])
    },
      err => {
        this.loginFailed = true
        this.errMsg = err.error.description
      }
    )
  }

}
