import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeavesStatusComponent } from './view-leaves-status.component';

describe('ViewLeavesStatusComponent', () => {
  let component: ViewLeavesStatusComponent;
  let fixture: ComponentFixture<ViewLeavesStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLeavesStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLeavesStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
