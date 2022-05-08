/**
 * Index page component
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 */

/*----- Imports --------------------------------------------------------------*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Character } from '../../interfaces/Character';
import { CharService } from '../../services/char.service';

/*----- Component ------------------------------------------------------------*/
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  /*----- I/O ----------------------------------------------------------------*/
  isLinear = true;
  characterSelect!: FormGroup;
  vaSelect!: FormGroup;
  searchResults: Character[] | undefined;

  /*----- Constructor --------------------------------------------------------*/
  constructor(
    private formBuilder: FormBuilder,
    private characterService: CharService
  ) {}
  ngOnInit(): void {
    this.characterSelect = this.formBuilder.group({
      characterName: new FormControl(),
    });
    this.vaSelect = this.formBuilder.group({});
  }

  /*----- Methods ------------------------------------------------------------*/
  characterNameInput(): void {
    this.characterService
      .search(this.characterSelect.value.characterName)
      .subscribe((list) => (this.searchResults = list));
  }
}
