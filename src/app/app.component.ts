import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BusinessListComponent} from './business-list/business-list.component';
import {HeaderComponent} from './shared/header/header.component';
import {NavComponent} from './shared/nav/nav.component';
import {HeaderSearchComponent} from './shared/header-search/header-search.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusinessListComponent, HeaderComponent,
    NavComponent, HeaderSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gbiz-clone';
}
