import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmachineComponent } from './listmachine.component';

describe('ListmachineComponent', () => {
  let component: ListmachineComponent;
  let fixture: ComponentFixture<ListmachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
