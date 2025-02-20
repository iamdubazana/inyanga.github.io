import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent implements OnInit {

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.hideMobileNavOnClick();
  }

  toggleHeader(): void {
    this.navigationService.toggleHeader();
  }
}
