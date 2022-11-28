import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  rootUrl = 'http://18d6-34-91-135-88.ngrok.io';

  postTweet(tweet: any){
    let headers = new HttpHeaders();

    headers.append('Access-Control-Allow-Origin', 'http, https');
    headers.append("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTONS");
    headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    return this.http.post(this.rootUrl+'/name',{tweet},{headers:headers});
  }

}