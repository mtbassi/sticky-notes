import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  ngOnInit() {
    const options = {
      strings: ['Turn your inspirations into a personal symphony of memories and reflections, where each note and word are eternal treasures'],
      typeSpeed: 70,
      backSpeed: 70,
      showCursor: false,
      loop: false
 };

 const typed = new Typed('.typed-element', options);
  }
}
