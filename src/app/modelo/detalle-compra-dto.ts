import { ProductoDTO } from "./producto-dto";

export class DetalleCompraDTO {
  producto: ProductoDTO;
  unidades: number;

  constructor(producto: ProductoDTO, unidades: number) {
    this.producto = producto;
    this.unidades = unidades;
  }

}
