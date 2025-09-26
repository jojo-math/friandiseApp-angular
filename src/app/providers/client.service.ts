import { Injectable } from '@angular/core';

@Injectable({ // permet de preciser que ce service est injectable
  providedIn: 'root'
})
export class ClientService {
  sayHello() {
    return `Hello World!`;
  }
}
