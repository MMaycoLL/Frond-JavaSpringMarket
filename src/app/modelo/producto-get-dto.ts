export class ProductoGetDTO {
  idProducto: number;
  nombreProducto: string;
  descripcionProducto: string;
  precioActual: number;
  unidadesDisponibles: number;
  imagenes: string[] = [];
  categorias: string[] = [];
  idPersona: number;

  constructor(idProducto: number, nombreProducto: string, descripcionProducto: string, precioActual: number, unidadesDisponibles: number, imagenes: string[], categorias: string[], idPersona: number) {
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.descripcionProducto = descripcionProducto;
    this.precioActual = precioActual;
    this.unidadesDisponibles = unidadesDisponibles;
    this.imagenes = imagenes;
    this.categorias = categorias;
    this.idPersona = idPersona;
  }
}
