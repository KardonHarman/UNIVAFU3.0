import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/_services/news.service';
import { New } from '../../../models/news'


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  noticias: New | any[] = [];
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getNews()
      .subscribe(
        res =>{
          this.noticias = res;
        },
        err => console.log(err)
      )
  }

  selectedNew(id: string){
    this.router.navigate(['/noticias', id])
  };

}
