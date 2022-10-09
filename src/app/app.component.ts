import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription, tap } from 'rxjs';
import { Character } from './models/CharactersResponse';
import { SearchService } from './services/search.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs - ngrx';
  term: string = '';
  hasError: boolean = false;
  results: Character[] = [];
  


  constructor(
    private ss: SharedService,
    private searchService: SearchService
  ) {
    
  }

  ngOnInit(): void {}

  search() {
    this.hasError = false;
    console.log('terminno: ', this.term);

    this.searchService.searchCharacters( this.term ).subscribe(
      resp => {
        console.log('resp', resp.results)
        this.results = resp.results
      },
      err => {
        this.hasError = true;
        this.results = [];
        console.log('error: ', err)
      },
      () => {
        console.log('completed ')
      }
    )
  }

  onMore() {
    this.term = '';
    this.results = [];
  }

}
