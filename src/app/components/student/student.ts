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

  // constructor(clientServ: ClientService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.etu);
    console.log(this.clientServ.sayHello());
    console.log(this.clientServ.sayGoodBye(this))
  }
  stepOne(val: number, callback?: any){
    const result = val + 1;
    callback(result);
  }
  stepTwo(val: number, callback?: any){
    const result = val + 20;
    callback(result);
  }
  stepThree(val: number, callback?: any){
    const result = val + 3;
    callback(result);
  }
  ngAfterViewInit(): void{
    let result: number = 0;
    this.stepOne(result, (reponse1:number) => {
      (console.log(` Result one : ${reponse1}`));
      this.stepTwo(reponse1, (reponse2:number) => (console.log(` Result two : ${reponse2}`)));
    });
    this.stepThree(result, (n:number) => (console.log(` Result three : ${n}`)));
  }
}
