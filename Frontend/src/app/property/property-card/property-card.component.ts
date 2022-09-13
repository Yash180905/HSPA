import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  property: any = {
    id: 1,
    name: 'Birla House',
    type: 'House',
    price: 120000,
  };
}
