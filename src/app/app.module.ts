import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPostComponent } from './components/list-post/list-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import {PostService} from './services/post.service';
import {RouterModule} from '@angular/router';
import {routes} from './router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule, MatRippleModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {PortalModule} from '@angular/cdk/portal';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPostComponent,
    PostDetailComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatRippleModule,
    MatTableModule,
    MatButtonModule,
    CdkTableModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    A11yModule,
    BidiModule,
    ObserversModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
