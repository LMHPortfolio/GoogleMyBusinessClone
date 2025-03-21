import {Injectable, Input} from '@angular/core';
import { faker} from '@faker-js/faker';
import {Business} from './Business';


@Injectable({
  providedIn: 'root'
})



export class BusinessDataService implements Business {


    name= "";
    location = "";
    rating = "";
    tags= "";




  getFakeBusiness() {
    return {
        name: faker.company.name(),
        location: faker.location.streetAddress(),
        rating: Math.floor(Math.random()*6) + "." + Math.floor(Math.random()*9).toString(),
        tags: faker.location.city()
      }

  };


    businessData = {
      name: this.getFakeBusiness().name,
      location: this.getFakeBusiness().location,
      rating: this.getFakeBusiness().rating,
      tags: this.getFakeBusiness().tags

    }

}
