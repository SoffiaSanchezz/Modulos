import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios = [
    { id: 1, nombre: 'Juan Pérez', email: 'juan.perez@example.com' },
    { id: 2, nombre: 'Ana Gómez', email: 'ana.gomez@example.com' },
    { id: 3, nombre: 'Carlos Ruiz', email: 'carlos.ruiz@example.com' }
  ];

  constructor() {}

  // Obtener todos los usuarios
  obtenerUsuarios(): Observable<any[]> {
    return of(this.usuarios);
  }

  // Obtener un usuario por ID
  obtenerUsuarioPorId(id: number): Observable<any> {
    const usuario = this.usuarios.find(u => u.id === id);
    return of(usuario);
  }

  // Agregar un nuevo usuario
  agregarUsuario(usuario: any): void {
    usuario.id = this.usuarios.length + 1;
    this.usuarios.push(usuario);
  }

  // Actualizar un usuario existente
  actualizarUsuario(id: number, datosActualizados: any): Observable<any> {
    const usuarioIndex = this.usuarios.findIndex(u => u.id === id);
    if (usuarioIndex !== -1) {
      this.usuarios[usuarioIndex] = { ...this.usuarios[usuarioIndex], ...datosActualizados };
      return of(this.usuarios[usuarioIndex]);
    } else {
      return of(null);
    }
  }

  // Eliminar un usuario
  eliminarUsuario(id: number): Observable<boolean> {
    const usuarioIndex = this.usuarios.findIndex(u => u.id === id);
    if (usuarioIndex !== -1) {
      this.usuarios.splice(usuarioIndex, 1);
      return of(true);
    } else {
      return of(false);
    }
  }
}
