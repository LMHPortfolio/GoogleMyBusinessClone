import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavComponent} from './shared/nav/nav.component';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gbiz-clone';

}
