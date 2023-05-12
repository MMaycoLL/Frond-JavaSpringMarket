import { Injectable } from '@angular/core';
import { ProductoGetDTO } from '../modelo/producto-get-dto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: ProductoGetDTO[];

  constructor() {
    this.productos = [];

    this.productos.push(new ProductoGetDTO(1, "Televisor LG 4K", "Descripcion 1", 3500000, 2,
      ["https://picsum.photos/450/225", "https://picsum.photos/450/225"], ["TECNOLOGIA", "HOGAR"]));

    this.productos.push(new ProductoGetDTO(2, "Televisor Samsung 4K", "Descripcion 2", 4500000, 3,
      ["https://picsum.photos/450/226", "https://picsum.photos/450/226"], ["TECNOLOGIA"]));

    this.productos.push(new ProductoGetDTO(3, "Tenis Nike", "Descripcion 3", 250000, 5,
      ["https://picsum.photos/450/227", "https://picsum.photos/450/227"], ["DEPORTES"]));

    this.productos.push(new ProductoGetDTO(4, "Camiseta Adidas", "Descripcion 4", 150000, 10,
      ["https://picsum.photos/450/228", "https://picsum.photos/450/228"], ["DEPORTES", "MODA"]));

    this.productos.push(new ProductoGetDTO(5, "Camiseta Polo", "Descripcion 5", 50000, 20,
      ["https://picsum.photos/450/229", "https://picsum.photos/450/229"], ["MODA", "DEPORTES"]));

    this.productos.push(new ProductoGetDTO(6, "Pantalón Jean", "Descripcion 6", 100000, 15,
      ["https://picsum.photos/450/230", "https://picsum.photos/450/230"], ["MODA"]));

    this.productos.push(new ProductoGetDTO(7, "Cama doble", "Descripcion 7", 500000, 5,
      ["https://picsum.photos/450/231", "https://picsum.photos/450/231"], ["HOGAR", "TECNOLOGIA"]));

    this.productos.push(new ProductoGetDTO(8, "Cama sencilla", "Descripcion 8", 300000, 10,
      ["https://picsum.photos/450/232", "https://picsum.photos/450/232"], ["HOGAR"]));
  }

  public listar(): ProductoGetDTO[] {
    return this.productos;
  }
}
