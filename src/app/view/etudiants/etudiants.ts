import { Component } from '@angular/core';

@Component({
  selector: 'app-etudiants',
  imports: [],
  templateUrl: './etudiants.html',
  styles: [`
       h1 {
        color: blue;
       }
    `
  ]
})
export class Etudiants {
    txtClass: string = "ISI 4";
    private matricule: string = "2024-ISI-001";
}
