import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
   

  constructor(private backendService:BackendService) { 
    
  }
  
  ngOnInit(): void {
  }

  inputTweet : string = "";
  prediction : any;
  onTweetSubmit() {
    console.log(this.inputTweet);
    this.backendService.postTweet(this.inputTweet).subscribe(data => {
      console.log("Server response",data);
      this.prediction = data;
    })
  }

}
