import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {AppComponent} from './app.component';
import {ListPostComponent} from './components/list-post/list-post.component';


export const routes = [
 // {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'posts', component: ListPostComponent},
  {path: 'posts/:id', component: PostDetailComponent},
];

