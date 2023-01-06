import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";
import {FormControl, FormGroup} from "@angular/forms";

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
  }

  onClick() {
    console.log(this.articles.length);
    console.log("test test "+this.articles);

  }

  isArticlesEmpty() {
    let articles = this.dataService.getArticles();
    if (articles === undefined || articles.length == 0) {
       return true;
    }
    this.articles = articles;
    return false;
  }


}
