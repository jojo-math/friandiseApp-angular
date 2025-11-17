import { Component, inject } from '@angular/core';
import { Badge } from '../badge/badge';
import { NotifPanier } from '../../services/notif-panier';

@Component({
  selector: 'app-add-article',
  imports: [Badge],
  templateUrl: './add-article.html',
  styleUrl: './add-article.scss'
})
export class AddArticle {
  private n1:number = 0;
  private numServ:NotifPanier = inject(NotifPanier);
}
