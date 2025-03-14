import { Routes } from '@angular/router';
import {WelcomeViewComponent} from './welcome-view/welcome-view.component';
import {BusinessListComponent} from './business-list/business-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


export const routes: Routes = [

  {path: 'welcome-view', component: WelcomeViewComponent},
  {path: 'business-list', component: BusinessListComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: '', redirectTo: '/welcome-view', pathMatch: 'full'},


];
