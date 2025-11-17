import { Component, inject } from '@angular/core';
import { Badge } from '../badge/badge';
import { NotifPanier } from '../../services/notif-panier';

@Component({
  selector: 'app-add-article',
  imports: [],
  templateUrl: './add-article.html',
  styleUrl: './add-article.scss'
})
export class AddArticle {
  public notification_sent:number = 0;
  public numServ:NotifPanier = inject(NotifPanier);

  addNotification(){
    this.notification_sent++;
    this.numServ.setNotification(this.notification_sent);
  }
}
