import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs/internal/Subscription';
import { InvitationModule } from 'src/app/modules/invitation.module';
import { UserModule } from 'src/app/modules/user.module';
import { ApiService } from 'src/app/service/api.service';
import { AddEditMemberDialogComponent } from '../add-edit-member-dialog/add-edit-member-dialog.component';
import { InfoMemberDialogComponent } from '../info-member-dialog/info-member-dialog.component';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit, OnDestroy {
  member$!: UserModule[];

  addMember$!: InvitationModule[];
  subscribe!: Subscription;

  constructor(private api: ApiService, private matDialog: MatDialog) {}
  ngOnInit(): void {
    this.showAllMembers();
  }
  showAllMembers() {
    this.subscribe = this.api.getAllusers().subscribe((data) => {
      this.member$ = data;
    });
  }

  openAddEditMemberDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.matDialog.open(AddEditMemberDialogComponent, dialogConfig);
  }
  openInfoMemberDialog(memberId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: memberId,
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.matDialog.open(InfoMemberDialogComponent, dialogConfig);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
}
