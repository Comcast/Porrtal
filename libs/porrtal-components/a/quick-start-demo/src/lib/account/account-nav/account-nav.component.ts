import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-account-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-nav.component.html',
  styleUrls: ['./account-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountNavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
