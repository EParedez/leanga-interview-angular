import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiEndpint = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get(this.apiEndpint + '/posts');
  }

  public getPost(id: number) {
    return this.http.get(this.apiEndpint + `/posts/${id}`);
  }
}
