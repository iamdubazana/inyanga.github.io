import { Component, HostListener } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-scollor',
  imports: [],
  templateUrl: './scollor.component.html',
  styleUrl: './scollor.component.css'
})
export class ScollorComponent {

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
