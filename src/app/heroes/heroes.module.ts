import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class HeroesModule {

}
