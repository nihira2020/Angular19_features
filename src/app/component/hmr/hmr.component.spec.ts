import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmrComponent } from './hmr.component';

describe('HmrComponent', () => {
  let component: HmrComponent;
  let fixture: ComponentFixture<HmrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
