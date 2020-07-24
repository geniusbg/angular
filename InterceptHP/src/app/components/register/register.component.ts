import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/authentication/auth.service';
import { Router } from '@angular/router';
import { RegistrationModel } from '../../authentication/models/register.model'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: RegistrationModel
  loginFailed: boolean
  errMsg: string

  constructor(private authService: AuthService, private router: Router) {
    this.model = new RegistrationModel("", "", "", "", "")
  }

  ngOnInit() {
  }

  register() {
    delete this.model['confirmPassword']
    this.authService.register(this.model).subscribe(data => {
      this.router.navigate(['/login'])
    },
      err => {
        this.loginFailed = true;
        this.errMsg = err.error.description;
      }

    )
  }
}
