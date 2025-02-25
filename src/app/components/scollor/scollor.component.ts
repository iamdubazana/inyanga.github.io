import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-scollor',
  imports: [],
  templateUrl: './scollor.component.html',
  styleUrl: './scollor.component.css'
})
export class ScollorComponent {

  isVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.scrollY > 200;
  }

  scrollToTop(event: Event) {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
