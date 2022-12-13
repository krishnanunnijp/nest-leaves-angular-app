import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSecurityComponent } from './navbar-security.component';

describe('NavbarSecurityComponent', () => {
  let component: NavbarSecurityComponent;
  let fixture: ComponentFixture<NavbarSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSecurityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
