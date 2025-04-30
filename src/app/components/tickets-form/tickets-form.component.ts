import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tickets-form',
  imports: [ReactiveFormsModule],
  templateUrl: './tickets-form.component.html',
})
export class TicketsFormComponent {
  agentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agentForm = this.fb.group({
      identification: [''],
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      email: [''],
      priority: [''],
      status: [''],
      description: [''],
      createdAt: [''],
      updatedAt: [''],
      createdBy: [''], // Assuming it's just the user ID as a string
    });
  }

  sendData() {
    if (this.agentForm.valid) {
      const datos = this.agentForm.value;
      //this.webSocketService.enviar(datos); // Aquí lo mandas al WebSocket
    }
  }

}