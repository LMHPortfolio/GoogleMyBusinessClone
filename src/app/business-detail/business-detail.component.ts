import {Component, inject, input, OnInit, signal} from '@angular/core';
import {HeaderComponent} from '../shared/header/header.component';
import {NewBusinessModel} from '../add-business/new-business.model';
import {ActivatedRoute} from '@angular/router';
import {BusinessDataService} from '../business-data.service';


@Component({
  selector: 'app-business-detail',
  imports: [HeaderComponent],
  templateUrl: './business-detail.component.html',
  styleUrl: './business-detail.component.css'
})
export class BusinessDetailComponent implements OnInit {

  //business = input.required<NewBusinessModel>();
  business = signal<NewBusinessModel | null>(null);
  pageTitle = "";

  route: ActivatedRoute = inject(ActivatedRoute);
    constructor(private businessService: BusinessDataService) {}


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        const businessData = this.businessService.getBusinessById(id);
        if (businessData) {
          this.business.set(businessData);
          this.pageTitle = `Viewing Business Details for ${businessData.businessName}`;
        }
      }
    });
  }


}
