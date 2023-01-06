import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articles: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.fetchArticles();
    this.articles = this.dataService.getArticles();
  }

  onClick() {

  }
}
