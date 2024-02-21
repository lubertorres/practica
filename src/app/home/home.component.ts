import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  date: string = 'Hola';

  username: any;
  password: any;

  response : any[] = [];

  constructor(private httpclient: HttpClient, private router: Router) {

  }

  redirectClientes(){
    this.router.navigate(['/clientes']);
  }

}