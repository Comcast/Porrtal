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
