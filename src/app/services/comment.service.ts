import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  apiEndpint = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getComments(postId: number) {
    return this.http.get(this.apiEndpint + `/comments?postId=${postId}`);
  }
}
