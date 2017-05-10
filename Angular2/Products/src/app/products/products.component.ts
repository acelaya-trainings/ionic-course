import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: any[];
  showImages: boolean = false;
  filterBy: string = '';

  ngOnInit() {
    this.products = [
      {
        imageUrl: 'https://cdn4.iconfinder.com/data/icons/fineline-fill-gardening/128/garden_gardening_equipment_tool-19-256.png',
        name: 'Leaf Rake',
        code: '001',
        availableDate: '2016-01-01',
        price: 19.95,
        rating: 3
      },
      {
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51-QGor8qKL._SL256_.jpg',
        name: 'Garden Cart',
        code: '002',
        availableDate: '2016-01-02',
        price: 32.99,
        rating: 4
      },
      {
        imageUrl: 'http://www.pngall.com/wp-content/uploads/2016/04/Hammer-Download-PNG.png',
        name: 'Hammer',
        code: '003',
        availableDate: '2016-01-03',
        price: 8.99,
        rating: 5
      },
      {
        imageUrl: 'http://plainicon.com/download-icons/51042/plainicon.com-51042-aa67-256px.png',
        name: 'Saw',
        code: '004',
        availableDate: '2016-01-04',
        price: 11.55,
        rating: 4
      },
      {
        imageUrl: 'https://cdn1.iconfinder.com/data/icons/devices-7/128/devices-19-256.png',
        name: 'Video game controller',
        code: '005',
        availableDate: '2016-01-05',
        price: 35.95,
        rating: 5
        },
    ]
  }
}
