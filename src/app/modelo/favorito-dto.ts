export class FavoritoDTO {

  idUsuario: number;
  idProducto: number;

  constructor(idUsuario: number, idProducto: number) {
    this.idUsuario = idUsuario;
    this.idProducto = idProducto;
  }
}
