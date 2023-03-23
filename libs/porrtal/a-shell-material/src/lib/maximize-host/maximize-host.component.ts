import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaximizeItem, ShellStateService } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-maximize-host',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './maximize-host.component.html',
  styleUrls: ['./maximize-host.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaximizeHostComponent implements OnDestroy, AfterViewInit {

  @Input() 
  maximizeItem?: MaximizeItem

  @ViewChild('maximizeHost', { read: ElementRef, static: true })
  maximizeHost?: ElementRef<HTMLDivElement>;

  zIndex = 9900;

  constructor(private shellStateService: ShellStateService) {}

  restoreMaximizeItem() {
    console.log('restore from maximize.', this.maximizeItem);
    this.shellStateService.dispatch({ type: 'restoreMaximized' });
    this.maximizeItem?.restore?.();
  }

  ngAfterViewInit() {
    if (this.maximizeItem && this.maximizeHost) {
      console.log('maximize-host: appendChild', this.maximizeItem);
      this.maximizeHost.nativeElement.appendChild(this.maximizeItem.htmlEl);
    } else {
      console.log(
        'error.  maximize-host component: afterViewInit: items not defined.'
      );
    }
  };

  ngOnDestroy() {};
}
