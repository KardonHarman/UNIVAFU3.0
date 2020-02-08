import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { New } from '../../../models/news'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  id: string;
  noticia: New;
  constructor(
    private newsService: NewsService,
    private ar: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.ar.params.subscribe(
      params => {
        this.id = params['id'];
        this.newsService.getNew(this.id)
          .subscribe(
            res => {
              console.log(res);
              this.noticia = res;
            },
            err => console.log(err)
          )
      }
    )
  }



}
