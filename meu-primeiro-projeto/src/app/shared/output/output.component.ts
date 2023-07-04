import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{ nome: string, idade: number }> = [
    {nome: "Sabrina", idade: 29},
    {nome: "Maria", idade: 31},
    {nome: "Pedro", idade: 58}
  ]
  constructor() {}
  ngOnInit(): void {
    
  }

  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }

}
