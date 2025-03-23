import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import {BusinessListComponent} from './business-list/business-list.component';
import {BusinessDetailComponent} from './business-detail/business-detail.component';


export const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'business-list', component: BusinessListComponent},
  {path: 'business-detail', component: BusinessDetailComponent},
  {path: '**', redirectTo: 'dashboard' },

];
