import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidHomeComponent } from './covid-home.component';

describe('CovidHomeComponent', () => {
  let component: CovidHomeComponent;
  let fixture: ComponentFixture<CovidHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CovidHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
