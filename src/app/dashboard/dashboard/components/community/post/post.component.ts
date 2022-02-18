import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { CommunityModule, PostModule } from 'src/app/modules/community.module';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts$!: CommunityModule[];
  addPostObj$!: PostModule;
  subscribe!: Subscription;
  schowAll: boolean = true;
  postText = '';
  recieveMemberId: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    if (this.schowAll) {
      console.log('show All ' + this.schowAll);
      this.showAllPosts();
    } else {
      this.schowAll = false;
      console.log('show One ' + this.schowAll);
    }
  }
  getMemberLogin() {}
  showAllPosts() {
    this.subscribe = this.api.getAllPosts().subscribe((data) => {
      this.posts$ = data;
    });
  }
  deletePost(postId: number) {
    this.subscribe = this.api.deletePost(postId).subscribe();
    this.refresh();
  }
  addPost(text: HTMLTextAreaElement) {
    this.schowAll = false;
    this.addPostObj$ = {
      // user_id: this.recieveMemberId,
      user_id: 1,
      text: text.value,
    };
    this.api.savePost(this.addPostObj$).subscribe();
    text.value = '';
    this.refresh();
  }
  refresh(): void {
    window.location.reload();
  }
}
