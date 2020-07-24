import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../models/register.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: RegistrationModel;
  loginFailed: boolean;
  errMessage: string;

  constructor(private authService: AuthService, private router : Router) {
    this.model = new RegistrationModel('', '', '', '', '')
  }

  ngOnInit() {
  }
  register() {
    delete this.model['configPassword']
    this.authService.register(this.model).subscribe(data => {
      this.router.navigate(['/login'])
    },
      err => {
        this.loginFailed = true;
        this.errMessage = err.error.description
        console.log(this.errMessage)
      })
  }
}
