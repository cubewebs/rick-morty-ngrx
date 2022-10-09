import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, CharactersResponse } from '../models/CharactersResponse';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(pageNum: number): Observable<CharactersResponse> {
    const params = new HttpParams().set('page', pageNum)
    return this.http.get<CharactersResponse>(`${this.baseUrl}/character`, {params})
  }

  
}
