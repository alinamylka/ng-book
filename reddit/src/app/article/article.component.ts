import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article} from "./arcticle.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'
  @Input() article: Article;

  constructor() {
    this.article = new Article('Angular', 'http://angular.io', 10);
  }

  voteUp() {
    this.article.voteUp()
    return false;
  }

  voteDown() {
    this.article.voteDown()
    return false;
  }

  ngOnInit(): void {
  }
}
