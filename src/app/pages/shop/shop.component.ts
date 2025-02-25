import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit  {
  launchDate = new Date('2025-03-21T00:00:00');
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  email = '';

  ngOnInit() {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date().getTime();
    const distance = this.launchDate.getTime() - now;
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
  }

  subscribe(event: Event) {
    event.preventDefault();
    alert(`Thank you for subscribing: ${this.email}`);
    this.email = '';
  }
}
