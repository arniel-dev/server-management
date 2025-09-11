import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[app-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() name!: string;
  @Input() icon!: string;
}
