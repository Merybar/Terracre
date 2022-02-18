import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenCreatedDialogComponent } from './garden-created-dialog.component';

describe('GardenCreatedDialogComponent', () => {
  let component: GardenCreatedDialogComponent;
  let fixture: ComponentFixture<GardenCreatedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenCreatedDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenCreatedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
