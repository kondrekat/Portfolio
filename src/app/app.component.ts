import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PortfolioPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
