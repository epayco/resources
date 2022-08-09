import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ResponseComponent } from "./components/response/response.component";

const appRoute : Routes = [
    {path:"", component: CheckoutComponent},
    {path:"response", component: ResponseComponent }
]
export const appRoutingProvider : any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoute);