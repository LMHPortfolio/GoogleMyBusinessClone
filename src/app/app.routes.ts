import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import {BusinessListComponent} from './business-list/business-list.component';


export const routes: Routes = [

  {path: 'dashboard', component: DashboardComponent},
  {path: 'business-list', component: BusinessListComponent},
  {path: '**', component:  DashboardComponent},

];
