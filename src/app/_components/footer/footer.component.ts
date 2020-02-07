import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  constructor(public router: Router) { }

  ngOnInit() {
    
  }

  onClick() {
    this.router.navigate(['aviso-legal']);
  }

}
