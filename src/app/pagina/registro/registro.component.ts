import { Component } from '@angular/core';
import { UsuarioDTO } from 'src/app/modelo/usuario-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario: UsuarioDTO;
  constructor() {
    this.usuario = new UsuarioDTO();
  }

  public registrar() {
    console
  }

  public sonIguales(): boolean {
    return this.usuario.contrasenia == this.usuario.confirmarcontrasenia;
  }

}
