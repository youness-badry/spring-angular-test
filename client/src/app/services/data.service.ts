import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private articles: any = [];

  constructor(private http: HttpClient) {
  }

  fetchArticles() {
    this.http
      .get('http://localhost:8080/articles')
      .subscribe(response => {
        this.articles = response;
      });

  }

  getArticles() {
    return this.articles;
  }
}
