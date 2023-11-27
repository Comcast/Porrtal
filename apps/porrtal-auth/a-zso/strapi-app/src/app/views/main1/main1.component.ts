import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';

@Component({
  selector: 'app-main1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.scss'],
})
export class Main1Component {
  @Input() viewState?: ViewState
}
