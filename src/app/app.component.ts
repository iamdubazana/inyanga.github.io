import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { FootbarComponent } from "./components/footbar/footbar.component";
import { PreLoaderComponent } from "./components/pre-loader/pre-loader.component";
import { ScollorComponent } from "./components/scollor/scollor.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ToolbarComponent,
    FootbarComponent,
    PreLoaderComponent,
    ScollorComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inyanga_Hand_Made_Crafts';
}
