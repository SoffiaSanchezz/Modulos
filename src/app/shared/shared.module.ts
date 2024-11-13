import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizarPipe } from './capitalizar.pipe';
import { ResaltarDirective } from './resaltar.directive';



@NgModule({
  declarations: [
    CapitalizarPipe,
    ResaltarDirective
  ],
  imports: [
    CommonModule,
    NgModule
  ],
  exports: [
  CapitalizarPipe, 
  ResaltarDirective
]
})
export class SharedModule { }
