import { AfterViewInit, Component, Input } from '@angular/core';
import Isotope, { LayoutModes } from 'isotope-layout';
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-filter-grid',
  imports: [
    CommonModule
  ],
  templateUrl: './filter-grid.component.html',
  styleUrl: './filter-grid.component.css'
})
export class FilterGridComponent implements AfterViewInit {

  @Input() items: { name: string, description: string, image: string, category: string }[] = [];
  @Input() protuct_types: string[] = [];


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
