/**
 * Index page component
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 */

/*----- Imports --------------------------------------------------------------*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/*----- Component ------------------------------------------------------------*/
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})

/*----- Exports --------------------------------------------------------------*/
export class IndexComponent implements OnInit {
  isLinear = true;
  characterSelect!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.characterSelect = this.formBuilder.group({
      characterName: ['', Validators.required],
    });
  }
}
