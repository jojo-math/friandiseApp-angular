import { Component } from '@angular/core';

interface Etudiant{
  nom: string;
  prenom: string;
  classe: string;
  dateNaissance?: string;
  sexe: string;
  filiere: string;
  niveau: string;
}

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
    is_isi4: boolean = true;
    public students: string[] = ['KOUANG', 'KOUBISSACK', 'BILOGUE', 'DONGMO', 'MOUGANG'];
    list_students: Etudiant[] = [
      { nom: 'KOUANG', prenom: 'Jackie', classe:'ISI 4 FR', sexe: 'F', filiere: 'ISI', niveau: '4' },
      { nom: 'KOUBISSACK', prenom: 'Lucie', classe:'ISI 4 FR', dateNaissance: '12-09-2004', sexe: 'F', filiere: 'ISI', niveau: '4' },
      { nom: 'BILOGUE', prenom: 'Jean', classe:'ISI 4 FR', dateNaissance: '12-09-2005', sexe: 'M', filiere: 'ISI', niveau: '4' },
      { nom: 'DONGMO', prenom: 'Jean', classe:'ISI 4 FR', dateNaissance: '12-09-2006', sexe: 'M', filiere: 'ISI', niveau: '4' },
      { nom: 'MOUGANG', prenom: 'Jean', classe:'ISI 4 FR', dateNaissance: '24-02-2004', sexe: 'M', filiere: 'ISI', niveau: '4' }
    ];
}
