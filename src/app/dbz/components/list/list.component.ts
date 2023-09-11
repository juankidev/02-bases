import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  onDeleteId: EventEmitter<string> = new EventEmitter();

  @Input('characters')
  public characterList: Character[] = [ {name: 'Thrunks', power: 10} ];

  onDeleteCharacter(id: string): void {
    //Emitir el id del personaje
    this.onDeleteId.emit(id);
  }
}
