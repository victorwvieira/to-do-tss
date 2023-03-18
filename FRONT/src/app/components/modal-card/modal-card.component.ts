import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss'],
})
export class ModalCardComponent {
  @Input() display: boolean | null = false;
  @Input() card: Card | undefined;
  @Output() closeModal = new EventEmitter<Card | null>();

  onCloseModal(card: Card | null = null) {
    this.closeModal.emit(card);
  }
}
