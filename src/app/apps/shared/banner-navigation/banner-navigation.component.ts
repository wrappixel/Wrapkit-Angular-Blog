import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceblogService } from '../../blog/blog-service.service';

@Component({
  selector: 'app-banner-navigation',
  templateUrl: './banner-navigation.component.html',
  styleUrls: ['./banner-navigation.component.css']
})
export class BannerNavigationComponent implements OnInit {

  logoutStatus = false;

  constructor(public service: ServiceblogService, public router: Router) { }

  ngOnInit(): void {
  }


  loginClick() {
    this.router.navigate([('/login')]);
  }

  newPost() {
    this.router.navigate([('/post')]);
  }

  fun() {
    this.logoutStatus = !this.logoutStatus;
  }

  logoutClick() {
    this.service.loginStatusService = false;
    this.logoutStatus=false;
    this.router.navigate([('')]);
  }



}
