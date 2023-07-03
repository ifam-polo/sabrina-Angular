import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: './title.component.html',
  
})
export class TitleComponent implements OnInit {

  public title:string= "Bem vindo";
  constructor() {}
  ngOnInit(): void{

    
  }

}
