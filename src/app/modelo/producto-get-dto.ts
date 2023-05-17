export class ProductoGetDTO {
  idProducto: number = 0;
  nombreProducto: string = "";
  descripcionProducto: string = "";
  precioActual: number = 0;
  unidadesDisponibles: number = 0;
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
