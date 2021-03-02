import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonathanComponent } from './jonathan.component';

describe('JonathanComponent', () => {
  let component: JonathanComponent;
  let fixture: ComponentFixture<JonathanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JonathanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JonathanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
