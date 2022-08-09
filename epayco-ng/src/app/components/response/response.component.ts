import { Component, OnInit } from '@angular/core';
import { EpaycoService } from "src/app/services/epayco.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  refPayco: string = '';
	transactionResponse:any;
  constructor(
    private epaycoService: EpaycoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.refPayco= params['ref_payco'] || params['x_ref_payco'];
    });
    this.epaycoService.getTransactionResponse(this.refPayco)
    .subscribe((data: any) =>{
        this.transactionResponse = data.data
    });
  }

}
