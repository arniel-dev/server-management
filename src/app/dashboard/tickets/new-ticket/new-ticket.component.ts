import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule, CommonModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @Output() add = new EventEmitter<{ title: string; request: string }>();
  @ViewChild('myForm')
  private form?: ElementRef<HTMLFormElement>;

  OnSubmit(title: string, request: string, event: Event): void {
    event.preventDefault();
    if (!title.trim() || !request.trim()) {
      return; // Do not submit if either field is empty
    }
    this.add.emit({ title, request });
    this.form?.nativeElement.reset();
  }
}
