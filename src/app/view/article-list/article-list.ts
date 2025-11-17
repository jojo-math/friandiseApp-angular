import { Component } from '@angular/core';
import { Article } from '../../components/article/article';
import { IArticle } from '../../interface/article';
import { ARTICLES } from '../../data/article';

@Component({
  selector: 'app-article-list',
  imports: [Article],
  templateUrl: './article-list.html',
  styleUrl: './article-list.scss'
})
export class ArticleList {
  public articles: IArticle[] = ARTICLES;
}
