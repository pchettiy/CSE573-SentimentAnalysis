import { Component, OnInit } from '@angular/core';
import { TWEETS } from '../interfaces/TweetsInterface';


@Component({
  selector: 'app-black-panther',
  templateUrl: './black-panther.component.html',
  styleUrls: ['./black-panther.component.css']
})
export class BlackPantherComponent implements OnInit {
  Tweets: TWEETS[] = [
    {
    "tweet": "Letitia wright was so good in black panther she almost made me forget about all of her foolery over the past few years💀",
    "sentiment": "Positive"
  },
  {
    "tweet": "Letitia Wright went from the comedic relief adorable sister to having to carry the entire emotional weight of BP. From cute and comedy to DRAMA and she did an amazing fcking job. Not many people can do that transition when they were cast for light#WakandaForever #BlackPanther",
    "sentiment": "Positive"
  },
  {
    "tweet": "Perverting the mantra of the Black Panther Party - “all power to the people” for his juvenile games. The good news is by the time one phrase has been hijacked, we’ve moved on to others to rally ourselves. They’ll never be able to keep up.",
    "sentiment": "Neutral"
  },
  {
    "tweet": "Man, Wakanda Forever... what a win.",
    "sentiment": "Positive"
  },
  {
    "tweet": "Overall weak",
    "sentiment": "Negative"
  },
  {
    "tweet": "Black Panther not what I expected",
    "sentiment": "Negative"
  },
  {
    "tweet": "Black Panther 2 Review:Namor is an excellent villain. The characters are good and Shuri's character arc is awesome. Solid, but superb action. Ending was a bit long.The Plot is a damn mess.Rating: 6.5/10",
    "sentiment": "Positive"
  },
  {
    "tweet": "REVIEW: Black Panther: Wakanda Forever is well crafted and heartfelt, with an emotionally charged and thematically strong story and great performances, also serving as a fitting tribute to Chadwick Boseman.",
    "sentiment": "Positive"
  },
  {
    "tweet": "Black Panther: Wakanda Forever, just wow i am speechless, these people know how to tell a story, the DP did an amazing job and so did the entirity of the production team, ive seen reviews from people who want constant action, but that isnt an action movie, its a memorial",
    "sentiment": "Positive"
  },
  {
    "tweet": "Black Panther 2 was too good don’t listen to any negative reviews",
    "sentiment": "Positive"
  },
  
  {
    "tweet": "popular opinion and basically a fact but both black panther movies have the best soundtracks in the mcu",
    "sentiment": "Positive"
  },
  {
    "tweet": "The costume design in this scene continues to amaze me. #BlackPanther",
    "sentiment": "Positive"
  },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  

}
