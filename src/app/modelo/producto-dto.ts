export class ProductoDTO {
  nombreProducto: string;
  descripcionProducto: string;
  unidadesDisponibles: number | null;
  precioActual: number | null;
  idPersona: number;
  imagenes: string[];
  categorias: string[];

  constructor(
    nombreProducto: string = "",
    descripcionProducto: string = "",
    unidadesDisponibles: number | null= null,
    precioActual: number | null = null,
    idPersona: number = 0,
    imagenes: string[] = [],
    categorias: string[] = []
  ) {
    this.nombreProducto = nombreProducto;
    this.descripcionProducto = descripcionProducto;
    this.unidadesDisponibles = unidadesDisponibles;
    this.precioActual = precioActual;
    this.idPersona = idPersona;
    this.imagenes = imagenes;
    this.categorias = categorias;
  }
}


