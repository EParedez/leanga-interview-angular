import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {AppComponent} from './app.component';
import {ListPostComponent} from './components/list-post/list-post.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HomePageComponent} from './components/home-page/home-page.component';


export const routes = [
  {path: '', component: HomePageComponent},
  {path: 'posts', component: ListPostComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];

