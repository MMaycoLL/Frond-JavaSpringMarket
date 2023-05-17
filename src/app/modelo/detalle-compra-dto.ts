import { ProductoDTO } from "./producto-dto";

export class DetalleCompraDTO {
  producto: ProductoDTO = new ProductoDTO();
  unidades: number = 0;

  constructor(producto: ProductoDTO, unidades: number) {
    this.producto = producto;
    this.unidades = unidades;
  }

}
