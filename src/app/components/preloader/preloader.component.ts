import { Component, HostListener } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-preloader',
  imports: [],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent {
 constructor(private navigationService: NavigationService) {}

  @HostListener('window:load', [])
  onWindowLoad(): void {
    this.navigationService.removePreloader();
    this.navigationService.adjustScrollForHashLinks();
  }
}
