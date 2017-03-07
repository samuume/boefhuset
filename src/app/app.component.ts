import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <header class="sticky-top"></header>
      <router-outlet></router-outlet>
      <footer></footer>
  `,
})
export class AppComponent  { name = 'Angular'; }