import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagNoEncontardaComponent } from './pag-no-encontarda.component';

describe('PagNoEncontardaComponent', () => {
  let component: PagNoEncontardaComponent;
  let fixture: ComponentFixture<PagNoEncontardaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagNoEncontardaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagNoEncontardaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
