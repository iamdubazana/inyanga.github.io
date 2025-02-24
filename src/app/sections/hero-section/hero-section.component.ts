import { AfterViewInit, Component } from '@angular/core';

import AOS from 'aos';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {

  title = "Sihle Dubazana - Software Engineer"

  ngAfterViewInit() {
    this.aosInit();
    this.initTypedJs();
  }

  /**
   * Initialize AOS (Animation on Scroll)
   */
  aosInit(): void {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  /**
   * Initialize Typed.js
   */
  initTypedJs(): void {
    const selectTyped = document.querySelector('.typed');
    if (selectTyped) {
      let typed_strings = selectTyped.getAttribute('data-typed-items');
      if (typed_strings) {
        // Ensure it's an array of strings
        const stringsArray: string[] = typed_strings.split(',');
        
        // Initialize Typed.js with the correct array of strings
        new Typed('.typed', {
          strings: stringsArray, // Pass the array here
          loop: true,
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000
        });
      }
    }
  }

}
