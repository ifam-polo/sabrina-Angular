import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})

export class BankingComponent implements OnInit{

  private poupaca: number = 10;
  private carteira:number = 50;
  constructor() {}
  ngOnInit(): void {}

  get getPoupanca(): number{
    return this.poupaca;
  }

  get getCarteira(): number{
    return this.carteira;
  }

  public setSacar(value: string): number  | undefined {
    const sacar = Number(value)

    if(isNaN(sacar) || this.poupaca < sacar) {
      return;
    }

    this.poupaca -= sacar;
    return this.carteira += sacar;
  }

  public setDepositar(value: string): number | undefined { {
    const depositar = Number(value)

    if(isNaN(depositar) || this.carteira < depositar) {
      return;
    }

    this.poupaca += depositar;
    return this.carteira -= depositar;
  }

  }
}
