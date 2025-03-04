import { Component } from '@angular/core';
import {BusinessCardComponent} from '../business-card/business-card.component';

@Component({
  selector: 'app-business-list',
  imports: [BusinessCardComponent],
  templateUrl: './business-list.component.html',
  styleUrl: './business-list.component.css'
})
export class BusinessListComponent {

}
