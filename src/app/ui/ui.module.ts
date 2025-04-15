import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';
import { ButtonComponent } from './button/button.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DividerComponent,
    ButtonComponent,
    NavigationBarComponent,
    FooterComponent
  ],
  exports: [
    DividerComponent,
    ButtonComponent,
    NavigationBarComponent,
    FooterComponent
  ]
})
export class UiModule { }
