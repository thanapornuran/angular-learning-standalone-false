import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidShowComponent } from './covid-show.component';

describe('CovidShowComponent', () => {
  let component: CovidShowComponent;
  let fixture: ComponentFixture<CovidShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CovidShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CovidShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
