import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import AOS from 'aos';
import GLightbox from 'glightbox';
import { SwiperOptions } from 'swiper/types'; // For Swiper Options
import Swiper from 'swiper';
import Isotope, { LayoutModes } from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScollerTopComponent } from './components/scoller-top/scoller-top.component';
import { PreloaderComponent } from './components/preloader/preloader.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavigationComponent,
    FooterComponent,
    ScollerTopComponent,
    PreloaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {

  title = "Inyana Hand Made Crafts"

  ngAfterViewInit() {
    this.aosInit();
    this.initGLightbox();
    this.initSwiper();
    this.initIsotope();
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
  * Initialize GLightbox
  */
  initGLightbox(): void {
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  }

  /**
   * Initialize Swiper sliders
   */
  initSwiper(): void {
    document.querySelectorAll<HTMLElement>('.init-swiper').forEach((swiperElement) => {
      const configElement = swiperElement.querySelector('.swiper-config');

      if (configElement) {
        try {
          const config: SwiperOptions = JSON.parse(configElement.innerHTML.trim());

          if (swiperElement.classList.contains('swiper-tab')) {
            this.initSwiperWithCustomPagination(swiperElement, config);
          } else {
            new Swiper(swiperElement, config);
          }
        } catch (error) {
          console.error('Error parsing Swiper configuration:', error);
        }
      }
    });
  }

  /**
   * Initialize Swiper with custom pagination (dummy function - define logic as needed)
   */
  initSwiperWithCustomPagination(swiperElement: HTMLElement, config: SwiperOptions): void {
    // Implement your custom pagination logic here
    new Swiper(swiperElement, config);
  }

  /**
   * Initialize Isotope layout and filters
   */
  initIsotope(): void {
    document.querySelectorAll('.isotope-layout').forEach((isotopeItem) => {
      const layout = isotopeItem.getAttribute('data-layout') as LayoutModes ?? 'masonry';  // Ensure layout is valid
      const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope: Isotope | undefined;

      // Wait until images are loaded before initializing Isotope
      const container = isotopeItem.querySelector('.isotope-container');
      if (container) {
        imagesLoaded(container, () => {
          initIsotope = new Isotope(container as HTMLElement, {
            itemSelector: '.isotope-item',
            layoutMode: layout,
            filter: filter,
            sortBy: sort
          });
        });
      }

      // Handle isotope filters
      isotopeItem.querySelectorAll('.isotope-filters li').forEach((filterElement) => {
        filterElement.addEventListener('click', (event) => {
          isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active');
          (event.currentTarget as HTMLElement).classList.add('filter-active');

          if (initIsotope) {
            initIsotope.arrange({
              filter: (event.currentTarget as HTMLElement).getAttribute('data-filter') ?? '*'
            });
          }

          // Re-initialize AOS after filter change (optional)
          AOS.refresh();  // Refresh AOS to re-trigger animations on the filtered items
        }, false);
      });
    });
  }



}
