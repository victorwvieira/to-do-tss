import { Component, Input } from '@angular/core';
import {
  faFileAlt,
  faFileCode,
  faFileCircleCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() title = '';
  faFileAlt = faFileAlt;
  faFileCode = faFileCode;
  faFileCircleCheck = faFileCircleCheck;
}
