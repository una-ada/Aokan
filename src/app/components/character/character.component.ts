/**
 * Character item component
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 */

/*----- Imports --------------------------------------------------------------*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from 'src/app/interfaces/AniList';

/*----- Component ------------------------------------------------------------*/
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  /*----- I/O ----------------------------------------------------------------*/
  @Input() character!: Character;
  @Output() onSelectCharacter: EventEmitter<Character> = new EventEmitter();

  /*----- Construction -------------------------------------------------------*/
  constructor() {}
  ngOnInit(): void {}

  /*----- Methods ------------------------------------------------------------*/
  onSelect(character: Character) {
    this.onSelectCharacter.emit(character);
  }
}
