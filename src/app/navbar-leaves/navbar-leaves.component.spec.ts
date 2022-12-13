import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLeavesComponent } from './navbar-leaves.component';

describe('NavbarLeavesComponent', () => {
  let component: NavbarLeavesComponent;
  let fixture: ComponentFixture<NavbarLeavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarLeavesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
