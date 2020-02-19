import { Component, OnInit, Compiler } from '@angular/core';
import { NewsService } from 'src/app/_services/news.service';
import { New } from '../../../models/news'
import { ActivatedRoute, Router } from '@angular/router';
import { UvfService } from '../../../_services/uvf.service';



@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  slug: string;
  noticias: New | any[] = [];
  noticia: New | any[] = [];
  title: any;
  url: string
  constructor(
    public _uvfService: UvfService,
    private newsService: NewsService,
    private ar: ActivatedRoute,
    private router: Router,
    private _compiler: Compiler
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
              this.title = this.noticia.toString().split(' ')
              this.url = `http://localhost:4200/noticias/${this.noticia._id}`;
            },
            err => console.log(err)
          )
      }
    )
    this.getNews();
    this._compiler.clearCache();
  }

  getNews() {
    this.newsService.getNews()
      .subscribe(
        res => {
          this.noticias = res;
        },
        err => console.log(err)
      )
  }

  /**
   * get sortedNews
 : New[]  */


  selectedNew(id: string) {
    this.router.navigate(['/noticias', id])
  };



}
