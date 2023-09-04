import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class CounterModule {

}
