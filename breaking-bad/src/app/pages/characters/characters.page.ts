// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-characters',
//   templateUrl: './characters.page.html',
//   styleUrls: ['./characters.page.scss'],
// })
// export class CharactersPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// } //after class

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    characters: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.characters = this.api.getCharacters();
    }

    openDetails(character){
        let characterId = character.character_id;
        this.router.navigateByUrl('/tabs/characters/${characterId}');
    }
}
