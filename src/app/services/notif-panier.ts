import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifPanier {
  private http: HttpClient = inject(HttpClient);

  incrementBadge(n:number){
    return n+1;
  }
}
