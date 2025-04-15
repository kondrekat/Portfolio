import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MainPageModule } from './main-page/main-page.module';
import { UiModule } from './ui/ui.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppComponent,
    MainPageModule,
    UiModule
  ],
  providers: [],
})
export class AppModule { }
