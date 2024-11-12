import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ListaProComponent } from './lista-pro/lista-pro.component';
// import { ListaProductosComponent } from './lista-productos/lista-productos.component';
// import { ListaComponent } from './lista-producto/lista-producto.component';


@NgModule({
  declarations: [
    ListaProComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
