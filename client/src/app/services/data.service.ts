import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private articles: any = [];
  private orders: any = [];
  private createArticleResponse:any;

  constructor(private http: HttpClient) {
  }

  fetchArticles() {
    this.http
      .get('http://localhost:8080/articles')
      .subscribe(response => {
        this.articles = response;
      });
    this.createArticleResponse = null;

  }

  saveArticle(article: any) {
    this.http.post('http://localhost:8080/articles', article).subscribe( response => {
      this.createArticleResponse = response;
    })
  }

  getArticles() {
    return this.articles;
  }

  isArticleCreated() {
    return this.createArticleResponse !== undefined && this.createArticleResponse !== null;
  }

  fetchOrders() {
    this.http
      .get('http://localhost:8080/orders')
      .subscribe(response => {
        this.orders = response;
      });

  }

  getOrders() {
    return this.orders;
  }
}
