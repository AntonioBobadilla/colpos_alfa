import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntonioComponent } from './antonio.component';

describe('AntonioComponent', () => {
  let component: AntonioComponent;
  let fixture: ComponentFixture<AntonioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntonioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntonioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
