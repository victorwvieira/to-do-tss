import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, MoveCard } from 'src/app/models/card.model';
import {
  faCircleArrowRight,
  faCircleArrowLeft,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: Card | null = null;
  @Input() column = '';
  @Output() moveCard = new EventEmitter<MoveCard>();
  @Output() deleteCard = new EventEmitter<Card>();

  faCircleArrowLeft = faCircleArrowLeft;
  faCircleArrowRight = faCircleArrowRight;
  faTrash = faTrash;

  onMoveCard(direction: string) {
    if (this.card) {
      this.moveCard.emit({ direction, card: this.card });
    }
  }

  onDelete() {
    if (this.card) {
      this.deleteCard.emit(this.card);
    }
  }
}
