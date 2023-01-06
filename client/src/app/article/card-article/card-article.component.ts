import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {

  @Input() article: any;

  constructor() { }

  ngOnInit(): void {
  }

}
