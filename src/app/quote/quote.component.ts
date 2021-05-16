import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Jesse','Kobe bryant','If you work hard enough, Dreams do come true',0,0,new Date(2020,3,14)),
    new Quote('Benard','Barrack Obama','Yes we Can',0,0,new Date(2020,9,4)),
    
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
    uvotes = 0;
    dvotes = 0;
    upvote() {
      this.uvotes =+ 1;
    }
    downvote() {
      this.dvotes =+1
    }
    preNum:number|any;
    lastNum:number|any;
    counter:number|any;

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upVote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
