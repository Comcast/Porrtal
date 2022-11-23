import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-account-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountCreateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
