import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  standalone: false
})
export class AboutMeComponent {
  public buttonText: string = 'More about me';

  openLink() {
    window.open('https://www.linkedin.com/in/kondrekat/', '_blank');
  }
  
}