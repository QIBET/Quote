import { Component, Output, EventEmitter, OnInit } from'@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote("","","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  postQuote(){
  this.addQuote.emit(this.newQuote);
    }


  constructor() { }

  ngOnInit(): void {
  }

}
