import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  Blogs: any[] = [];
  loginStatusService = false;

  detailId: number = -1;
  showEdit = false;


  constructor(public http: HttpClient) {
  }

  public getBlog(): Observable<any> {
    return this.http.get<any>('https://api.npoint.io/aba0bbc3361bfc50d277');
  }


  // public login(email: string, pass: string): boolean {
  //   if (pass === 'admin123' && email === 'admin') {
  //     this.loginStatus = true;
  //     return true;
  //   }
  //   return false;
  // }

  public addPost(bl: any) {
    this.Blogs.splice(0, 0, bl);
  }

  public deletePost(id: number) {
    this.Blogs = this.Blogs.filter(b => b.id !== id);
  }

}
