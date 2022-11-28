import { Component, OnInit } from '@angular/core';
import { TWEETS } from '../interfaces/TweetsInterface';

@Component({
  selector: 'app-glass-onion',
  templateUrl: './glass-onion.component.html',
  styleUrls: ['./glass-onion.component.css']
})
export class GlassOnionComponent implements OnInit {

  Tweets: TWEETS[] = [
    {
    "tweet": "Leanne Graham",
    "sentiment": "Positive"
  },
  {
    "tweet": "Leanne Graham",
    "sentiment": "Positive"
  },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
