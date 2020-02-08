import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { New } from '../models/news';


@Injectable({
  providedIn: 'root'
})
export class NewsService {

  urlApi = 'https://univafu-server.herokuapp.com/api/news';
  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<New>(`${this.urlApi}`);
  }

  getNew(id: string) {
    return this.http.get<New>(`${this.urlApi}/${id}`)
  }
}
