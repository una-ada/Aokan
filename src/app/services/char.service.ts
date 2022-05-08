/**
 * Character API Service
 * @author Una Ada <una@xn--z7x.dev>
 * @version 2022.05.08
 */

/*----- Imports --------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})

/*----- Exports --------------------------------------------------------------*/
export class CharService {
  private baseUrl = 'http://localhost:3000/char/';

  constructor(private http: HttpClient) {}
}
