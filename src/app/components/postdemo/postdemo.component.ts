import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-postdemo',
  templateUrl: './postdemo.component.html',
  styleUrls: ['./postdemo.component.css']
})
export class PostdemoComponent implements OnInit {

  posts;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      data => this.posts = data
    );
  }

  createPost() {
    const post = {
      id: null,
      title: 'New Post Title',
      body: 'This the new new body of post'
    };

    this.postService.createPost(post).subscribe(
      data => this.posts.unshift(data)
    );
  }

}
