import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamVenuesComponent } from './team-venues.component';

describe('TeamVenuesComponent', () => {
  let component: TeamVenuesComponent;
  let fixture: ComponentFixture<TeamVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
