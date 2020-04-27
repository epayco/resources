import { Component, OnInit } from '@angular/core';
import { EpaycoService } from '../../services/epayco.service';
import { EpaycoTransaction } from '../../models/epayco-transaction.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
	refPayco: string = ''
	transactionResponse:any ;
  constructor(
  private epaycoService: EpaycoService,
  private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
	this.activatedRoute.queryParams.subscribe(params => {
       this.refPayco= params['ref_payco'] || params['x_ref_payco'];
 	});
  	this.epaycoService.getTransactionResponse(this.refPayco)
    .subscribe((data: EpaycoTransaction) =>{
        this.transactionResponse = data.data
    });
  }

}
