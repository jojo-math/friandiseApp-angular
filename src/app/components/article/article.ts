import { Component, Input } from '@angular/core';
import { IArticle } from '../../interface/article';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article {
  @Input() article!: IArticle;

}
