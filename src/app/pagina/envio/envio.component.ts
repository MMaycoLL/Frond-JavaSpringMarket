import { Component } from '@angular/core';
import { EnvioDTO } from 'src/app/modelo/envio-dto';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent {

  envio: EnvioDTO;
  ciudades: string[];
  constructor() {
    this.ciudades = [];
    this.envio = new EnvioDTO();
  }

ngOnInit(): void {
    this.ciudades.push('BOGOTA');
    this.ciudades.push('MEDELLIN');
    this.ciudades.push('CALI');
    this.ciudades.push('BARRANQUILLA');
    this.ciudades.push('CARTAGENA');
}

  public registrar() {
    console.log(this.envio)

  }
}


