import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-noticias-dialog',
  templateUrl: './noticias-dialog.component.html',
  styleUrls: ['./noticias-dialog.component.css']
})
export class NoticiasDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any, public dialogRef: MatDialogRef<NoticiasDialogComponent>) { }

  ngOnInit() {
  }

}
