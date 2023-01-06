import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
  constructor() { }

  ngOnInit(): void {
  }

  createArticle() {
    console.log(this.createArticleForm);
    /*this.createArticleForm.controls.name.setValue();
    this.createArticleForm.controls.price.setValue(element.description);
    this.createArticleForm.controls.picture.setValue(element.price);*/
  }

}
