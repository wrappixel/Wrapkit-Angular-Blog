import { Component, OnInit } from '@angular/core';
import { ServiceblogService } from '../blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blog-type';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  id: any;
  blogDetail: Blog;

  editPost: FormGroup | null = null;

  img: any = '';


  constructor(activatedRouter: ActivatedRoute, public service: ServiceblogService, public router: Router, private fb: FormBuilder) {
    this.service.showEdit = false;
    this.id = this.service.detailId;
    this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
  }

  ngOnInit(): void {
    this.editPost = this.fb.group({
      id: [''],
      heading: ['', Validators.required],
      subHeading: ['', Validators.required],
      blogDate: ['', Validators.required],
      blogDetail: ['', Validators.required],

    });

    this.editPost?.patchValue({
      id: this.blogDetail.id,
      heading: this.blogDetail.heading,
      subHeading: this.blogDetail.subHeading,
      blogDate: this.blogDetail.blogDate,
      blogDetail: this.blogDetail.blogDetail

    });
  }

  deleteBtnClick() {
    this.service.deletePost(this.blogDetail.id);
    this.router.navigate([('')]);
  }


  onSubmit() {
    const index = this.service.Blogs.indexOf(this.blogDetail);
    let blog: Blog = this.service.Blogs[index];
    if (this.editPost != null) {
      blog.heading = this.editPost.get('heading')?.value;
      blog.subHeading = this.editPost.get('subHeading')?.value;
      blog.blogDetail = this.editPost.get('blogDetail')?.value;
      blog.image=this.img;
    }
    this.router.navigate([('')]);
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
