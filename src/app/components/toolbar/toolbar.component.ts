import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent implements OnInit {
    constructor(private navigationService: NavigationService) {}
  
    ngOnInit(): void {
      this.navigationService.hideMobileNavOnClick();
    }
  
    toggleHeader(): void {
      console.log("text")
      this.navigationService.toggleHeader();
    }
}
