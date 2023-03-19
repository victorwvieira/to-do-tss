import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, CardContent } from 'src/app/models/card.model';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss'],
})
export class ModalCardComponent {
  @Input() display: boolean | null = false;
  @Input() isEdit = false;
  @Input() title = '';
  @Input() content = '';
  @Output() closeModal = new EventEmitter<CardContent | null>();

  onCloseModal(isSave = false) {
    if (isSave) {
      this.closeModal.emit({
        titulo: this.title,
        conteudo: this.content,
      });
    } else {
      this.closeModal.emit(null);
    }

    this.title = '';
    this.content = '';
  }
}
