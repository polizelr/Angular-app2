import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  //cria a variável como sendo um atributo do objeto
  constructor(private ofertasServices: OfertasService) { }


  ngOnInit() {
    console.log(this.ofertasServices.getOfertas())

  }

}
