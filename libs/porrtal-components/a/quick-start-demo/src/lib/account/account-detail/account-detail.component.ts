import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-account-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
