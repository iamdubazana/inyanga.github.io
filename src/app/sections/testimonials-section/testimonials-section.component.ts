import { Component, ViewChild, ElementRef } from '@angular/core';
import { SliderComponent } from "../../components/slider/slider.component";

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent  {

  testimonials = [
    { name: 'Sihle Dubazana', role: 'CEO & Founder', image: 'images/sd.jpeg', text: 'Amazing work, highly recommended!' },
  ];

}
