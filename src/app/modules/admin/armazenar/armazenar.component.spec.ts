import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmazenarComponent } from './armazenar.component';

describe('ArmazenarComponent', () => {
  let component: ArmazenarComponent;
  let fixture: ComponentFixture<ArmazenarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmazenarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmazenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
