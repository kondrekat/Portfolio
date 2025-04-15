import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { ProjectPreviewsComponent } from './project-previews/project-previews.component';
import { SummaryComponent } from './summary/summary.component';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [
    AboutMeComponent,
    MyServicesComponent,
    PortfolioPageComponent,
    ProjectDetailsComponent,
    ProjectGalleryComponent,
    ProjectPreviewsComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [
    PortfolioPageComponent
  ]
})
export class MainPageModule { }
