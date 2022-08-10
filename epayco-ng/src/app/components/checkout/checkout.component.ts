import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EpaycoService } from "src/app/services/epayco.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public window:any;
  public checkoutUrl;

  constructor(
    private _renderer2: Renderer2, 
    private epaycoService: EpaycoService,
    @Inject(DOCUMENT) private _document: Document
  ) { 
    this.checkoutUrl = this.epaycoService.checkoutUrl;
  }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
      script.src = this.checkoutUrl;
      this._renderer2.appendChild(this._document.body, script);
      this.window = window;
  }
  
  epayco(){
    let handler = this.window.ePayco.checkout.configure({ key: 'xxxxxxxxxxxxxxxxxxxxxxx', test: true });
    var data={ 
      //Parametros compra (obligatorio) 
      invoice: "1234",
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
    handler.open(data)
    handler.onClosed(function(response:any) {
      alert('Close ePayco Modal!')
    });
  } 

}
