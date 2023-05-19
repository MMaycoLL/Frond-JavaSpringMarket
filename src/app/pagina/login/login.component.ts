import { Component } from '@angular/core';
import { SesionDTO } from 'src/app/modelo/sesion-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  alerta!: Alerta;
  sesion: SesionDTO;
  constructor(private authService: AuthService, private tokenService: TokenService) {
    this.sesion = new SesionDTO();
  }

  public iniciarSesion() {
    const objeto = this;

    console.log(this.sesion);

    this.authService.login(this.sesion).subscribe({
      next: data => {
        objeto.tokenService.login(data.respuesta.token);
      },
      error: error => {
        objeto.alerta = new Alerta(error.error.respuesta, "danger");
      }
    });

  }
}
