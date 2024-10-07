import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAggComponent } from './formulario-agg.component';

describe('FormularioAggComponent', () => {
  let component: FormularioAggComponent;
  let fixture: ComponentFixture<FormularioAggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioAggComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioAggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
