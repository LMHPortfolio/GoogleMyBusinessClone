import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {BusinessListComponent} from './business-list/business-list.component';
import {HeaderComponent} from './shared/header/header.component';
import {NavComponent} from './shared/nav/nav.component';
import {HeaderSearchComponent} from './shared/header-search/header-search.component';
import {WelcomeViewComponent} from './welcome-view/welcome-view.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusinessListComponent, HeaderComponent,
    NavComponent, HeaderSearchComponent, WelcomeViewComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gbiz-clone';



}
