import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LowAndHighScoreComponent } from './low-and-high-score.component';

describe('LowAndHighScoreComponent', () => {
  let component: LowAndHighScoreComponent;
  let fixture: ComponentFixture<LowAndHighScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowAndHighScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowAndHighScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
