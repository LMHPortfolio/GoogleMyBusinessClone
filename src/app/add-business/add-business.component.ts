import {Component} from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {FormsModule, NgForm} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {BusinessDataService} from '../business-data.service';
import {NgClass} from '@angular/common';



@Component({
  selector: 'app-add-business',
  imports: [HeaderComponent, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './add-business.component.html',
  styleUrl: './add-business.component.css'
})
export class AddBusinessComponent {

  constructor(private route: ActivatedRoute, private router:Router, private businessService: BusinessDataService) {}

  pageTitle = "Add new business";

  formFields = {

    businessName: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessZipcode: "",
    businessTags: "",
    businessCategory: "",

  }



  onSubmitNewBusiness (formData: NgForm):void {
    this.businessService.setSubmittedNewBusiness(formData.form.value);
    void this.router.navigate(['/business-list']);

    formData.resetForm();

  }


}


