import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Episode, Info } from 'src/app/models/EpisodesResponse';
import * as RickActions from '../../+store/actions';
import * as RickSelectors from '../../+store/selectors';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  pageNum: number = 1;
  episodes: Episode[] = [];
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
    this.getAllEpisodes();
    this.handleSubscriptions();
  }

  handleSubscriptions() {
    this.subscription.push(
      this.store.select(RickSelectors.loadEpisodes)
      .subscribe( data => this.episodes = data  )
    );

    this.subscription.push(
      this.store.select(RickSelectors.getInfo)
        .subscribe( data => this.info = data )
    );
  }
  
  getAllEpisodes() {
    this.isNextDisabled = false;
    this.store.dispatch(RickActions.getAllEpisodes({pageNum: this.pageNum}))
  }

  nextPage() {

    if(this.pageNum < this.info.pages) {
      this.pageNum ++;
      this.store.dispatch(RickActions.getAllEpisodes({pageNum: this.pageNum}))
      this.isNextDisabled = false;
    } else {
      this.isNextDisabled = true;
    }
    if(this.pageNum !== 1) {
      this.isPrevDisabled = false;
    }
  }
  
  previousPage() {
    if(this.pageNum !== 1) {
      this.pageNum --;
      this.store.dispatch(RickActions.getAllEpisodes({pageNum: this.pageNum}))
      this.isPrevDisabled = false;
    } else {
      this.isPrevDisabled = true;
    }
    if(this.pageNum < this.info.pages) {
      this.isNextDisabled = false;
    }
  }

}
