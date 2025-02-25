import { Component } from '@angular/core';
import { FilterGridComponent } from '../../components/filter-grid/filter-grid.component';



@Component({
  selector: 'app-portfolio-section',
  imports: [
    FilterGridComponent
  ],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.css'
})
export class PortfolioSectionComponent {

  productList = [
    {
      name: 'Custom Painting',
      description: 'Beautiful hand-painted artwork.',
      image: 'products/hand.jpg',
      category: 'paintings'
    },
    {
      name: 'Handmade Pottery',
      description: 'Unique and stylish pottery pieces.',
      image: 'products/pottery.jpg',
      category: 'pottery'
    },
    {
      name: 'Elegant Jewelry',
      description: 'Artisan-crafted jewelry for all occasions.',
      image: 'products/fiber.jpg',
      category: 'jewelry'
    },
    {
      name: 'Custom Painting',
      description: 'Beautiful hand-painted artwork.',
      image: 'products/hand.jpg',
      category: 'paintings'
    },
    {
      name: 'Handmade Pottery',
      description: 'Unique and stylish pottery pieces.',
      image: 'products/pottery.jpg',
      category: 'pottery'
    },
    {
      name: 'Elegant Jewelry',
      description: 'Artisan-crafted jewelry for all occasions.',
      image: 'products/fiber.jpg',
      category: 'jewelry'
    }
  ];

  product_catagorys = [
    'paintings',
    'pottery',
    'jewelry'
  ];

}
