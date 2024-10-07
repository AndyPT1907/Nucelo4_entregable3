import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaLibComponent } from './tabla-lib.component';

describe('TablaLibComponent', () => {
  let component: TablaLibComponent;
  let fixture: ComponentFixture<TablaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
