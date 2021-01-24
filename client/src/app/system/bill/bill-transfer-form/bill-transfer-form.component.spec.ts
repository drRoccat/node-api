import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillTransferFormComponent } from './bill-transfer-form.component';

describe('BillTransferFormComponent', () => {
  let component: BillTransferFormComponent;
  let fixture: ComponentFixture<BillTransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillTransferFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillTransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
