import { Injectable } from '@angular/core';
import { Student } from '../components/student/student';

@Injectable({ // permet de preciser que ce service est injectable
  providedIn: 'root'
})
export class ClientService {
  sayHello() {
    return `Hello World!`;
  }
  sayGoodBye(student:Student){
    return `Good Bye ${student.etu.nom}`;
  }
}
