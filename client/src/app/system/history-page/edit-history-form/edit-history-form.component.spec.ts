import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoryFormComponent } from './edit-history-form.component';

describe('EditHistoryFormComponent', () => {
  let component: EditHistoryFormComponent;
  let fixture: ComponentFixture<EditHistoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHistoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
