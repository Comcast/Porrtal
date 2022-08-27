import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-search-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
