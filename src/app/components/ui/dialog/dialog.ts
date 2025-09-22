import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrls: ['./dialog.css'],
  standalone: true,
  imports: [CommonModule]
})
export class Dialog {
  @Input() isOpen = false; // open state
  @Output() isClose = new EventEmitter<void>(); // emit when closed

  onClose() {
    this.isClose.emit();
  }
}
