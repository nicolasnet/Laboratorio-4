import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputejemploComponent } from './imputejemplo.component';

describe('ImputejemploComponent', () => {
  let component: ImputejemploComponent;
  let fixture: ComponentFixture<ImputejemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImputejemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImputejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
