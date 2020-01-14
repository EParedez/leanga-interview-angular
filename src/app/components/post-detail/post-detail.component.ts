import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Post;
  lastUpdate: Date;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        this.postService.getPost(params.id).subscribe((response: any) => {
          this.post = new Post(response);
        });
      });
  }

  changeDate(date: any) {
    console.log(date);
    this.lastUpdate = date;
  }

}
