import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { SummaryComponent } from '../summary/summary.component';
import { ProjectGalleryComponent } from '../project-gallery/project-gallery.component';
import { MyServicesComponent } from '../my-services/my-services.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-portfolio-page',
  imports: [ 
    NavigationBarComponent,
    SummaryComponent,
    ProjectGalleryComponent,
    MyServicesComponent,
    FooterComponent

  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {

}
