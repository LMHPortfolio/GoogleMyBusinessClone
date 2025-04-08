import {Component, EventEmitter, Output} from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {NewBusinessModel} from './new-business.model';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-add-business',
  imports: [HeaderComponent, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './add-business.component.html',
  styleUrl: './add-business.component.css'
})
export class AddBusinessComponent {

  constructor(private route: ActivatedRoute) {}

  @Output() add = new EventEmitter<{

    businessName:string,
    businessAddress:string,
    businessCity:string,
    businessState:string,
    businessZipcode:string,
    businessTags:string,
    businessCategory:string | string[];

  }>

  pageTitle = "Add new business";

  businessName= "";
  businessAddress= "";
  businessCity= "";
  businessState= "";
  businessZipcode= "";
  businessTags= "";
  businessCategory= "";


onSubmitNewBusiness () {
  this.add.emit({
    businessName: this.businessName,
    businessAddress: this.businessAddress,
    businessCity: this.businessCity,
    businessState: this.businessState,
    businessZipcode: this.businessZipcode,
    businessTags: this.businessZipcode,
    businessCategory: this.businessCategory,




  });

  console.log(this.businessName);

}

}
