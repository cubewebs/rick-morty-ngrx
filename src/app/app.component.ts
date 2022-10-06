import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscriber, Subscription, tap } from 'rxjs';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rxjs - ngrx';
  parrafo: string = '';
  characters: any;
  


  constructor(
    private ss: SharedService
  ) {
    
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.ss.getCharacters().pipe(
      tap( rp => console.log('rp', rp))
    ).subscribe(
      resp => this.characters = resp
    )
  }

}
