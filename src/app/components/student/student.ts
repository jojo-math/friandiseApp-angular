import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ClientService } from '../../providers/client.service';

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

  private clientServ: ClientService = inject(ClientService);

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.etu);
    console.log(this.clientServ.sayHello());
  }
}
