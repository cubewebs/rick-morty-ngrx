import { Pipe, PipeTransform } from '@angular/core';
import { Character, Info } from 'src/app/models/CharactersResponse';
import { CharactersService } from 'src/app/services/characters.service';

@Pipe({
  name: 'characterListPaging'
})
export class CharacterListPipe implements PipeTransform {

  transform(characters: Character[], page: number = 0): Character[] {
    return characters.slice(page, page + 20);
  }

}
