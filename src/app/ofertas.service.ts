import { Oferta } from '../app/shared/oferta.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'


@Injectable()
export class OfertasService{

    constructor(private http: HttpClient){}


    public getOfertas(): Promise<Oferta[]>{   
        // return this.ofertas
        //efetuar uma requisição http e retornar uma promessa contendo um array de oferta
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
            .toPromise()
            //recupera o parâmetro resolvido
           // .then((resposta:any) => resposta.json())
           .then((resposta: any) => resposta)
    }

    // public ofertas: Array<Oferta> = [
    //     {
    //         id: 1,
    //         categoria: "restaurante",
    //         titulo: "Super Burger",
    //         descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
    //         anunciante: "Original Burger",
    //         valor: 29.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/1/img1.jpg"},
    //             {url: "/assets/ofertas/1/img2.jpg"},
    //             {url: "/assets/ofertas/1/img3.jpg"},
    //             {url: "/assets/ofertas/1/img4.jpg"}
    //         ]
    //     },
    //     {
    //         id: 2,
    //         categoria: "restaurante",
    //         titulo: "Cozinha Mexicana",
    //         descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
    //         anunciante: "Mexicana",
    //         valor: 32.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/2/img1.jpg"},
    //             {url: "/assets/ofertas/2/img2.jpg"},
    //             {url: "/assets/ofertas/2/img3.jpg"},
    //             {url: "/assets/ofertas/2/img4.jpg"}
    //         ]
        
    //     },
    //     {
    //         id: 4,
    //         categoria: "diversao",
    //         titulo: "Estância das águas",
    //         descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
    //         anunciante: "Estância das águas",
    //         valor: 31.90,
    //         destaque: true,
    //         imagens: [
    //             {url: "/assets/ofertas/3/img1.jpg"},
    //             {url: "/assets/ofertas/3/img2.jpg"},
    //             {url: "/assets/ofertas/3/img3.jpg"},
    //             {url: "/assets/ofertas/3/img4.jpg"},
    //             {url: "/assets/ofertas/3/img5.jpg"},
    //             {url: "/assets/ofertas/3/img6.jpg"}
    //         ]
    //     }
    // ]



    

    // //preparar um método capaz de retornar uma promessa
    // public getOfertas2(): Promise<Oferta[]>{
    //     //instanciar o objeto promisse, que espera uma ação (função de callback), que pode ser parametrizada de duas formas:
    //     //resolvida ou rejeitada
    //     return new Promise((resolve, reject)=>{
    //         console.log('será que passou por aqui?')     
    //         let deu_certo = true
    //         if(deu_certo){ 
    //             //o resolve passa essa informação para o then
    //             setTimeout(()=>resolve(this.ofertas),3000)           
    //             //algum tipo de processamento que ao finalizar chama  a função resolve ou a função reject
    //             //resolve(this.ofertas) //resolve pega a informação this.ofertas e passa pra o .then
    //         }
    //         else
    //             reject({codigo_erro: 404, mensagem_erro: 'Servidor não encontrado'})
    //     })
    //     .then((ofertas: Oferta[])=>{
    //         console.log('primeiro then')
    //         return ofertas   
    //     })
    //     .then((ofertas: Oferta[])=>{
    //         console.log('segundo then')
    //         return new Promise((resolve2, reject2)=>{
    //             setTimeout(()=>{resolve2(ofertas)},300)
    //         })   
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         console.log('terceito then executado após 3 segundos porque estava aguardando uma promise ser resolvida')
    //         return ofertas
    //     })
    // }

}