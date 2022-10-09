import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, Subscription, switchMap } from 'rxjs';
import { Character } from 'src/app/models/CharactersResponse';
import * as RickSelectors from '../../+store/selectors';
import * as RickActions from '../../+store/actions';
import { Episode } from 'src/app/models/EpisodesResponse';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  subscriptions: Subscription[] = [];
  character!: Character;
  episodes: Episode[] = [];
  splitedUrls: string[] = [];
  hasData: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private store: Store,
    private ac: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.handleSubscriptions();
    
  }

  handleSubscriptions() {
    this.hasData = false;

    setTimeout(() => {
        
      this.subscriptions.push(
        this.ac.params.subscribe((params) => {
          let id: number = Number(params['id']);
          return this.store.dispatch(RickActions.getSingleCharacter({id}))
        }),
        this.store.select(RickSelectors.loadSingleCharacter).subscribe( char => {
          this.character = char;
          this.episodes = char.episode;
          this.hasData = true;
        })
      )

    }, 1000);
  }

  

}
