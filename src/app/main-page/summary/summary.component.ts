import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  standalone: false
})
export class SummaryComponent {
  headingText = "HI, I'M KATE KONDRATENKO PROFESSIONAL FRONTEND DEVELOPER";
  leftText = "Based in Haifa, Israel and working Worldwide";
  rightText = "Passionate Frontend Developer: Building Engaging Web Interfaces with Angular and More";
}