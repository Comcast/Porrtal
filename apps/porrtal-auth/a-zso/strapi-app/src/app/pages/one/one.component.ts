import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
})
export class OneComponent {}
