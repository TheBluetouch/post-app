import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {PostsListComponent} from "./component/posts-list/posts-list.component";

let routes: Routes;
routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'posts',
    component: PostsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
