import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProComponent } from './lista-pro/lista-pro.component';


const routes: Routes = [
  // {path: '', component:ListaProductosComponent},
  {path:'', component:ListaProComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
