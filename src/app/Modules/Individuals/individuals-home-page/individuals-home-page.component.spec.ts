import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualsHomePageComponent } from './individuals-home-page.component';

describe('IndividualsHomePageComponent', () => {
  let component: IndividualsHomePageComponent;
  let fixture: ComponentFixture<IndividualsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndividualsHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndividualsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
