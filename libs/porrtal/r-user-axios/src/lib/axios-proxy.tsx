import styles from './axios-proxy.module.scss';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthNGetToken } from '@porrtal/r-user';

interface SimpleLibraryEntry {
  baseUrl: string;
  scopes: string[];
  configuration: new (...args: any[]) => any;
  apiClasses: (new (...args: any[]) => any)[];
}

interface LibraryEntry {
  baseUrl: string;
  scopes: string[];
  apiInstances: Map<new (...args: any[]) => any, ApiInstanceWrapper>;
}

interface ApiInstanceWrapper {
  apiInstance: any | undefined;
  configuration: new (...args: any[]) => any;
}

function registerLibraryEntries(
  existingEntries: LibraryEntry[],
  newSimpleEntries: SimpleLibraryEntry[]
): LibraryEntry[] {
  newSimpleEntries.forEach((newEntry) => {
    const existingEntry = existingEntries.find(
      (entry) =>
        entry.baseUrl === newEntry.baseUrl &&
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
        baseUrl: newEntry.baseUrl,
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
    report += `  Base URL: ${entry.baseUrl}\n`;
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
export function useAxiosApi<T extends new (...args: any[]) => any>(
  apiClass: T
): InstanceType<T> {
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
    const configuration = new apiInstanceWrapper.configuration({
      baseUrl: libraryEntry.baseUrl,
      accessToken: async () => {
        return await getToken(libraryEntry.scopes);
      },
    });

    apiInstanceWrapper.apiInstance = new apiClass(configuration);

    console.log(
      `Created new instance of ${apiClass.name} for base url ${libraryEntry.baseUrl}`
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
