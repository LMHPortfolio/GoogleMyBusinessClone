import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BusinessListComponent} from './business-list/business-list.component';
import {HeaderComponent} from './shared/header/header.component';
import {NavComponent} from './shared/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusinessListComponent, HeaderComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gbiz-clone';
}
