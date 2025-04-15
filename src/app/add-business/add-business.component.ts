import {Component, EventEmitter, NgModule, Output} from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {FormControl, FormsModule, NgForm} from '@angular/forms';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-add-business',
  imports: [HeaderComponent, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './add-business.component.html',
  styleUrl: './add-business.component.css'
})
export class AddBusinessComponent {

  constructor(private route: ActivatedRoute) {}

  addBusinessForm!:NgForm;

  @Output() add = new EventEmitter<{

    businessName:string,
    businessAddress:string,
    businessCity:string,
    businessState:string,
    businessZipcode:string,
    businessTags:string,
    businessCategory:string | string[];

  }>

  pageTitle = "Add new business";



  businessName= "";
  businessAddress= "";
  businessCity= "";
  businessState= "";
  businessZipcode= "";
  businessTags= "";
  businessCategory= "";



  onSubmitNewBusiness (form: NgForm) {


    console.log('form submitted!');
    console.log(form.value);


    this.add.emit({
    businessName: this.businessName,
    businessAddress: this.businessAddress,
    businessCity: this.businessCity,
    businessState: this.businessState,
    businessZipcode: this.businessZipcode,
    businessTags: this.businessZipcode,
    businessCategory: this.businessCategory,

  });


form.resetForm();




}


}


