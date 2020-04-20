import { FavouriteService } from './../../services/favourite.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    episode: any;
    episodeId = null;
    isFavourite = false;

    //was in the list before
    //
    constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private http: HttpClientModule, private favouriteService: FavouriteService) { }

    ngOnInit() {
        // from slide, didnt work
        // let id = this.activatedRoute.snapshot.paramMap.get('id');
        // this.http.get(`https://breakingbadapi/api/episodes/${id}`).subscribe(res => {
        //     this.episode = res[0];


        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episode.episode_id)); //added 19042020
        });

         this.favouriteService.isFavourite(this.episodeId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteEpisode() {
    this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteEpisode() {
    this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = false;
    });
    }
}