import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.html',
  styleUrl: './student.scss'
})



export class Student {
  @Input() etu!:Etudiant;
  @Output() moyenneG : EventEmitter<number> = new EventEmitter<number>();

  computeMoyene(){
    const moy = (this.etu.noteCC * 0.3 + this.etu.noteSN * 0.7);
    this.moyenneG.emit(moy);
  }
}
