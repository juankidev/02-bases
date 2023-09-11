import { Character } from '../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter( character: Character ): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character
    }
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id: string): void {
    if (id) {
      this.characters = this.characters.filter( character => character.id !== id);
    }
  }

}
