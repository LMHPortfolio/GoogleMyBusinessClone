import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import {BusinessListComponent} from './business-list/business-list.component';
import {BusinessDetailComponent} from './business-detail/business-detail.component';
import {AddBusinessComponent} from './add-business/add-business.component';


export const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'business-list', component: BusinessListComponent},
  {path: 'business-details/:id', component: BusinessDetailComponent},
  {path: 'add-business', component: AddBusinessComponent},
  {path: '**', redirectTo: 'dashboard' },

];
