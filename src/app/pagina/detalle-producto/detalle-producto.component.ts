import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoService } from 'src/app/servicios/carrito.service';
import {ProductoDTO} from 'src/app/modelo/producto-dto';
import { ProductoGetDTO } from 'src/app/modelo/producto-get-dto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  productos: ProductoGetDTO[] = [];
  codigoProducto: number;
constructor( private route:ActivatedRoute, private carritoService: CarritoService, private productoService: ProductoService){
  this.codigoProducto = 0;
  this.route.params.subscribe(params => {
      this.codigoProducto  = params["codigo"];
  });
}
public agregarCarrito() {

  this.carritoService.agregar(this.codigoProducto);
}

}
