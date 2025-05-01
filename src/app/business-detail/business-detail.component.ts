import {Component, inject, Input, input} from '@angular/core';
import {BusinessDataService} from '../business-data.service';
import {HeaderComponent} from '../shared/header/header.component';
import {NewBusinessModel} from '../add-business/new-business.model';


@Component({
  selector: 'app-business-detail',
  imports: [HeaderComponent],
  templateUrl: './business-detail.component.html',
  styleUrl: './business-detail.component.css'
})
export class BusinessDetailComponent {


  private businessService = inject(BusinessDataService);

  business = input.required<NewBusinessModel>();

  pageTitle = "Viewing [Details]";



  //will add more business info later for details that aren't shown on dashboard view

  /*businessData = {

    businessName: this.businessService.businessData.businessName,
    businessAddress: this.businessService.businessData.businessAddress,
    businessCity: this.businessService.businessData.businessCity,
    businessState: this.businessService.businessData.businessState,
    businessZipcode: this.businessService.businessData.businessZipcode,
    businessTags: this.businessService.businessData.businessTags,
    businessCategory: this.businessService.businessData.businessCategory

  }
  pageTitle = "Viewing: " + this.businessService.businessData.businessName;



*/


}
