import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketComponent } from './ticket/ticket.component';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  host: { id: 'tickets' },
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAddTicket(ticketData: { title: string; request: string }) {
    const newTicket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.request,
      status: 'open',
    };
    this.tickets.push(newTicket);
  }
  onCloseTicket(ticketId: string): void {
    this.tickets = this.tickets.map((ticket) =>
      ticketId === ticket.id ? { ...ticket, status: 'closed' } : ticket
    );
  }
}
