import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  createArticleForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    picture: new FormControl(''),

  });


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  createArticle() {
    var article = {
      name: this.createArticleForm.value.name,
      price: parseInt(String(this.createArticleForm.value.price)),
      picture: this.createArticleForm.value.picture
    };

    this.dataService.saveArticle(article);

  }

  isArticleCreated() {
    return this.dataService.isArticleCreated();

  }


}
