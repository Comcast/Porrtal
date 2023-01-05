// edit and rename to msal-config.ts
import { BrowserCacheLocation, Configuration, LogLevel } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: '<my client id>',
    authority:
      'https://login.microsoftonline.com/<my org id>/',
    redirectUri: 'http://localhost:4200',
  },
  cache: {
    cacheLocation: 'localStorage',
  },
  system: {
    loggerOptions: {
      loggerCallback: (logLevel: LogLevel, message: string) => {
        console.log(message);
      },
      piiLoggingEnabled: true,
      logLevel: LogLevel.Verbose,
    },
  },
};
