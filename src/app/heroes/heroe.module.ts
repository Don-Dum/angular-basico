import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  // Que cosas contiene este modulo los componetes
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],

  // Que cosas quiero que se muestren fuera de este modulo
  exports: [
    ListadoComponent
  ],

  // Solo van modulos aqui
  imports: [
    CommonModule
  ]

})

export class HeroesModule {

}
