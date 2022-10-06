import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseUrl: string = 'https://rickandmortyapi.com/api/character/'

  constructor(
    private http: HttpClient
  ) { }

  getSingleCharacter(id: number) {
    return this.http.get(`${this.baseUrl}${id}`)
  }
}
