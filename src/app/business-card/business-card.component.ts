import {Component} from '@angular/core';
import { inject } from '@angular/core';
import { BusinessDataService } from '../business-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-business-card',
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})


export class BusinessCardComponent  {

  constructor(private router:Router) {}

  private businessService = inject(BusinessDataService);

  businessName = this.businessService.dummyBusinessData.businesses[0].name;
  businessAddress = this.businessService.dummyBusinessData.businesses[0].address;
  businessTags = this.businessService.dummyBusinessData.businesses[0].tags;


  navigateToDetailView(event:MouseEvent):void {
    event.preventDefault();
    void this.router.navigate(['/business-detail']);


  }

}
