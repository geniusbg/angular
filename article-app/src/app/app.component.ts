import { Component, Input, EventEmitter } from '@angular/core';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css', "./footer/footer.component.css"
  ]
})
export class AppComponent {
  title = 'Article Site';
  currentColor: string

  colorChanged(x: string) {
    this.currentColor = x;
  }

}
