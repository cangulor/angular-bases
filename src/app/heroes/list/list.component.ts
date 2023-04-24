import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNombre: string[]=['Spiderman','Iroman','Hulk','Thor'];
  public eliminarHero?: string;

  eliminarUltimoHero():void{
   this.eliminarHero = this.heroNombre.pop();

  }
}
