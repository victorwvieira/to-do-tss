import { Component, Input } from '@angular/core';
import {
  faComment,
  faCommentDots,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input() title = '';
  faComment = faComment;
  faCommentDots = faCommentDots;
  faCheck = faCheck;
}
