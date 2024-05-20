/*
Copyright 2024 Comcast Cable Communications Management, LLC

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
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'porrtal-account-billing-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-billing-history.component.html',
  styleUrls: ['./account-billing-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountBillingHistoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
