
/**
 * Character list/grid component
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 */

/*----- Imports --------------------------------------------------------------*/import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/AniList';


/*----- Decorator ------------------------------------------------------------*/
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})

/*----- Component ------------------------------------------------------------*/
export class CharactersComponent implements OnInit {
  @Input() characters: Character[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
