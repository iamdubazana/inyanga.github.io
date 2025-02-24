import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../sections/hero-section/hero-section.component";
import { AboutSectionComponent } from "../../sections/about-section/about-section.component";
import { ServicesSectionComponent } from "../../sections/services-section/services-section.component";
import { PortfolioSectionComponent } from "../../sections/portfolio-section/portfolio-section.component";
import { TestimonialsSectionComponent } from "../../sections/testimonials-section/testimonials-section.component";
import { ContactSectionComponent } from "../../sections/contact-section/contact-section.component";

@Component({
  selector: 'app-site',
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    PortfolioSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent
],
  templateUrl: './site.component.html',
  styleUrl: './site.component.css'
})
export class SiteComponent {

}
