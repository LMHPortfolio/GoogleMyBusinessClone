import {Injectable, effect} from '@angular/core';
import {AddBusinessComponent} from './add-business/add-business.component';


@Injectable({
  providedIn: 'root'
})



export class BusinessDataService {


  businessData = {
    businessName: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessZipcode: "",
    businessTags: "",
    businessCategory: ""
  }

  constructor() {}



  dummyBusinessData = {
    "businesses": [
      {
        "id": "1",
        "name": "Easy Street Realty",
        "address": "100 easy st",
        "city": "Boston",
        "state": "MA",
        "tags": "Boston",


      },

    ]
  }

}
