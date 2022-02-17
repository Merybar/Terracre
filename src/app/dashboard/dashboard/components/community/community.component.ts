import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommunityModule } from 'src/app/modules/community.module';
import { InvitationModule } from 'src/app/modules/invitation.module';
import { UserModule } from 'src/app/modules/user.module';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit, OnDestroy {
  member$!: UserModule[];
  posts$!: CommunityModule[];
  addMember$!: InvitationModule[];
  subscribe!: Subscription;

  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.showAllMembers();
    this.showAllPosts();
  }
  showAllMembers() {
    this.subscribe = this.api.getAllusers().subscribe((data) => {
      this.member$ = data;
    });
  }
  addMember() {}
  delete() {}
  searchMember() {}
  showAllPosts() {
    this.subscribe = this.api.getAllPosts().subscribe((data) => {
      this.posts$ = data;
    });
  }
  deletePost(postId: number) {
    this.subscribe = this.api.deletePost(postId).subscribe();
  }
  addPost() {}
  openAddEditMemberDialog() {}
  openInfoMemberDialog() {}
  ngOnDestroy(): void {
    this.subscribe.unsubscribe;
  }
}
