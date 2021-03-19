import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { NewPostComponent } from './blog/new-post/new-post.component';
import { EditPostComponent } from './blog/edit-post/edit-post.component';

import { FullComponent } from './layout/full/full.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {

    path: '',
    component:FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'post', component: NewPostComponent },
      { path: 'editPost/:id', component: EditPostComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  {

     path: 'login', component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
