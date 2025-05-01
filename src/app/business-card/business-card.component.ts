import {Component, input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewBusinessModel} from '../add-business/new-business.model';



@Component({
  selector: 'app-business-card',
  imports: [],
  templateUrl: './business-card.component.html',
  styleUrl: './business-card.component.css'
})


export class BusinessCardComponent  {

  constructor(private router:Router) {}

business = input.required<NewBusinessModel>();



  navigateToDetailView(event:MouseEvent):void {
    event.preventDefault();
    void this.router.navigate(['/business-detail']);

  }
  //submit event that this business was clicked and show that detail

}
