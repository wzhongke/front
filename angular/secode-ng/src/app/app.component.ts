import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let customer of customers">{{customer}}</li>
    </ul>
    <label>Type something:
      <input #customerInput>{{customerInput.value}}
    </label>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secode-ng';
  myHero = 'Windstorm';
  customers = ['hero1', 'hero2', 'hero3'];
  customer = 'wang';
  
}
