import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-auth-z-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-z-card.component.html',
  styleUrls: ['./auth-z-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthZCardComponent {}
