import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
  { path: 'productos', loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule),},
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule),},
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m=> m.SharedModule),},
  {path: '**', component: PageNotFoundComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
