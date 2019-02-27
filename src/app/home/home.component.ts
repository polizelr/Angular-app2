import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Array<Oferta>

  //cria a variável como sendo um atributo do objeto
  constructor(private ofertasServices: OfertasService) { }


  ngOnInit() {
    // this.ofertas=this.ofertasServices.getOfertas()
    // console.log(this.ofertas)

    //getOfertas2() retorna uma promessa e é necessário explicar como essa promessa, quando devolvida, vai ser trabalhada
    this.ofertasServices.getOfertas()
      //.then executa uma ação quando a promessa estiver resolvida
      .then(
        //o que a aplicação faz no revolve da promise
        (ofertas: Oferta[]) => {          
          this.ofertas = ofertas}       
      )
      .catch(
        //o que a aplicação faz no reject da promise
        (param: any)=>console.log(param)
      )
  }

}
