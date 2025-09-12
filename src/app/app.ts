import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiants  } from './view/etudiants/etudiants';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal(`friandiseApp`);
  public message = `<h3>Ici c'est ISI 4</h3>`;
  public ngOnInit(): void {
    this.message;
  }
}
