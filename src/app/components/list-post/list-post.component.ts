import {Component, OnInit, ViewChild} from '@angular/core';
import {PostService} from '../../services/post.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  dataSource: MatTableDataSource<any> | null;
  displayedColumns = ['id', 'title', 'actions'];


  // @ts-ignore
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  // @ts-ignore
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {

    this.dataSource = new MatTableDataSource([]);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.postService.getPosts().subscribe((response: any) => {
      // tslint:disable-next-line:prefer-const
      let posts: any[] = [];
      response.map( (post: any) => {
        posts.push(new Post(post));
      });
      this.dataSource = new MatTableDataSource(posts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
