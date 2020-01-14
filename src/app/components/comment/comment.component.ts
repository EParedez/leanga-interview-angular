import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {Post} from '../../models/post.model';
import {Comment} from '../../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments: Comment[] = [];

  @Output()
  changeDate = new EventEmitter<Date>();

  @Input()
  postId: number;

  constructor(
    private commentService: CommentService
  ) { }

  ngOnInit() {

    this.commentService.getComments(this.postId).subscribe((response: any) => {
      response.map( (post: any) => {
        this.comments.push(new Comment(post));
      });
      console.log(this.comments);
    });

  }

  emitEvent() {
    this.changeDate.emit(new Date());
    console.log('event emit');
  }

}
