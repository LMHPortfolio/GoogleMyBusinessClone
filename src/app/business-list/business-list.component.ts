import {Component, inject} from '@angular/core';
import {BusinessCardComponent} from '../business-card/business-card.component';
import {HeaderComponent} from '../shared/header/header.component';

@Component({
  selector: 'app-business-list',
  imports: [BusinessCardComponent, HeaderComponent],
  templateUrl: './business-list.component.html',
  styleUrl: './business-list.component.css'
})
export class BusinessListComponent {

  pageTitle= "My Businesses";

}


