/*
Copyright 2022 Comcast Cable Communications Management, LLC

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
export const severityTypes = [
  'emergency',
  'critical',
  'error',
  'warning',
  'info',
  'debug',
] as const;
export type SeverityType = typeof severityTypes[number];

export const consumerTypes = ['user', 'developer'] as const;
export type ConsumerType = typeof consumerTypes[number];

export interface LoggerEntry {
  system: string;
  subsystem: string;
  component: string;
  severity: SeverityType;
  consumer: ConsumerType;
  message: string;
  messageDetail: string;
  isRead: boolean;
  user: string;
}
