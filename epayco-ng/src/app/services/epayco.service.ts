import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EpaycoService {
  configUrl = 'https://secure.epayco.io/validation/v1/reference/';
  constructor(
    private http: HttpClient
  ) { }

  getTransactionResponse(refPayco: string) {
    return this.http.get(this.configUrl+refPayco);
  }
}
