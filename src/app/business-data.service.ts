import { Injectable } from '@angular/core';
import { faker} from '@faker-js/faker/locale/en_US';

@Injectable({
  providedIn: 'root'
})
export class BusinessDataService {

  generateFakeBusiness() {
    return {
      name: faker.company.name(),
      location: faker.location.streetAddress(),
      rating: Math.floor((Math.random()*5)+1) + "." + Math.floor(Math.random()*9).toString(),
      tags: faker.location.city()
    }
  };

}
