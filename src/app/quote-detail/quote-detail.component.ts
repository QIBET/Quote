import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote | any;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
    upvote:number = 0;
    downvote: number = 0;
  upVote() {
    this.quote.upvote += 1;
  }
  downVote() {
    this.quote.downvote +=1;
  } 

   
 
  constructor() { }

  ngOnInit() {
  }

}