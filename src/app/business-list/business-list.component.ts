import {Component, inject} from '@angular/core';
import {BusinessCardComponent} from '../business-card/business-card.component';
import {HeaderComponent} from '../shared/header/header.component';
import {Router} from '@angular/router';
import {BusinessDataService} from '../business-data.service';

@Component({
  selector: 'app-business-list',
  imports: [BusinessCardComponent, HeaderComponent],
  templateUrl: './business-list.component.html',
  styleUrl: './business-list.component.css'
})
export class BusinessListComponent {
  constructor(private router:Router) {}

  pageTitle= "My Businesses";
  businessService = inject(BusinessDataService);



  onStartAddingBusiness(event:MouseEvent):void {
    event.preventDefault();
    void this.router.navigate(['/add-business']);

  }

}


