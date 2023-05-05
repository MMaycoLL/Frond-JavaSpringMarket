import { Component } from '@angular/core';
import { SesionDTO } from 'src/app/modelo/sesion-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  sesion: SesionDTO;
  constructor() {
    this.sesion = new SesionDTO();
  }

  public iniciarSesion() {
    console
  }
}
