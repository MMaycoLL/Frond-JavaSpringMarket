import { Component } from '@angular/core';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  productos: ProductoGetDTO[] = [];

  constructor(private productoService: ProductoService) {
    this.productos = this.productoService.listar();
  }
}
