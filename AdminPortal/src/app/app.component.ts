import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="container">
      <app-navbar></app-navbar>
      <router-outlet></router-outlet>
      <ng-footer></ng-footer>
   </div>
  `,
})
export class AppComponent {
  title = 'app works!';
}
