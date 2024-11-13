import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalizarPipe } from './capitalizar.pipe';
import { ResaltarDirective } from './resaltar.directive';
import path from 'path';

const routes: Routes = [
  {path: '', component: CapitalizarPipe},
  {path: '/resaltar', component: ResaltarDirective},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
