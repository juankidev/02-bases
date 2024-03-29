import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter(): void {
    const { name, power } = this.character;

    if (name != '' && power > 0) {
      this.onNewCharacter.emit(this.character);
      this.character = { name: '', power: 0 }
    }
  }
}
