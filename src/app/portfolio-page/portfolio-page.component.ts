import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { SummaryComponent } from '../summary/summary.component';
import { ProjectGalleryComponent } from '../project-gallery/project-gallery.component';
import { MyServicesComponent } from '../my-services/my-services.component';
import { FooterComponent } from '../footer/footer.component';
import { ProjectPreviewsComponent } from '../project-previews/project-previews.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-portfolio-page',
  imports: [ 
    NavigationBarComponent,
    SummaryComponent,
    ProjectPreviewsComponent,
    AboutMeComponent,
    ProjectGalleryComponent,
    MyServicesComponent,
    FooterComponent

  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {

}
