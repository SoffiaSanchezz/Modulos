import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit {
  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    const usuarioId = Number(this.route.snapshot.paramMap.get('id'));
    if (usuarioId) {
      this.usuarioService.obtenerUsuarioPorId(usuarioId).subscribe((data) => {
        this.usuario = data;
      });
    }
  }
}