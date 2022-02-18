import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { InvitationModule } from 'src/app/modules/invitation.module';
import { ApiService } from 'src/app/service/api.service';
import { CommunityComponent } from '../community/community.component';

@Component({
  selector: 'app-add-edit-member-dialog',
  templateUrl: './add-edit-member-dialog.component.html',
  styleUrls: ['./add-edit-member-dialog.component.scss'],
})
export class AddEditMemberDialogComponent implements OnInit {
  recievedMemberId: any;
  newMember$!: InvitationModule;
  memberForm: FormGroup = new FormGroup({});

  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CommunityComponent>
  ) {}

  ngOnInit(): void {
    this.recievedMemberId = 1;
    this.memberForm = this.fb.group({
      userID: this.recievedMemberId,
      avatar: 'avatar1.png',
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl(''),
      password: new FormControl(''),
    });
  }

  invitation() {
    this.newMember$ = this.memberForm.value;
    this.api.addUser(this.newMember$).subscribe();
    this.dialogRef.close();
    console.log(this.newMember$);
  }
}
