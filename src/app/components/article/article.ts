import { Component, Input } from '@angular/core';
import { IArticle } from '../../interface/article';
import { AddArticle } from '../add-article/add-article';

@Component({
  selector: 'app-article',
  imports: [AddArticle],
  templateUrl: './article.html',
  styleUrl: './article.scss'
})
export class Article {
  @Input() article!: IArticle;

}
