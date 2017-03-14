import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

declare var jQuery: any;

@Component({
  selector: 'my-app',
  template: `
      <header class="sticky-top"></header>
      <router-outlet></router-outlet>
      <footer></footer>
  `,
})
export class AppComponent implements AfterViewInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event) =>
        jQuery('#navbarTogglerDemo02').collapse('hide')
      );
  }

}
