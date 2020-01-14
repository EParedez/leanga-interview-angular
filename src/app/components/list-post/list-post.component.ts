import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {MatTableDataSource} from '@angular/material';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  dataSource: MatTableDataSource<any> | null;
  displayedColumns = ['id', 'title', 'actions'];

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource([]);
   // this.dataSource.paginator = this.paginator;
   // this.dataSource.sort = this.sort;

    this.postService.getPosts().subscribe((response: any) => {
      // tslint:disable-next-line:prefer-const
      let posts: any[] = [];

      response.map( (post: any) => {
        posts.push(new Post(post));
      });
      console.log(posts);

      this.dataSource = new MatTableDataSource(posts);
    });
  }

}
