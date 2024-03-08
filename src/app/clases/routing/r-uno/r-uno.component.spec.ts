import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RUnoComponent } from './r-uno.component';

describe('RUnoComponent', () => {
  let component: RUnoComponent;
  let fixture: ComponentFixture<RUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
