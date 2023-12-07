import styles from './axios-proxy.module.scss';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthNGetToken } from '@porrtal/r-user';

interface ConfigurationParameters {
  apiKey?:
    | string
    | Promise<string>
    | ((name: string) => string)
    | ((name: string) => Promise<string>);
  username?: string;
  password?: string;
  accessToken?:
    | string
    | Promise<string>
    | ((name?: string, scopes?: string[]) => string)
    | ((name?: string, scopes?: string[]) => Promise<string>);
  basePath?: string;
  baseOptions?: any;
  formDataCtor?: new () => any;
}

type ApiFactory = (configuration: ConfigurationParameters) => any;
interface SimpleLibraryEntry {
  scopes: string[];
  configuration: ConfigurationParameters;
  apiClasses: ((configuration: ConfigurationParameters) => any)[];
}

interface LibraryEntry {
  scopes: string[];
  apiInstances: Map<ApiFactory, ApiInstanceWrapper>;
  configuration: ConfigurationParameters;
}

interface ApiInstanceWrapper {
  apiInstance: any | undefined;
  configuration: ConfigurationParameters;
}

function registerLibraryEntries(
  existingEntries: LibraryEntry[],
  newSimpleEntries: SimpleLibraryEntry[]
): LibraryEntry[] {
  newSimpleEntries.forEach((newEntry) => {
    const existingEntry = existingEntries.find(
      (entry) =>
        entry.configuration.basePath === newEntry.configuration.basePath &&
        arrayEquals(entry.scopes, newEntry.scopes)
    );

    if (existingEntry) {
      newEntry.apiClasses.forEach((apiClass) => {
        if (!existingEntry.apiInstances.has(apiClass)) {
          existingEntry.apiInstances.set(apiClass, {
            apiInstance: undefined,
            configuration: newEntry.configuration,
          });
        }
      });
    } else {
      const newLibraryEntry: LibraryEntry = {
        configuration: newEntry.configuration,
        scopes: newEntry.scopes,
        apiInstances: new Map(
          newEntry.apiClasses.map((apiClass) => [
            apiClass,
            { apiInstance: undefined, configuration: newEntry.configuration },
          ])
        ),
      };
      existingEntries.push(newLibraryEntry);
    }
  });

  return existingEntries;
}

function generateReport(libraryEntries: LibraryEntry[]): string {
  let report = 'Registered Library Entries:\n';

  libraryEntries.forEach((entry, index) => {
    report += `Entry ${index + 1}:\n`;
    report += `  Base URL: ${entry.configuration.basePath}\n`;
    report += `  Scopes: ${entry.scopes.join(', ')}\n`;
    report += `  Registered APIs: ${
      Array.from(entry.apiInstances.keys())
        .map((apiClass) => apiClass.name)
        .join(', ') || 'None'
    }\n\n`;
  });

  return report;
}

// make a context for the existing library entries
const libraryEntriesContext = createContext<LibraryEntry[]>([]);

/* eslint-disable-next-line */
export interface AxiosProxyProps {
  config: SimpleLibraryEntry[];
  children: React.ReactNode;
}

export function AxiosProxy(props: AxiosProxyProps) {
  const [libraryEntries, setLibraryEntries] = useState<LibraryEntry[]>([]);

  // register the library entries
  useEffect(() => {
    if (props.config && props.config.length > 0) {
      setLibraryEntries((existingEntries) =>
        registerLibraryEntries(existingEntries, props.config)
      );
    }
  }, [props.config]);

  return (
    // configure the library entries context
    <libraryEntriesContext.Provider value={libraryEntries}>
      {props.children}
    </libraryEntriesContext.Provider>
  );
}

// function to return an api class instance for a particaular api class
export function useAxiosApi(apiClass: ApiFactory): any {
  const getToken = useAuthNGetToken();
  const libraryEntries = useContext(libraryEntriesContext);

  // find the library entry that has the api class
  const libraryEntry = libraryEntries.find((entry) =>
    entry.apiInstances.has(apiClass)
  );

  if (!libraryEntry) {
    throw new Error(
      `No library entry found for api class ${apiClass.name}. Did you forget to register it?`
    );
  }

  // get the wrapper for the api class
  const apiInstanceWrapper = libraryEntry.apiInstances.get(apiClass);

  if (!apiInstanceWrapper) {
    throw new Error(
      `No api instance wrapper found for api class ${apiClass.name}. This is likely a bug in the library.`
    );
  }

  // get the axios instance for the api class
  let apiInstance = apiInstanceWrapper.apiInstance;

  if (!apiInstance) {
    const configuration: ConfigurationParameters = {
      basePath: libraryEntry.configuration.basePath,
      accessToken: async () => {
        return await getToken(libraryEntry.scopes).then((token) => token ?? '');
      },
    };

    apiInstanceWrapper.apiInstance = apiClass(configuration);

    console.log(
      `Created new instance of ${apiClass.name} for base url ${libraryEntry.configuration.basePath}`
    );
  }

  // return an instance of the api class
  return apiInstanceWrapper.apiInstance;
}

export function useAxiosProxy() {
  const libraryEntries = useContext(libraryEntriesContext);

  return {
    registerLibraryEntries: (newEntries: SimpleLibraryEntry[]) =>
      registerLibraryEntries(libraryEntries, newEntries),
    generateReport: () => generateReport(libraryEntries),
  };
}

function arrayEquals(a: string[], b: string[]): boolean {
  // Sort both arrays before comparison
  const sortedA = [...a].sort();
  const sortedB = [...b].sort();

  if (sortedA.length !== sortedB.length) {
    return false;
  }

  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }

  return true;
}
