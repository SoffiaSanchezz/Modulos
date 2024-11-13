import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { UsuarioService } from '../usuario.service';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PerfilUsuarioComponent, UsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule,
    ReactiveFormsModule,
    UsuarioRoutingModule
  ],
  providers: [UsuarioService],
})
export class UsuarioModule { }
