import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from '../../entities/ticket';

@Component({
  selector: 'app-ticket-item',
  imports: [CommonModule],
  templateUrl: './ticket-item.component.html',
})
export class TicketItemComponent {
  @Input() ticket: Ticket | null = null;

  get statusColor(): string {
    if (!this.ticket) {
      return 'bg-gray-400';
    }

    switch (this.ticket.status) {
      case 'RESOLVED':
        return 'bg-green-400';
      case 'IN_PROGRESS':
        return 'bg-yellow-400';
      case  'RESOLVED':
        return 'bg-red-400';
      default:
        return 'bg-gray-400'; // Si no hay status conocido
    }
  }
}
