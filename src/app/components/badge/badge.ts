import { Component, inject, Input } from '@angular/core';
import { AddArticle } from '../add-article/add-article';
import { NotifPanier } from '../../services/notif-panier';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class Badge {
    public notifications:number = 0;
    private notifServ: NotifPanier = inject(NotifPanier);
    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.
      this.notifServ.getNotification().subscribe(counter => { this.notifications = counter });
    }
}
