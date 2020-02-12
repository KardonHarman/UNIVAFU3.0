import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from '../models/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  urlApi = 'http://localhost:3000/api/news';
  // urlApi = 'https://univafu-server.herokuapp.com/api/news';
  urlApiMedia = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<New>(`${this.urlApi}`);
  }

  getNew(id: string) {
    return this.http.get<New>(`${this.urlApi}/${id}`)
  }
}
