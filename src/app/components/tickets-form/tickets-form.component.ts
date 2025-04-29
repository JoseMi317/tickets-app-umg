import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets-form',
  imports: [ReactiveFormsModule],
  templateUrl: './tickets-form.component.html',
})
export class TicketsFormComponent {
  miFormulario: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.miFormulario = this.fb.group({
      nombre: [''],
      email: [''],
      telefono: [''],
      mensaje: ['']
    });
  }

  enviarDatos() {
    if (this.miFormulario.valid) {
      const datos = this.miFormulario.value;
      //this.webSocketService.enviar(datos); // Aquí lo mandas al WebSocket
    }
  }

}