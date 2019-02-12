import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../models/register.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model : RegistrationModel;

  constructor() { }

  ngOnInit() {
  }

}
