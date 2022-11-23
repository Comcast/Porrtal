import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  Input,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  MatLegacyMenuModule as MatMenuModule,
  MatLegacyMenuTrigger as MatMenuTrigger,
} from '@angular/material/legacy-menu';
import { BannerData } from '@porrtal/a-shell';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'porrtal-banner-menu',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule],
  templateUrl: './banner-menu.component.html',
  styleUrls: ['./banner-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerMenuComponent {
  @Input()
  public bannerData?: BannerData;

  public menuPosition = {
    x: '0px',
    y: '0px',
  };

  @ViewChild(MatMenuTrigger, { static: true })
  menuTrigger!: MatMenuTrigger;

  private window?: Window;

  constructor(@Inject(DOCUMENT) private document: Document) {
    if (this.document && this.document.defaultView) {
      this.window = this.document.defaultView;
    }
  }

  @HostListener('click', ['$event'])
  containerClick(evt?: MouseEvent) {
    // alert(
    //   `entity type: ${this.entityType}\r\n` +
    //     `state: ${JSON.stringify(this.state, null, 2)}\r\n` +
    //     `mouseX: ${evt?.clientX}`
    // );

    this.menuPosition = {
      x: evt?.clientX ? `${evt?.clientX}px` : '0px',
      y: evt?.clientY ? `${evt?.clientY}px` : '0px',
    };

    this.menuTrigger.openMenu();
  }

  launchItem(menuItem: BannerData, shiftKey: boolean, evt: Event) {
    if (menuItem.targetUrl) {
      if (shiftKey) {
        this?.window?.open(menuItem.targetUrl, '_blank');
        evt.stopPropagation();
      } else {
        if (this.window && this.window.location && this.window.location) {
          this.window.location.href = menuItem.targetUrl;
        }
      }
    }
  }
}
