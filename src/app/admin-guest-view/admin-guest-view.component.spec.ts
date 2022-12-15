import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGuestViewComponent } from './admin-guest-view.component';

describe('AdminGuestViewComponent', () => {
  let component: AdminGuestViewComponent;
  let fixture: ComponentFixture<AdminGuestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGuestViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGuestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
