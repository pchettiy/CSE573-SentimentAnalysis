import { Component, OnInit } from '@angular/core';
import { TWEETS } from '../interfaces/TweetsInterface';

@Component({
  selector: 'app-black-adam',
  templateUrl: './black-adam.component.html',
  styleUrls: ['./black-adam.component.css']
})
export class BlackAdamComponent implements OnInit {

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
