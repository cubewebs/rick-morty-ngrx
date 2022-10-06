import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CharactersResponse } from '../models/CharactersResponse';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string = 'https://rickandmortyapi.com/api'

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(pageNum: number) {
    const params = new HttpParams().set('page', pageNum)
    return this.http.get<CharactersResponse>(`${this.baseUrl}/character`, {params})
  }
}
