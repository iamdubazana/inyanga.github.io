import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AboutSectionComponent } from '../../components/about-section/about-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { ResumeSectionComponent } from '../../components/resume-section/resume-section.component';
import { PortfolioSectionComponent } from '../../components/portfolio-section/portfolio-section.component';
import { ServicesSectionComponent } from '../../components/services-section/services-section.component';
import { TestimonialsSectionComponent } from '../../components/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from '../../components/contact-section/contact-section.component';

@Component({
  selector: 'app-profile-page',
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    SkillsSectionComponent,
    ResumeSectionComponent,
    PortfolioSectionComponent,
    ServicesSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})

export class ProfilePageComponent {

}
