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
      ["https://res.cloudinary.com/dup2t5osv/image/upload/v1685342842/unimarket/unimarket/kj2nfioithcymnlitvtf.avif", "https://res.cloudinary.com/dup2t5osv/image/upload/v1685342842/unimarket/unimarket/kj2nfioithcymnlitvtf.avif"], ["TECNOLOGIA", "HOGAR"], 1));

    this.productos.push(new ProductoGetDTO(2, "Televisor Samsung 4K", "Descripcion 2", 4500000, 3,
      ["https://res.cloudinary.com/dup2t5osv/image/upload/v1685342963/unimarket/unimarket/gxjmdc7rrnccfkfavdcj.jpg", "https://res.cloudinary.com/dup2t5osv/image/upload/v1685342963/unimarket/unimarket/gxjmdc7rrnccfkfavdcj.jpg"], ["TECNOLOGIA"], 2));

    this.productos.push(new ProductoGetDTO(3, "Tenis Nike", "Descripcion 3", 250000, 5,
      ["https://res.cloudinary.com/dup2t5osv/image/upload/v1685343295/unimarket/unimarket/kzjxb2dbmvwsxnv5p8li.webp", "https://res.cloudinary.com/dup2t5osv/image/upload/v1685343295/unimarket/unimarket/kzjxb2dbmvwsxnv5p8li.webp"], ["DEPORTES", "CALZADO"], 3));

    this.productos.push(new ProductoGetDTO(4, "Camiseta Adidas", "Descripcion 4", 150000, 10,
      ["https://picsum.photos/450/228", "https://picsum.photos/450/228"], ["DEPORTES", "MODA"], 4));

    this.productos.push(new ProductoGetDTO(5, "Camiseta Polo", "Descripcion 5", 50000, 20,
      ["https://picsum.photos/450/229", "https://picsum.photos/450/229"], ["MODA", "DEPORTES"], 5));

    this.productos.push(new ProductoGetDTO(6, "Pantalón Jean", "Descripcion 6", 100000, 15,
      ["https://picsum.photos/450/230", "https://picsum.photos/450/230"], ["MODA"], 6));

    this.productos.push(new ProductoGetDTO(7, "Cama doble", "Descripcion 7", 500000, 5,
      ["https://picsum.photos/450/231", "https://picsum.photos/450/231"], ["HOGAR", "TECNOLOGIA"], 7));

    this.productos.push(new ProductoGetDTO(8, "Cama sencilla", "Descripcion 8", 300000, 10,
      ["https://picsum.photos/450/232", "https://picsum.photos/450/232"], ["HOGAR"], 7));


    this.productos.push(new ProductoGetDTO(9, "Set de herramienta", "Descripcion 9", 50000, 10,
    ["https://res.cloudinary.com/dup2t5osv/image/upload/v1685343419/unimarket/unimarket/pemxgxukgvqddqeqdt7m.jpg", "https://res.cloudinary.com/dup2t5osv/image/upload/v1685343419/unimarket/unimarket/pemxgxukgvqddqeqdt7m.jpg"], ["OTROS"], 10));
  }

  public listar(): ProductoGetDTO[] {
    return this.productos;
  }

  public obtener(codigo:number):ProductoGetDTO | undefined{
    return this.productos.find(p => p.idProducto == codigo);
    }
}
