import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  imports: [
    CommonModule // Убедитесь, что CommonModule добавлен в массив imports
  ],
})
export class NavigationBarComponent {
  name = 'KATE KONDRATENKO';
  navigationLinksLeft = [
    { label: 'HOME', link: '#' },
    { label: 'ABOUT', link: '#about-me' }
  ];
  navigationLinksRight = [
    { label: 'WORK', link: '#projects' },
    { label: 'CONTACT', link: '#get-in-touch' }
  ];

  isMobileMenuOpen: boolean = false;

  get combinedNavigationLinks() {
    return [...this.navigationLinksLeft, ...this.navigationLinksRight];
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu () {
    this.isMobileMenuOpen = false;
  }
}