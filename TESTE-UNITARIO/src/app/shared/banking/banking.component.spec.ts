import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent]
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
});
