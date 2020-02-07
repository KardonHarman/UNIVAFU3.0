import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';
import { UvfService } from '../../_services/uvf.service';
import { MatSnackBar } from '../../../../node_modules/@angular/material';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit, OnDestroy {

  public contactos: any = [
    {
      "value": 0,
      "urlLogo": "http://univafu.edu.mx/assetsWebsite/logos/univafu.png",
      "color": "#3d95d4",
      "direccion": [
        { "desc": "Río Presidio, No. 1955 Nte." },
        { "desc": "Col. Tepeca" },
        { "desc": "Los Mochis, Sinaloa, México." },
        { "desc": "(668) 8807374" }
      ]
    },
    {
      "value": 1,
      "urlLogo": "http://univafu.edu.mx/assetsWebsite/logos/fundacion.png",
      "color": "#b01a1e",
      "direccion": [
        { "desc": "Río Presidio, No. 1955 Nte." },
        { "desc": "Col. Tepeca" },
        { "desc": "Los Mochis, Sinaloa, México." },
        { "desc": "(668) 8807374, Ext. 125" }
      ]
    },
    {
      "value": 2,
      "urlLogo": "http://univafu.edu.mx/assetsWebsite/logos/iiu.png",
      "color": "#1c447e",
      "direccion": [
        { "desc": "Río Presidio, No. 1955 Nte." },
        { "desc": "Col. Tepeca" },
        { "desc": "Los Mochis, Sinaloa, México." },
        { "desc": "(668) 8807374, Ext. 106" }
      ]
    },
    {
      "value": 3,
      "urlLogo": "http://univafu.edu.mx/assetsWebsite/logos/innovagain.png",
      "color": "#3d95d4",
      "direccion": [
        { "desc": "Río Presidio, No. 1955 Nte." },
        { "desc": "Col. Tepeca" },
        { "desc": "Los Mochis, Sinaloa, México." },
        { "desc": "(668) 8807374, Ext. 143" }
      ]
    },
    {
      "value": 4,
      "urlLogo": "http://univafu.edu.mx/assetsWebsite/logos/iridh.png",
      "color": "#1c447e",
      "direccion": [
        { "desc": "Río Presidio, No. 1955 Nte." },
        { "desc": "Col. Tepeca" },
        { "desc": "Los Mochis, Sinaloa, México." },
        { "desc": "(668) 8807374, Ext. 148" }
      ]
    }
  ];

  public contactoSelected: any;
  public contactanosInfo: any;
  public contactoForm: FormGroup;
  @ViewChild('fg') public myNgForm: any;
  @ViewChild('smooth2') public smooth2: ElementRef;

  constructor(public form: FormBuilder, private _uvfService: UvfService, private snackBar: MatSnackBar) {

    this.contactoForm = this.form.group({
      nombre: ["", Validators.required],
      telefono: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)]],
      mensaje: [""],
      sendMailTo: [""]
    });

  }

  ngOnInit() {
    this.contactoSelected = this.contactos[0];

    this.contactanosInfo = document.querySelector('.contactanos-info') as HTMLElement;
    this.contactanosInfo.style.display = 'none';
  }

  ngOnDestroy(): void {
    this.contactanosInfo.style.display = 'block';
  }

  sendInfo() {
    if (this.contactoForm.valid) {

      // let link:string = 'http://127.0.0.1/uvfapp/email.php';
      let link: string = '/assets/php/email.php';
      this.contactoForm.value.sendMailTo = this.contactoSelected.value;

      this._uvfService._http.post(link, this.contactoForm.value, {
        headers: new HttpHeaders().set('Content-Type', 'application/json'), responseType: 'text'
      }).subscribe((res: any) => {
        this.myNgForm.resetForm();
        this.snackBar.open('Información enviada con éxito.', 'OK', {
          duration: 3000,
        });
      }, (err) => {
        this.myNgForm.resetForm();
        window.alert('algo salio mal comunicate con el desarrollador.');
      });
    }
  }

  onContactoSelected(contacto: string) {
    this.smooth2.nativeElement.scrollIntoView({ block: "end", behavior: "smooth" });

    this.contactoSelected = this.contactos[contacto];
  }

  getErrorMessage(control: string) {
    return this.contactoForm.controls[control].hasError('required') ? 'Este campo es necesario.' :
      this.contactoForm.controls[control].hasError('pattern') ? 'Ingresa un e-mail válido.' : '';
  }

}
