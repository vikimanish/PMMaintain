import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListallmachineComponent } from './listallmachine.component';

describe('ListallmachineComponent', () => {
  let component: ListallmachineComponent;
  let fixture: ComponentFixture<ListallmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListallmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListallmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
