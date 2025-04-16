import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
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
}