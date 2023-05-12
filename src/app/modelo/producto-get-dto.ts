export class ProductoGetDTO {
  codigo: number = 0;
  nombre: string = "";
  descripcion: string = "";
  precio: number = 0;
  unidadesDisponibles: number = 0;
  imagenes: string[] = [];
  categorias: string[] = [];

  constructor(codigo: number, nombre: string, descripcion: string, precio: number, unidadesDisponibles: number, imagenes: string[], categorias: string[]) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.unidadesDisponibles = unidadesDisponibles;
    this.imagenes = imagenes;
    this.categorias = categorias;
  }
}
