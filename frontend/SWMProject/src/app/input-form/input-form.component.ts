import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
   

  constructor() { 
    
  }
  
  ngOnInit(): void {
  }

  inputTweet : string = "";
  onTweetSubmit() {
    //console.log(tweetForm.form)
    console.log(this.inputTweet);
  }

}
