import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NotifPanier {
  // private http: HttpClient = inject(HttpClient);
  private notif$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  setNotification(counter_msg: number){
    this.notif$.next(counter_msg);
  }
  getNotification(){
    return this.notif$.asObservable();
  }
}
