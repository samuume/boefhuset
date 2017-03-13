/**
 * Created by zongy on 02-03-2017.
 */
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private sanitizer: DomSanitizer) {}

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
      alert("changed");
    } else {
      this.changed = newValue;
    }
  }

  vis = false;
  getStyle() {
    //const displayStyle = 'none';
    //return this.sanitizer.bypassSecurityTrustStyle(`$(displayStyle)`);
    if(this.vis) {
      return "none";
    } else {
      return "block";
    }
  }
}
