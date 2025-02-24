import { Component, HostListener } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-pre-loader',
  imports: [],
  templateUrl: './pre-loader.component.html',
  styleUrl: './pre-loader.component.css'
})
export class PreLoaderComponent {
  
  constructor(private navigationService: NavigationService) {}

  @HostListener('window:load', [])
  onWindowLoad(): void {
    this.navigationService.removePreloader();
    this.navigationService.adjustScrollForHashLinks();
  }
}
