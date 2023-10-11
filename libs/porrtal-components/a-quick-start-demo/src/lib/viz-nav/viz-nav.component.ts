/*
Copyright 2023 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewState } from '@porrtal/a-api';
import { ShellStateService } from '@porrtal/a-shell';

@Component({
  selector: 'porrtal-viz-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viz-nav.component.html',
  styleUrls: ['./viz-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VizNavComponent implements OnInit {
  @Input() viewState?: ViewState;

  constructor(public shellStateService: ShellStateService) {}

  ngOnInit(): void {}
}
