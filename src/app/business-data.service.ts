import {Injectable, signal} from '@angular/core';
import {NewBusinessModel} from './add-business/new-business.model';


@Injectable({
  providedIn: 'root'
})

export class BusinessDataService {

  businessList = signal<NewBusinessModel[]>([]);

  private submittedBusiness = signal<NewBusinessModel>({
    businessId: "",
    businessName: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessZipcode: "",
    businessTags: "",
    businessCategory: "",

  });

  getBusinessList() {
    return this.businessList;
  }

getBusinessById(id: string) {
return this.businessList().find((business) => business.businessId === id);
}


  setSubmittedBusinessId() {
    this.submittedBusiness().businessId = Math.floor(Math.random()*100).toString();
  }


  updateBusinessList() {
    const currentList = this.businessList();
    this.businessList.set([...currentList, this.submittedBusiness()]);
    console.log(this.businessList());
  }

  setSubmittedNewBusiness(newBusiness: NewBusinessModel) {
    this.submittedBusiness.set(newBusiness);
    this.setSubmittedBusinessId();
    this.updateBusinessList();
  }



}
