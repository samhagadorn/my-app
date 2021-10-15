import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { ServiceDemo2Component } from './service-demo2/service-demo2.component';
import { StruDireComponent } from './stru-dire/stru-dire.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { OneWayComponent } from './one-way/one-way.component';
import { HttpClientComponent } from './http-client/http-client.component';

const routes: Routes = [
{path: "newComponent", component: NewCompComponent},  
{path: "pipeDemo", component: PipeDemoComponent},  
{path: "serviceDemo", component: ServiceDemoComponent},  
{path: "serviceDemo2", component: ServiceDemo2Component},  
{path: "struDire", component: StruDireComponent},  
{path: "oneWay", component: OneWayComponent},  
{path: "twoWay", component: TwoWayComponent},  
{path: "httpClient", component: HttpClientComponent},  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
