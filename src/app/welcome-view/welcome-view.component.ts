import { Component } from '@angular/core';
import {HeaderComponent} from "../shared/header/header.component";

@Component({
  selector: 'app-welcome-view',
  imports: [
    HeaderComponent,

  ],
  templateUrl: './welcome-view.component.html',
  styleUrl: './welcome-view.component.css'
})
export class WelcomeViewComponent {
pageTitle = "Welcome, Name";
}
