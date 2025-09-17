import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from "../../components/student/student";
// interface Etudiant{
//   matricule: string,
//   nom: string;
//   prenom: string;
//   classe: string;
//   dateNaissance?: string;
//   sexe: string;
//   filiere: string;
//   niveau: string;
// }

@Component({
  selector: 'app-etudiants',
  imports: [Student],
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
    // list_students: Etudiant[] = [
    //   { matricule:'2223i098', nom: 'KOUANG', prenom: 'Jackie', classe:'ISI 4 FR', sexe: 'F', filiere: 'ISI', niveau: '4' },
    //   { matricule:'2223i021',nom: 'KOUBISSACK', prenom: 'Lucie', classe:'ISI 4 FR', dateNaissance: '12-09-2004', sexe: 'F', filiere: 'ISI', niveau: '4' },
    //   { matricule:'2223i023',nom: 'BILOGUE', prenom: 'Jean', classe:'ISI 4 FR', dateNaissance: '12-09-2005', sexe: 'M', filiere: 'ISI', niveau: '4' },
    //   { matricule:'2223i043',nom: 'DONGMO', prenom: 'Jean', classe:'ISI 4 FR', dateNaissance: '12-09-2006', sexe: 'M', filiere: 'ISI', niveau: '4' },
    //   { matricule:'2223i103',nom: 'MOUGANG', prenom: 'Jean', classe:'ISI 4 FR', dateNaissance: '24-02-2004', sexe: 'M', filiere: 'ISI', niveau: '4' }
    // ];
    
    public etudiantsList:Etudiant[] = [
    {matricule:"2223i036", nom:"MELONG", prenom:"Joan", dateNaissance:"2000-04-23"},
    {matricule:"2223i037", nom:"KOUANG", prenom:"Darlene", dateNaissance:"2000-04-23"},
    {matricule:"2223i123", nom:"DJIDAWO", dateNaissance:"2000-04-23"},
    {matricule:"2223i098", nom:"LOWE", prenom:"Enzo", dateNaissance:"2000-04-23"},
    {matricule:"2223i204", nom:"KOUBISSACK", prenom:"Lucie", dateNaissance:"2000-04-23"}
  ]

    constructor(private router:Router){

    }
    public getStu(objEtudiant: Etudiant): void{
      this.router.navigate(['/details-student'], {state: objEtudiant});
      // return this.list_students.find(student => student.matricule === matricule);
    }

  }
