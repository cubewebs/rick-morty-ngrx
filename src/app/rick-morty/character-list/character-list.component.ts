import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Character, Info } from 'src/app/models/CharactersResponse';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];
  info: Info = {
    count: 0,
    pages: 1,
    next:  '',
    prev:  ''
  }
  pageNum: number = 1;
  isPrevDisabled: boolean = true;
  isNextDisabled: boolean = true;

  get page() {
    return this.info.pages
  }


  constructor(
    private charService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getAllCharacters();
  }

  nextPage() {

    if(this.pageNum >= 1) {
      this.pageNum ++;
      this.charService.getCharacters(this.pageNum).subscribe(
        resp => this.characters = resp.results
        )
        this.isPrevDisabled = false;
        console.log('pageNum', this.pageNum, this.info.pages)
    } 
  }

  previousPage() {
    if(this.pageNum !== 1) {
      this.pageNum --;
      this.charService.getCharacters(this.pageNum).subscribe(
        resp => this.characters = resp.results
        )
      }
      console.log('pageNum', this.pageNum)
  }

  getAllCharacters() {
    if( this.pageNum > 1) {
      this.isPrevDisabled = true;
    }
    if( this.pageNum < this.info.pages) {
      this.isNextDisabled = true;
    } else {
      this.isNextDisabled = false;
    }
    this.charService.getCharacters(this.pageNum).pipe(
      tap( info => this.info = info.info)
    ).subscribe(
      resp => this.characters = resp.results
    )
  }


}
