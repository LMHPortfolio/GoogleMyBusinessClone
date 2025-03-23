import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  mobileMenuActive: boolean = false;
  mobileMenuAccordion: boolean = false;

  toggleMenu() {
    this.mobileMenuActive = !(this.mobileMenuActive);
    this.mobileMenuAccordion = !(this.mobileMenuAccordion);
  }
}
