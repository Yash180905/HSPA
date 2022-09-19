import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';
import { IPropertyBase } from 'src/app/model/ipropertyBase';
import { HousingService } from 'src/app/service/Housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties!: IPropertyBase[];
  City = '';
  SearchCity = '';
  SortbyParam = '';
  SortDirection = 'asc';
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2; //means we are on rent property URL else we are on Base URL
    }
    this.housingService.getAllProperties(this.SellRent).subscribe((data) => {
      this.properties = data;
    });
  }
  onCityFilter() {
    this.SearchCity = this.City;
  }
  onCityFilterClear() {
    this.SearchCity = '';
    this.City = '';
  }
  onSortDirection() {
    if (this.SortDirection === 'desc') {
      this.SortDirection = 'asc';
    } else {
      this.SortDirection = 'desc';
    }
  }
}
