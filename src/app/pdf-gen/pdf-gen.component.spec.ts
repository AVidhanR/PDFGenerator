import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfGenComponent } from './pdf-gen.component';

describe('PdfGenComponent', () => {
  let component: PdfGenComponent;
  let fixture: ComponentFixture<PdfGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfGenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
