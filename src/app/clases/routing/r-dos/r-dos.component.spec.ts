import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDosComponent } from './r-dos.component';

describe('RDosComponent', () => {
  let component: RDosComponent;
  let fixture: ComponentFixture<RDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
