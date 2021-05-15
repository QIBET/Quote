import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { name: 'benard',author: 'Kobe Bryant',message: 'If you work hard enough, Dreams do come true',date: '5/5/2021'},
    { name: 'jesse',author: 'Obama',message: 'Yes we can, Dreams do come true',date: '10/5/1965'},
    { name: 'chepkwony',author: 'Martin Luther',message: 'I have a dream',date: '2/5/1890'},
    
 
 
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
