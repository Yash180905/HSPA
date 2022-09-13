import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  properties: Array<any> = [
    {
      id: 1,
      name: 'Birla House',
      type: 'House',
      price: 120000,
    },
    {
      id: 2,
      name: 'Binod House',
      type: 'duplex',
      price: 1200000,
    },
    {
      id: 3,
      name: 'Yash House',
      type: 'Farmhouse',
      price: 1800000,
    },
    {
      id: 4,
      name: 'Adi House',
      type: 'Banglow',
      price: 1700000,
    },
    {
      id: 5,
      name: 'Ram House',
      type: 'House',
      price: 100000,
    },
    {
      id: 6,
      name: 'Rahul House',
      type: 'House',
      price: 120000,
    },
    {
      id: 6,
      name: 'anjali House',
      type: 'House',
      price: 190000,
    },
  ];
}
