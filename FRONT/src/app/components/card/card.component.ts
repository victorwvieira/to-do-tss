import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card, MoveCard } from 'src/app/models/card.model';
import {
  faCircleArrowRight,
  faCircleArrowLeft,
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

  faCircleArrowLeft = faCircleArrowLeft;
  faCircleArrowRight = faCircleArrowRight;

  onMoveCard(direction: string) {
    if (this.card) {
      this.moveCard.emit({ direction, card: this.card });
    }
  }
}
