import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{ counter }} </h3>
    <button class="btn-counter" (click)="increaseBy(-1)">-</button>
    <button class="btn-counter" (click)="reset()">Reset</button>
    <button class="btn-counter" (click)="increaseBy()">+</button>
  `
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy(increase: number = 1) {
    this.counter += increase;
  }

  reset(){
    this.counter = 10;
  }

}
