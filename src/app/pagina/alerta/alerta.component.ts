import { Component, Input } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent {
  @Input() alerta!: Alerta | null;
  public ocultar() {
    this.alerta = null;
  }
}
