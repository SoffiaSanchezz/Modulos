import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'productos', loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule),},
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
