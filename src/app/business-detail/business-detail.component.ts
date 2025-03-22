import {Component, inject, Input, input} from '@angular/core';
import {BusinessDataService} from '../business-data.service';
import {HeaderComponent} from '../shared/header/header.component';

@Component({
  selector: 'app-business-detail',
  imports: [HeaderComponent],
  templateUrl: './business-detail.component.html',
  styleUrl: './business-detail.component.css'
})
export class BusinessDetailComponent {


  private businessService = inject(BusinessDataService);

  //will add more business info later for details that aren't shown on dashboard view

  businessData = {

    businessName: this.businessService.businessData.name,
    businessLocation: this.businessService.businessData.location,
    businessRating: this.businessService.businessData.rating,
    businessTags: this.businessService.businessData.tags,

  }
  pageTitle = "Viewing: " + this.businessService.businessData.name;



}
