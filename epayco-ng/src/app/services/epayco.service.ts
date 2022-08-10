import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EpaycoService {
  configUrl = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

  getTransactionResponse(refPayco: string) {
    return this.http.get(this.configUrl+refPayco);
  }
}
