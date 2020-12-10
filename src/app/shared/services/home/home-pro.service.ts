import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeProService {

  constructor(private http: HttpClient) { }

  getItems() {
    let url = environment.url;
    return this.http.get(`${url}posts`);
  }

}
