/**
 * Created by zongy on 02-03-2017.
 */
import { Component } from '@angular/core';

@Component ({
  selector: 'header',
  templateUrl: './app/shared/header/header.html',
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})

export class HeaderComponent {
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;

  constructor() {}

  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  changed: number;
  change(newValue: number) {
    if(this.changed === newValue) {
      this.changed = 0;
    } else {
      this.changed = newValue;
    }
  }
}
