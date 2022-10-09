import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RickActions from '../../+store/actions';
import * as RickSelectors from '../../+store/selectors';
import { of, Subscription, tap } from 'rxjs';
import { Character, Info } from 'src/app/models/CharactersResponse';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  pageNum: number = 1;
  characters: Character[] = [];
  subscription: Subscription[] = [];
  info: Info = {
    count: 0,
    pages: 1,
    next:  '',
    prev:  ''
  }
  isPrevDisabled: boolean = true;
  isNextDisabled: boolean = true;


  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getAllCharacters();
    this.handleSubscriptions();
  }

  handleSubscriptions() {
    this.subscription.push(
      this.store.select(RickSelectors.loadCharacters)
      .subscribe( data => this.characters = data  )
    )
  }
  
  getAllCharacters() {
    this.isNextDisabled = false;
    this.store.dispatch(RickActions.getAllCharacters({pageNum: this.pageNum}))
  }

  nextPage() {

    if(this.pageNum >= 1) {
      this.pageNum ++;
      this.store.dispatch(RickActions.getAllCharacters({pageNum: this.pageNum}))
      this.isNextDisabled = false;
    }
    if(this.pageNum > 1) {
      this.isPrevDisabled = false;
    } 
  }
  
  previousPage() {
    if(this.pageNum !== 1) {
      this.pageNum --;
      this.store.dispatch(RickActions.getAllCharacters({pageNum: this.pageNum}))
      this.isPrevDisabled = false
    }
    if(this.pageNum < 2) { this.isPrevDisabled = true;}
  }


}
