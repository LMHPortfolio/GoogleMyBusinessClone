import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BusinessListComponent} from './business-list/business-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BusinessListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gbiz-clone';
}
