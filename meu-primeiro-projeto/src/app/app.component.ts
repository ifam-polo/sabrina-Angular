import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <router-outlet></router-outlet>
 <!-- <app-title></app-title>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <app-diretivas-atributos></app-diretivas-atributos>-->
  <app-new-component></app-new-component>`
  

})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit():void{}

}


