import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote('Jesse','Albert Einstein',' “If you want to live a happy life, tie it to a goal, not to people or things.”',0,0,new Date(1988,3,14)),
    new Quote('Benard','Kobe Bryant','“Everything negative – pressure, challenges – is all an opportunity for me to rise.”',0,0,new Date(2020,9,4)),
    new Quote('Lorraine','Jeff Bezzos','“If you’re not stubborn, you’ll give up on experiments too soon. And if you’re not flexible, you’ll pound your head against the wall and you won’t see a different solution to a problem you’re trying to solve. ”',0,0,new Date(2020,9,4)),
    new Quote('Beryl','Buddha','“Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.” ',0,0,new Date(1988,3,14)),

    ]
    
    toggleDetails(index:any){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    
    completeQuote(isComplete: any, index: any){
      if (isComplete) {
        this.quotes.splice(index,1);
      }
    }
    
    addNewQuote(quote: any){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.publishDate = new Date(quote.publishDate)
      this.quotes.push(quote)
    }
    deleteQuote(isComplete: any, index: any){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete this Quote?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
    
    preNum:number|any;
    lastNum:number|any;
    counter:number|any;

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvote;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
