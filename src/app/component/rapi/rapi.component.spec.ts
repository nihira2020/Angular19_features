import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAPIComponent } from './rapi.component';

describe('RAPIComponent', () => {
  let component: RAPIComponent;
  let fixture: ComponentFixture<RAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
