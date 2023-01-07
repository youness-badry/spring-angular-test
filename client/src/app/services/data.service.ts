import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private articles: any = [];
  private createArticleResponse:any;
  private orders: any = [];
  private ongoingOrder:any;
  private createOrderResponse:any;
  private updateOrderResponse:any;

  private count = 9820;

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

    this.setOngoingOrder();
  }

  setOngoingOrder() {
    this.orders.forEach((order:any) => {

    })
  }

  createOrder(order:any) {
    this.http.post('http://localhost:8080/orders', order).subscribe( response => {
      this.createOrderResponse = response;
    })
  }

  updateOrder(orderId:any, order:any) {
    this.http.put(`http://localhost:8080/orders/${orderId}`, order).subscribe( response => {
      this.updateOrderResponse = response;
    })
  }

  getOrders() {
    return this.orders;
  }

  addArticleToOrder(article:any) {
    if(this.ongoingOrder === undefined || this.ongoingOrder.status === "Finished") {
      let order = {
        reference: "REF"+this.count,
        status: "Ongoing",
        articles: [article],
        orderDate: Date.now(),
      }
      this.count++;
      this.createOrder(order);
      this.ongoingOrder = order;
      this.fetchOrders();
    } else if(this.ongoingOrder.status === "Ongoing") {
      this.ongoingOrder.articles.push(article);
      this.updateOrder(this.ongoingOrder.id, this.ongoingOrder);
      this.fetchOrders();
    }
  }

  isArticleExistInOngoingOrder(article:any) {
    if (this.ongoingOrder !== undefined) {
      return this.ongoingOrder.articles.forEach((art:any, index:any, arr:any) => {
        if (index !== arr.length && art.id === article.id) {
          return true;
        } else {
          return false;
        }

      })
    } else {
      return false;
    }

  }

  setOrderStatus(status:any) {
    this.ongoingOrder.status = status;
    this.updateOrder(this.ongoingOrder.id, this.ongoingOrder);
    this.fetchOrders();
  }

  isOrderFinished(order: any) {
    console.log(order);
    console.log(this.ongoingOrder);
    if(this.ongoingOrder === undefined) {
      return true;
    }
    if(order.id === this.ongoingOrder.id) {
      return this.ongoingOrder.status === "Finished";
    }else {
      return true;
    }

  }


}
