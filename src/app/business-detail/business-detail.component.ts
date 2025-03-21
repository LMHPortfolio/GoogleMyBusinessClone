import {Component, inject, Input, input} from '@angular/core';
import {BusinessDataService} from '../business-data.service';

@Component({
  selector: 'app-business-detail',
  imports: [],
  templateUrl: './business-detail.component.html',
  styleUrl: './business-detail.component.css'
})
export class BusinessDetailComponent {

  private businessService = inject(BusinessDataService);

  businessName = this.businessService.businessData.name;



}
