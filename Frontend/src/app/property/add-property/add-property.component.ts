import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; //this is a service provided by angular to use any service first u must decleare as private in constructor

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  onBack() {
    this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm) {
    console.log('Congrats form submitted');
    console.log(Form);
  }
}
