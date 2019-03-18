import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabdialogComponent } from './collabdialog.component';

describe('CollabdialogComponent', () => {
  let component: CollabdialogComponent;
  let fixture: ComponentFixture<CollabdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
