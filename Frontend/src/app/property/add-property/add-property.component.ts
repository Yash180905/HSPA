import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; //this is a service provided by angular to use any service first u must decleare as private in constructor
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertyBase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  // @viewChild('Form')
  // addPropertyForm!: NgForm;

  @ViewChild('formTabs') formTabs?: TabsetComponent;
  @ViewChild('Form') addPropertyForm!: NgForm;
  constructor(private router: Router) {}

  //will come from master
  PropertyTypes: Array<string> = ['House', 'Appartment', 'Duplex'];
  FurnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IPropertyBase = {
    Id: 0,
    SellRent: 0,
    Name: '',
    PType: '',
    FType: '',
    Price: 0,
    BHK: 0,
    BuiltArea: 0,
    City: '',
    RTM: 0,
  };

  ngOnInit() {}
  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm) {
    console.log('Congrats, form Submitted');
    console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
