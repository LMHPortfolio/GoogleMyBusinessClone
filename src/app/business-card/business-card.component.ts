import { Component } from '@angular/core';
import type {Business} from '../Business';
import { BusinessDataService } from '../business-data.service';

@Component({
  selector: 'app-business-card',
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})


export class BusinessCardComponent implements Business {

  dummyBusinessesList =
    [
      {
        id: "1",
        name: "Easy Street Realty",
        location: "100 easy st",
        rating: "5 stars",
        tags: ['0rlando'],
      },
      {
        id: "2",
        name: "Welcome Home Rental Agency",
        location: "20 E Robinson St",
        rating: "4.3 stars",
        tags: ['Orlando', 'realty'],
      }
    ];

    name = this.dummyBusinessesList[0].name;
    location = this.dummyBusinessesList[0].location;
    rating = this.dummyBusinessesList[0].rating;
    tags = this.dummyBusinessesList[0].tags;

}
