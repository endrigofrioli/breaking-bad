import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deaths',
  templateUrl: './deaths.page.html',
  styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { ApiService } from '../../services/api.service';

// @Component({
//     selector: 'app-deaths',
//     templateUrl: './deaths.page.html',
//     styleUrls: ['./deaths.page.scss'],
// })
// export class DeathsPage implements OnInit {
//     deaths: Observable<any>;
//     constructor(private router: Router, private api: ApiService) { }
//     ngOnInit() {
//         this.deaths = this.api.getDeaths();
//     }

//     openDetails(death){
//         let deathId = death.death_id;
//         this.router.navigateByUrl('/tabs/deaths/${deathId}');
//     }
// }