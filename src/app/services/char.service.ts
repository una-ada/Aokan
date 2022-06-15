/**
 * Character API Service
 * @author Una Ada <una@xn--z7x.dev>
 */

/*----- Imports --------------------------------------------------------------*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../interfaces/AniList';
import { GraphQLResponse } from '../interfaces/GraphQL';

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
  search(name: string): Observable<GraphQLResponse<Page>> {
    return this.http.get<GraphQLResponse<Page>>(
      `${this.baseUrl}search/${name}`
    );
  }
}
