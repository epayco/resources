import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  window: any = window;
	handler = this.window.ePayco.checkout.configure({ key: 'xxxxxxxxxxxxxxxxxx', test: true });
  constructor() { }

  ngOnInit(): void {
  }
  
  epayco(){
    var data={ 
      //Parametros compra (obligatorio) 
      //invoice: "1234",
      currency: "cop",
      name: "Plan de facturacion electronica",
      description: "Plan de facturacion electronica",
      tax_base: 40000,
      tax: 0,
      amount: 40000,
      country: "co",
      lang: "es",
      external: "false",
      //Onpage="false" - Standard="true" 
      //Atributos opcionales
      method:'POST',
      extra1: '',
      response: "http://localhost:4200/response",
      confirmation: "http://localhost:4200/confirmation",
    } 
    
    this.handler.onCloseModal = this.onCloseEpaycoModal
    this.handler.open(data)
  } 

  onCloseEpaycoModal(){
    alert('Close ePayco Modal!')
  }
}
