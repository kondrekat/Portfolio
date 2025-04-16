import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Output() buttonClick = new EventEmitter<void>();

  handleClick() {
    this.buttonClick.emit(); // Emit пользовательское событие при клике
  }
}
