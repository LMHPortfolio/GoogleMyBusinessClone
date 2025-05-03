import {Component, input} from '@angular/core';
import { Router} from '@angular/router';
import {NewBusinessModel} from '../add-business/new-business.model';



@Component({
  selector: 'app-business-card',
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})


export class BusinessCardComponent  {

  constructor(private router:Router) {}

business = input.required<NewBusinessModel>();




  navigateToDetailView() {

    if (this.business() && this.business().businessId) {
      void this.router.navigate(['/business-details', this.business().businessId]);
    }

  }


}
