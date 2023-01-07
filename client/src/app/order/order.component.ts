import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders:any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchOrders();
  }

  isOrdersEmpty() {
    let orders = this.dataService.getOrders();
    if (orders === undefined || orders.length == 0) {
      return true;
    }
    this.orders = orders;
    return false;
  }

  isOrderFinished(order: any) {
    return this.dataService.isOrderFinished(order);
  }


  onClickFinish() {
    this.dataService.setOrderStatus("Finished");
  }

  onClickEditOrder() {

  }

  formatDate(date:any) {
    return date.substring(0, 10) + " " + date.substring(11, 19);
  }
}
