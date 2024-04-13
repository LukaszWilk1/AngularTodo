import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();

  onClose(){
    this.close.emit();
  }
}
