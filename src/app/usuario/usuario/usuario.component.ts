import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent implements OnInit {
  usuarios: any[] = [];
  nuevoUsuario = { nombre: '', email: '' };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  agregarUsuario(): void {
    if (this.nuevoUsuario.nombre && this.nuevoUsuario.email) {
      this.usuarioService.agregarUsuario(this.nuevoUsuario);
      this.nuevoUsuario = { nombre: '', email: '' }; // Limpia el formulario
      this.usuarioService.obtenerUsuarios().subscribe((data) => {
        this.usuarios = data; // Actualiza la lista de usuarios
      });
    }
  }
}
