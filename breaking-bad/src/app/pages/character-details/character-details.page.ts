import { FavouriteService } from './../../services/favourite.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: any;
    characterId = null;
    isFavourite = false;

    //was in the list before
    //
    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private http: HttpClientModule, private favouriteService: FavouriteService) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.character.character_id));
        });

         this.favouriteService.isFavourite(this.characterId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
//   favouriteCharacter() {
//     this.favouriteService.favouriteCharacter(this.characterId).then(() => {
//       this.isFavourite = true;
//     });
//   }
 
//   unfavouriteCharacter() {
//     this.favouriteService.unfavouriteCharacter(this.characterId).then(() => {
//       this.isFavourite = false;
//     });
//     }
}