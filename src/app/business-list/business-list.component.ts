import {Component} from '@angular/core';
import {BusinessCardComponent} from '../business-card/business-card.component';
import {HeaderComponent} from '../shared/header/header.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-business-list',
  imports: [BusinessCardComponent, HeaderComponent],
  templateUrl: './business-list.component.html',
  styleUrl: './business-list.component.css'
})
export class BusinessListComponent {
  constructor(private router:Router) {}


  pageTitle= "My Businesses";


    onStartAddingBusiness(event:MouseEvent):void {
      event.preventDefault();
      void this.router.navigate(['/add-business']);

  }




}


