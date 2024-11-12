import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pro',
  templateUrl: './lista-pro.component.html',
  styleUrl: './lista-pro.component.css'
})
export class ListaProComponent implements OnInit {
  productos: { id: number; nombre: string; precio: number }[] = [
    { id: 1, nombre: 'Producto A', precio: 100 },
    { id: 2, nombre: 'Producto B', precio: 200 },
    { id: 3, nombre: 'Producto C', precio: 300 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
