import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route: ActivatedRoute) {}

  @Input() pageTitle!:string;
  currentPath? = '';
  dashboardIsCurrentPath = false;


  ngOnInit() {
    this.currentPath = this.route.snapshot.routeConfig?.path;

    if (this.currentPath?.includes('dashboard')) {
      this.dashboardIsCurrentPath = true;
    }
     else {
      this.dashboardIsCurrentPath = false;
    }
  }
}
