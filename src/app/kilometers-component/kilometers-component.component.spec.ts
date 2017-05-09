import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KilometersComponentComponent } from './kilometers-component.component';

describe('KilometersComponentComponent', () => {
  let component: KilometersComponentComponent;
  let fixture: ComponentFixture<KilometersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KilometersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KilometersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
