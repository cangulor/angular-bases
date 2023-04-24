import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public nombre: string ='Iroman';
  public edad: number = 45;

  get capitalizadoNombre():string{
    return this.nombre.toUpperCase();
  }

  getHeroDescription():string{
    return`${this.nombre} - ${ this.edad}`;
  }

  cambioHero():void {
    this.nombre ='Spiderman'

  }

  cambioEdad(){
    this.edad = 25;

  }

  resetear():void{
    this.nombre ='Iroman'
    this.edad = 45;
  }

}
