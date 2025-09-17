import { Component } from '@angular/core';
import { Etudiants } from '../etudiants/etudiants';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-details-student',
  imports: [],
  templateUrl: './details-student.html',
  styleUrl: './details-student.scss'
})
export class DetailsStudent {

  selectedStudent: string | null;
  selectedClass: string | null;
  constructor (
    private routerActivated: ActivatedRoute
    // sait quand une URL a recu un parametre
  ){
    const params = this.routerActivated.snapshot.paramMap.get('matricule');
    const classe = this.routerActivated.snapshot.paramMap.get('classe');

    console.log(params);
    this.selectedStudent = params;
    this.selectedClass = classe;
  }
}
