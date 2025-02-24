import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Pagination } from 'swiper/modules';  // ✅ Import Autoplay module

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements AfterViewInit {
  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;

  testimonials = [
    { name: 'Sihle Dubazana', role: 'CEO & Founder', image: 'images/sd.jpeg', text: 'Amazing work, highly recommended!' },
    { name: 'Sihle Dubazana', role: 'CEO & Founder', image: 'images/sd.jpeg', text: 'Amazing work, highly recommended!' },
    { name: 'Sihle Dubazana', role: 'CEO & Founder', image: 'images/sd.jpeg', text: 'Amazing work, highly recommended!' },
    { name: 'Sihle Dubazana', role: 'CEO & Founder', image: 'images/sd.jpeg', text: 'Amazing work, highly recommended!' },
  ];

  swiperConfig: SwiperOptions = {
    modules: [Autoplay, Pagination],  // ✅ Enable Autoplay & Pagination modules
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000,  // ✅ Change delay for auto-slide
      disableOnInteraction: false // ✅ Keep autoplay running after user interaction
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 40 },
      1200: { slidesPerView: 3, spaceBetween: 1 }
    }
  };

  ngAfterViewInit() {
    new Swiper(this.swiperRef.nativeElement, this.swiperConfig);
  }
}
