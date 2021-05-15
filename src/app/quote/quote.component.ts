import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Jesse','Kobe bryant','If you work hard enough, Dreams do come true',new Date(2020,3,14)),
    new Quote('Benard','Barrack Obama','Yes we Can',new Date(2020,9,4)),
    
    ]
    addNewQuote(quote: any){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.publishDate = new Date(quote.publishDate)
      this.quotes.push(quote)
    }
    deleteQuote(isComplete: any, index: any){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

  constructor() { }

  ngOnInit(): void {
  }

}
