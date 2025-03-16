import {Component, Host} from '@angular/core';
import type {Business} from '../Business';
import { inject } from '@angular/core';
import { BusinessDataService } from '../business-data.service';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-card',
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})


export class BusinessCardComponent implements Business {

  constructor(private router:Router) {
  }

  private businessService = inject(BusinessDataService);

  name = this.businessService.generateFakeBusiness().name;
  location = this.businessService.generateFakeBusiness().location;
  rating = this.businessService.generateFakeBusiness().rating;
  tags = this.businessService.generateFakeBusiness().tags;

  @HostListener("click", ['$event'])
    navigateToDetailView(event:MouseEvent):void {
      event.preventDefault();
      void this.router.navigate(['/business-detail']);

    }


}
