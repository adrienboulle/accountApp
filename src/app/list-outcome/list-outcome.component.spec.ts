import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOutcomeComponent } from './list-outcome.component';

describe('ListOutcomeComponent', () => {
  let component: ListOutcomeComponent;
  let fixture: ComponentFixture<ListOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
