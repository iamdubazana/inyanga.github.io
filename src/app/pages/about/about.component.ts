import { AfterViewInit, Component } from '@angular/core';
import { AboutIntroComponent } from '../../sections/about-intro/about-intro.component';
import { AboutCraftmanComponent } from '../../sections/about-craftman/about-craftman.component';
import { AboutJoinComponent } from '../../sections/about-join/about-join.component';
import { AboutMissionComponent } from '../../sections/about-mission/about-mission.component';
import { AboutProductsComponent } from '../../sections/about-products/about-products.component';
import { AboutValuesComponent } from '../../sections/about-values/about-values.component';
import { AboutWhyComponent } from '../../sections/about-why/about-why.component';
import Isotope, { LayoutModes } from 'isotope-layout';
import AOS from 'aos';
@Component({
  selector: 'app-about',
  imports: [
    AboutIntroComponent,
    AboutCraftmanComponent,
    AboutJoinComponent,
    AboutMissionComponent,
    AboutProductsComponent,
    AboutValuesComponent,
    AboutWhyComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.initIsotope();
    this.aosInit();
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
