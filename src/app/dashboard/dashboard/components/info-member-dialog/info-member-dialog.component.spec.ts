import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMemberDialogComponent } from './info-member-dialog.component';

describe('InfoMemberDialogComponent', () => {
  let component: InfoMemberDialogComponent;
  let fixture: ComponentFixture<InfoMemberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMemberDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
