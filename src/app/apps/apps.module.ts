import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
// import { LoginComponent } from './blog/login/login.component';
import { NewPostComponent } from './blog/new-post/new-post.component';
import { EditPostComponent } from './blog/edit-post/edit-post.component';
import { ServiceblogService } from './blog/blog-service.service';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { AchivementComponent } from './about/About-Components/achivement/achivement.component';
import { TeamComponent } from './about/About-Components/team/team.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';


import { FullComponent } from './layout/full/full.component';
import { LoginComponent } from './login/login.component';

import { BannerComponent } from './shared/banner/banner.component';
// import { BannerContentComponent } from './shared/banner-content/banner-content.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';





@NgModule({
  declarations: [
    AppsComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    LoginComponent,
    NewPostComponent,
    EditPostComponent,
    RelayOnComponent,
    AchivementComponent,
    TeamComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceblogService],
})
export class AppsModule { }