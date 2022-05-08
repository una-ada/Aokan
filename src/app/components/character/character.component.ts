/**
 * Character item component
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 */

/*----- Imports --------------------------------------------------------------*/
import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/interfaces/Character';

/*----- Decorator ------------------------------------------------------------*/
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})

/*----- Component ------------------------------------------------------------*/
export class CharacterComponent implements OnInit {
  @Input() character!: Character;

  constructor() {}

  ngOnInit(): void {}
}
