import { Component } from '@angular/core';
import type {Business} from '../Business';

@Component({
  selector: 'app-business-card',
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})


export class BusinessCardComponent implements Business {

  name = "ACME";
  location = "123 Easy St";
  rating = "4.2 stars";
  tags = ["orlando"];


}
