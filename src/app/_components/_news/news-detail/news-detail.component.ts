import { Component, OnInit, Compiler } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { New } from '../../../models/news'
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  slug: string;
  noticia: New | any[] = [];
  constructor(
    private newsService: NewsService,
    private ar: ActivatedRoute,
    private router: Router,
    private _compiler : Compiler
    ) { }

  ngOnInit() {
    this.ar.params.subscribe(
      params => {
        this.slug = params['slug'];
        this.newsService.getNew(this.slug)
          .subscribe(
            res => {
              console.log(res);
              this.noticia = res;
            },
            err => console.log(err)
          )
      }
    )
    this._compiler.clearCache();
  }



}
