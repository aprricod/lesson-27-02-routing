import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { assert } from 'console';
import { map } from 'rxjs/operators';

const userJson = require('../../assets/user.json');

@Injectable({
  providedIn: 'root',
})
export class Mod10Service {
  userJson = userJson;
  user;
  posts;
  post;
  constructor(private http: HttpClient) {}

  loadUser(): void {
    this.http.get('assets/user.json').subscribe((data) => {
      this.user = data;
    });
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  postPosts() {
    return this.http
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .pipe(
        map((data) => {
          console.log('json', data);
          return data;
        })
      );
  }

  loadPosts() {
    this.posts = this.getPosts();
  }

  loadPost101() {
    this.post = this.postPosts();
  }
}
