import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, CharactersResponse } from '../models/CharactersResponse';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  searchCharacters( term: string ): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(`${this.baseUrl}/character/?name=${term}`)
  }

}
