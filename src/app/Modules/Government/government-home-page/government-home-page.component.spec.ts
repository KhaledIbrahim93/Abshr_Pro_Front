import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentHomePageComponent } from './government-home-page.component';

describe('GovernmentHomePageComponent', () => {
  let component: GovernmentHomePageComponent;
  let fixture: ComponentFixture<GovernmentHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GovernmentHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
