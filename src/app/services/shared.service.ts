import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersResponse } from '../models/CharactersResponse';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  baseUrl: string = 'https://rickandmortyapi.com/api'

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(this.baseUrl + '/character')
  }
}
