import {Component, Output, output, signal,} from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {FormsModule, NgForm} from '@angular/forms';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import type {NewBusinessModel} from './new-business.model';

@Component({
  selector: 'app-add-business',
  imports: [HeaderComponent, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './add-business.component.html',
  styleUrl: './add-business.component.css'
})
export class AddBusinessComponent {

  constructor(private route: ActivatedRoute) {}

  pageTitle = "Add new business";


//implements newBusinessModel for the shape of the output...after changing to signals

  @Output() formFields = signal({
    businessName: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessZipcode: "",
    businessTags: "",
    businessCategory: ""
  });


  onSubmitNewBusiness (formData: NgForm) {
      this.formFields.set({
      businessName: formData.form.value.businessName,
      businessAddress: formData.form.value.businessAddress,
      businessCity: formData.form.value.businessCity,
      businessState: formData.form.value.businessState,
      businessZipcode: formData.form.value.businessZipcode,
      businessTags: formData.form.value.businessTags,
      businessCategory: formData.form.value.businessCategory
  })


    console.log('form submitted!');
  console.log(this.formFields());

    formData.resetForm();

  }




}


