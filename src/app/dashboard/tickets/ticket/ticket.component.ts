import { Component, Input, output } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  close = output<void>();
  isOpenDetails = false;

  onToggleDetails(): void {
    this.isOpenDetails = !this.isOpenDetails;
  }
  onMarkAsCompleted() {
    this.close.emit();
  }
}
