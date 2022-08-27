import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-account-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
