import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardContent } from 'src/app/models/card.model';
import { faSave, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal-card',
  templateUrl: './modal-card.component.html',
  styleUrls: ['./modal-card.component.scss'],
})
export class ModalCardComponent {
  @Input() display: boolean | null = false;
  @Input() title = '';
  @Input() content = '';
  @Output() closeModal = new EventEmitter<CardContent | null>();
  faSave = faSave;
  faXmark = faXmark;
  options = {
    hideIcons: ['Reference', 'Image'],
  };

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
