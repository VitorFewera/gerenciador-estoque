import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmazenagemComponent } from './armazenagem.component';

describe('ArmazenagemComponent', () => {
  let component: ArmazenagemComponent;
  let fixture: ComponentFixture<ArmazenagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmazenagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArmazenagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
