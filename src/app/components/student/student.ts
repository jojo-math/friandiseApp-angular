import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.scss'
})



export class Student {
  @Input() etu!:Etudiant | null;

  
}
