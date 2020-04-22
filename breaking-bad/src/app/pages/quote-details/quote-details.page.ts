
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
  quote: any;
  quoteId = null;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private http:HttpClientModule) { }
  
  ngOnInit() {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getQuote(this.quoteId).subscribe(res => {
      this.quote = res[0];
      console.log(JSON.stringify(this.quote.quote_id));
    });
  }
}