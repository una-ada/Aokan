/**
 * Character API Service
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 */

/*----- Imports --------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/Character';

/*----- Injectable -----------------------------------------------------------*/
@Injectable({
  providedIn: 'root',
})
export class CharService {
  /*----- Constants ----------------------------------------------------------*/
  private baseUrl = 'http://localhost:3000/char/';

  /*----- Constructor --------------------------------------------------------*/
  constructor(private http: HttpClient) {}

  /*----- Methods ------------------------------------------------------------*/
  search(name: string): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.baseUrl}search/${name}`);
  }
}
