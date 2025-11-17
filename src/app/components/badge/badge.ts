import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.html',
  styleUrl: './badge.scss'
})
export class Badge {
    public nb:number = 0;
    constructor(){
      console.log(this.nb);
    }
}
