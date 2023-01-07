import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  @Input() article: any;
  articleInOngoingOrder: any = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.articleInOngoingOrder = this.dataService.isArticleExistInOngoingOrder(this.article);
  }

  OnCLickOrder() {
    this.dataService.addArticleToOrder(this.article);
  }

}
