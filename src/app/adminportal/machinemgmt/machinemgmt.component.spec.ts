import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinemgmtComponent } from './machinemgmt.component';

describe('MachinemgmtComponent', () => {
  let component: MachinemgmtComponent;
  let fixture: ComponentFixture<MachinemgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachinemgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinemgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
