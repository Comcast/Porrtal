import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNInterface } from '@porrtal/a-user';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'porrtal-auth-n-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth-n-card.component.html',
  styleUrls: ['./auth-n-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthNCardComponent {
  isMaximized = false;
  childIndex = -1;
  parentNativeEl: any;

  authNSubj = new BehaviorSubject<{ authN: AuthNInterface | undefined }>({
    authN: undefined,
  });
  _authN?: AuthNInterface;
  state = 'waiting...';

  @Input() public set data(value: AuthNInterface) {
    this._authN = value;
    this.authNSubj.next({ authN: value });

    this._authN.state$.subscribe((authNState) => {
      this.authNSubj.next({ authN: this._authN });
      this.state = authNState;
    });
  }

  constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {}

  toggleMax() {
    if (!this.isMaximized) {
      this.parentNativeEl = this.el.nativeElement.parentElement;
      // this.childIndex = this.el.nativeElement.parentElement.children.indexOf(this.el.nativeElement);
      this.childIndex = Array.prototype.indexOf.call(this.el.nativeElement.parentElement.children, this.el.nativeElement)
      console.log('child index...', this.childIndex)
      this.renderer.appendChild(document.body, this.el.nativeElement);
      this.isMaximized = true;
    } else {
      this.renderer.insertBefore(this.parentNativeEl, this.el.nativeElement, this.parentNativeEl.children[this.childIndex]);
      this.isMaximized = false;
    }
  }
}
