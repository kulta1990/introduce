import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KapcsolatokComponent } from './kapcsolatok.component';

describe('KapcsolatokComponent', () => {
  let component: KapcsolatokComponent;
  let fixture: ComponentFixture<KapcsolatokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KapcsolatokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KapcsolatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
