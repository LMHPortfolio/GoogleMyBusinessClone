import {Injectable, signal} from '@angular/core';
import {NewBusinessModel} from './add-business/new-business.model';


@Injectable({
  providedIn: 'root'
})

export class BusinessDataService {

  businessList = signal<NewBusinessModel[]>([]);

  private submittedBusiness = signal<NewBusinessModel>({
    businessName: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessZipcode: "",
    businessTags: "",
    businessCategory: ""
  });

  getBusinessList() {
    return this.businessList;
  }

  setSubmittedNewBusiness(newBusiness: NewBusinessModel) {
    this.submittedBusiness.set(newBusiness);
    this.updateBusinessList();
  }

  updateBusinessList() {
    const currentList = this.businessList();
    this.businessList.set([...currentList, this.submittedBusiness()]);
    console.log(this.businessList());
  }




}
