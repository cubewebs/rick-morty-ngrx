import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EpisodesResponse } from '../models/EpisodesResponse';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAllEpisodes( pageNum: number ): Observable<EpisodesResponse> {
    const params = new HttpParams().set('page', pageNum) 
    return this.http.get<EpisodesResponse>(`${this.baseUrl}/episode`, { params })
  }
}
