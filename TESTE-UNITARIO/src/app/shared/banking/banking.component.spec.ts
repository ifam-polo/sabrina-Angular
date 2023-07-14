import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';


describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent,ListComponent]
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( '(U) getPoupanca: Should have poupanca = 10', () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) getCarteira: Should have carteira = 50', () => {
    expect(component.getCarteira).toEqual(50);
  });



  it('(U) setSacar(): should transfer poupanca from carteira', () => {
    component.setSacar('10');

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60)
  });

  it('(U) setSacar(): should transfer poupaca dont have string (isNaN) or poupaca < value ', () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);

  })

  it('(U) setDepositar(): should transfer carteira from poupanca ', () => {
    component.setDepositar('50');

    expect(component.getCarteira).toEqual(0);
    expect(component.getPoupanca).toEqual(60);
  });

  it('(U) setDepositar(): should transfer carteira dont have string (isNaN) or carteira < value ', () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getCarteira).toEqual(50);
    expect(component.getPoupanca).toEqual(10);

  });

  it(`(I) setSacar(): shoud transfer poupanca from carteira`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-depositar').textContent).toEqual('60');
  });


  it(`(I) setDepositar(): shoud transfer carteira from poupanca`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();
    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');
  });
});
