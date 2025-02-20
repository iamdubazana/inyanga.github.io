import { Component, HostListener } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-scoller-top',
  imports: [],
  templateUrl: './scoller-top.component.html',
  styleUrl: './scoller-top.component.css'
})
export class ScollerTopComponent {

  constructor(private navigationService: NavigationService) {}

  scrollToTop(): void {
    this.navigationService.scrollToTop();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.navigationService.toggleScrollTop();
    this.navigationService.navmenuScrollspy();
  }
}
