import {Injectable, Input} from '@angular/core';
import { faker} from '@faker-js/faker';
import {BusinessModel} from './Business.model';


@Injectable({
  providedIn: 'root'
})



export class BusinessDataService implements BusinessModel {

    name= "";
    location = "";
    rating = "";
    tags= "";

    @Input() newBusiness = {}



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

    getAddedBusiness() {


    }

}
