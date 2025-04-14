import { Component } from '@angular/core';
import { DividerComponent } from '../ui/divider/divider.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  imports: [
    DividerComponent
  ]
})
export class SummaryComponent {
  headingText = "HI, I'M KATE KONDRATENKO PROFESSIONAL FRONTEND DEVELOPER";
  leftText = "Based in Haifa, Israel and working Worldwide";
  rightText = "Passionate Frontend Developer Crafting Visually Captivating Websites with Angular or anything you wish";
}