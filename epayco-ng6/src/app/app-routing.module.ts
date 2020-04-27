import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent }      from './components/checkout/checkout.component';
import { ResponseComponent }      from './components/response/response.component';

const routes: Routes = [
	{ path: '', component: CheckoutComponent },
	{ path: 'response', component: ResponseComponent },
	{ path: 'response', component: ResponseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
