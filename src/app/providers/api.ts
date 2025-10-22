import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private http: HttpClient = inject(HttpClient);
  // toutes les methodes liees a un objet HttpClient sont des observables
  private readonly url: string = "https://restcountries.com/v3.1/all?fields=name,flag";
  getListChat(callback: any){
    this.http.get(this.url).subscribe(
      {
        next: (value: any) => {
          console.log(value);
          callback(value);
        },
      }
    )
  }
}
