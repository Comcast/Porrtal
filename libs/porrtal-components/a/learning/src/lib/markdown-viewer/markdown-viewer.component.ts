import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-workspace-markdown-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './markdown-viewer.component.html',
  styleUrls: ['./markdown-viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkdownViewerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
