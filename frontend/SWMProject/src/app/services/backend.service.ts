import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  rootUrl = 'http://127.0.0.1:5000';

  postTweet(tweet: any){
    return this.http.post(this.rootUrl+'/name',{tweet});
  }

}
