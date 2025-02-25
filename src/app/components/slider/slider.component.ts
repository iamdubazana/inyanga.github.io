import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Pagination } from 'swiper/modules';  // ✅ Import Autoplay module

@Component({
  selector: 'app-slider',
  imports: [
    CommonModule
  ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit {

  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;
  @Input() testimonials: { name: string, role: string, image: string, text : string }[] = [];

  ngAfterViewInit() {
    new Swiper(this.swiperRef.nativeElement, this.swiperConfig);
  }

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
}
