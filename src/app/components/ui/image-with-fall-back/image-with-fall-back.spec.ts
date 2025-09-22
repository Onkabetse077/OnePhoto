import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithFallBack } from './image-with-fall-back';

describe('ImageWithFallBack', () => {
  let component: ImageWithFallBack;
  let fixture: ComponentFixture<ImageWithFallBack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageWithFallBack]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageWithFallBack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
