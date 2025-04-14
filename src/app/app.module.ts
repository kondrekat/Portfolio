import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { DividerComponent } from './ui/divider/divider.component';
import { ButtonComponent } from './ui/button/button.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppComponent,
    PortfolioPageComponent,
    DividerComponent,
    ButtonComponent
  ],
  providers: [],
})
export class AppModule { }
