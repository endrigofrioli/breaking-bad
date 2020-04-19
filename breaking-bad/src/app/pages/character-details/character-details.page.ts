import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// ------ code from Mikhail on slack, doesnt work ...
// export class CharacterDetailsPage implements OnInit {
//   character: any;
//   characterId = null;
//   constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }
//   ngOnInit() {
//     this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
//     this.api.getCharacter(this.characterId).subscribe(res => {
//       this.character = res[0];
//       console.log(JSON.stringify(this.character.char_id));
//     });
//   }
// }