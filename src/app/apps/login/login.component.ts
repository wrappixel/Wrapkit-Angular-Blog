import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceblogService } from '../blog/blog-service.service';
import { Login } from './login-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginStatus:boolean=false;



  constructor(public service: ServiceblogService, public router: Router) { }

  ngOnInit(): void {
  }

  submit(data: NgForm) {
    let email = data.value.email;
    let p = data.value.pass;

    if (this.login(email, p)) {
      this.router.navigate([('')]);
    } else {
      data.value.email = '';
      data.value.pass = '';
      this.loginStatus=true;
    }
  }


  public login(email: string, pass: string): boolean {
    if (pass === 'admin123' && email === 'admin') {
      this.service.loginStatusService = true;
      return true;
    }
    return false;
  }
  ////////////////////////////////////////////////





}
