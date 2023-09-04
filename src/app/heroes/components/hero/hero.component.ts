import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = 'Tony Stark';
  public alterEgo: string = 'Iron Man';
  public age: number = 45;

  get capitalizedName(): string {
    return this.alterEgo.toUpperCase();
  }

  getHeroDescripction(): string {
    return `${this.name} - ${this.age} years`;
  }

  changeHero(): void {
    this.alterEgo = 'SpiderMan';
  }

  changeName(): void {
    this.name = 'Peter Parker';
  }

  changeAge(): void {
    this.age = 19;
  }

  reset(): void {
    this.name = 'Tony Stark';
    this.alterEgo = 'Iron Man';
    this.age = 45;
  }
}
