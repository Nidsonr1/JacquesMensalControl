import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBrotherComponent } from './register-brother.component';

describe('RegisterBrotherComponent', () => {
  let component: RegisterBrotherComponent;
  let fixture: ComponentFixture<RegisterBrotherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterBrotherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterBrotherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
