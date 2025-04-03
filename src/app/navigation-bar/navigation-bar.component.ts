import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  name = 'KATE KONDRATENKO';
  navigationLinksLeft = [
    { label: 'HOME', link: '#home' },
    { label: 'ABOUT', link: '#about' }
  ];
  navigationLinksRight = [
    { label: 'WORK', link: '#work' },
    { label: 'CONTACT', link: '#contact' }
  ];
}