import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  headingText = "HI, I'M KATE KONDRATENKO PROFESSIONAL FRONTEND DEVELOPER";
  leftText = "Based in Haifa, Israel and working Worldwide";
  rightText = "Passionate Frontend Developer Crafting Visually Captivating Websites with Angular or anything you wish";
}