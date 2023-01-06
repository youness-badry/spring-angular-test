import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  @Input() article: any;
  articleExistingOrder: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  isArticleLinkedToExisitngOrder() {
    let existingOrders = this.dataService.getOrders();
  }


  OnCLickOrder() {

  }

}
