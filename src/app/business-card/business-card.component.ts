import { Component } from '@angular/core';
import type {Business} from '../Business';
import { inject} from '@angular/core';
import { BusinessDataService } from '../business-data.service';

@Component({
  selector: 'app-business-card',
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})


export class BusinessCardComponent implements Business {

  private businessService = inject(BusinessDataService);

  name = this.businessService.generateFakeBusiness().name;
  location = this.businessService.generateFakeBusiness().location;
  rating = this.businessService.generateFakeBusiness().rating;
  tags = this.businessService.generateFakeBusiness().tags;

  


}
