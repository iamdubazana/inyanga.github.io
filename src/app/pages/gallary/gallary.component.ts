import { Component } from '@angular/core';
import { FilterGridComponent } from '../../components/filter-grid/filter-grid.component';

@Component({
  selector: 'app-gallary',
  imports: [
    FilterGridComponent
  ],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})

export class GallaryComponent {
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
      name: 'Elegant jewellery',
      description: 'Artisan-crafted jewellery for all occasions.',
      image: 'products/fiber.jpg',
      category: 'jewellery'
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
      name: 'Elegant jewellery',
      description: 'Artisan-crafted jewellery for all occasions.',
      image: 'products/fiber.jpg',
      category: 'jewellery'
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
      name: 'Elegant jewellery',
      description: 'Artisan-crafted jewellery for all occasions.',
      image: 'products/fiber.jpg',
      category: 'jewellery'
    }
  ];

  product_catagorys = [
    'paintings',
    'pottery',
    'jewellery'
  ];
}
