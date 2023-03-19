import { Component, EventEmitter, Output } from '@angular/core';
import { faCirclePlus, faDrum } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() addNewCard = new EventEmitter<boolean>();

  faCirclePlus = faCirclePlus;
  faDrum = faDrum;

  onClickAddCard() {
    this.addNewCard.emit(true);
  }
}
