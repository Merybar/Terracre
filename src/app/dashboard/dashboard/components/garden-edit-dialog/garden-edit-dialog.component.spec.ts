import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenEditDialogComponent } from './garden-edit-dialog.component';

describe('GardenEditDialogComponent', () => {
  let component: GardenEditDialogComponent;
  let fixture: ComponentFixture<GardenEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
