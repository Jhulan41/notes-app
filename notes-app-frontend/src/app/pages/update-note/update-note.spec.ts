import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNote } from './update-note';

describe('UpdateNote', () => {
  let component: UpdateNote;
  let fixture: ComponentFixture<UpdateNote>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateNote]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateNote);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
