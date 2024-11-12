// usuario.service.ts
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

  obtenerUsuarios(): Observable<any[]> {
    return of(this.usuarios);
  }

  obtenerUsuarioPorId(id: number): Observable<any> {
    const usuario = this.usuarios.find(u => u.id === id);
    return of(usuario);
  }

  agregarUsuario(usuario: any): void {
    usuario.id = this.usuarios.length + 1; // Generar un nuevo ID
    this.usuarios.push(usuario);
  }
}
