import { Component } from '@angular/core';
import { DividerComponent } from "../../ui/divider/divider.component";
import { ButtonComponent } from "../../ui/button/button.component";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  standalone: false
})
export class AboutMeComponent {
  public buttonText: string = 'More about me';
}