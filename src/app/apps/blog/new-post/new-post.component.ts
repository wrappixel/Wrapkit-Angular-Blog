import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Blog } from '../blog-type';
import { ServiceblogService } from '../blog-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  img: any = '';

  constructor(public service: ServiceblogService, public router: Router) { 
    this.service.showEdit=false;
  }

  ngOnInit(): void {
  }

  submit(data: NgForm) {
    debugger;
    let b: Blog = new Blog();

    b.id = Math.max.apply(Math, this.service.Blogs.map(function (o) { return o.id; })) + 1;
    b.heading = data.value.heading;
    b.subHeading = data.value.subheading;
    b.blogDetail = data.value.textBody;
    b.image = this.img;
    b.blogDate = new Date().toDateString();

    this.service.addPost(b);
    this.router.navigate([('/apps/blog')]);
  }

  preview(files: any) {
    if (files.length === 0) {
      return;
    }
    
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.img = reader.result;
    };

  }



}


