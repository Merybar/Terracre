import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostModule } from 'src/app/modules/community.module';
import { UserModule } from 'src/app/modules/user.module';
import { ApiService } from 'src/app/service/api.service';
import { CommunityComponent } from '../community/community.component';

@Component({
  selector: 'app-info-member-dialog',
  templateUrl: './info-member-dialog.component.html',
  styleUrls: ['./info-member-dialog.component.scss'],
})
export class InfoMemberDialogComponent {
  recieveMemberId: any;
  // recieveUserId => get user ID from localStorage
  recieveUserId: any;
  member$!: UserModule[];

  constructor(
    private api: ApiService,
    private dialogRef: MatDialogRef<CommunityComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.recieveMemberId = data.id;
    this.recieveUserId = 1;

    this.api.getUser(this.recieveMemberId).subscribe((data) => {
      this.member$ = data;
      console.log(this.member$);
    });
  }
  close() {
    this.dialogRef.close();
  }
  deleteMember() {
    console.log(this.recieveMemberId);
    console.log(this.recieveUserId);
    this.api.deleteUser(this.recieveMemberId, this.recieveUserId).subscribe();
    this.refresh();
  }
  refresh(): void {
    window.location.reload();
  }
}
