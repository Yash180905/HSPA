import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertyBase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() property!: IPropertyBase;
  @Input() hideIcons!: boolean;
}
