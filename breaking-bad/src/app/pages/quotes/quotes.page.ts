// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-quotes',
//   templateUrl: './quotes.page.html',
//   styleUrls: ['./quotes.page.scss'],
// })
// export class QuotesPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-quotes',
    templateUrl: './quotes.page.html',
    styleUrls: ['./quotes.page.scss'],
})
export class QuotesPage implements OnInit {
    quotes: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }
    ngOnInit() {
        this.quotes = this.api.getQuotes();
    }

    openDetails(quotes){
        let quoteId = quotes.quote_id;
        this.router.navigateByUrl('/tabs/quotes/${quoteId}');
    }
}