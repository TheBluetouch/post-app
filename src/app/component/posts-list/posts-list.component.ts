import {Component, OnInit} from '@angular/core';
import {Post} from '../../model/post.model';
import {PostService} from '../../service/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private postsService: PostService) {
  }

  ngOnInit(): void {
    this.postsService.readPosts().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
  }
}
