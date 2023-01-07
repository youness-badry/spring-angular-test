import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  @Input() article: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  OnCLickOrder() {
    this.dataService.addArticleToOrder(this.article);
  }

  isArticleInOngoingOrder() {
    console.log(this.dataService.isArticleExistInOngoingOrder(this.article));
    return this.dataService.isArticleExistInOngoingOrder(this.article);
  }

  test() {
    console.log(this.dataService.getOrders());
    console.log(this.dataService.getOngoingOrder());
  }

}
