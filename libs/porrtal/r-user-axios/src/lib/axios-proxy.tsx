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
import styles from './axios-proxy.module.scss';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthNGetToken } from '@porrtal/r-user';
import { Configuration, ConfigurationParameters } from './configuration';

type ApiFactory = (configuration: Configuration) => any;
interface SimpleLibraryEntry {
  scopes: string[];
  configurationParameters: ConfigurationParameters;
  apiClasses: ((configuration: Configuration) => any)[];
}

interface LibraryEntry {
  scopes: string[];
  apiInstances: Map<ApiFactory, ApiInstanceWrapper>;
  configurationParameters: ConfigurationParameters;
}

interface ApiInstanceWrapper {
  apiInstance: any | undefined;
  configurationParameters: ConfigurationParameters;
}

function registerLibraryEntries(
  existingEntries: LibraryEntry[],
  newSimpleEntries: SimpleLibraryEntry[]
): LibraryEntry[] {
  newSimpleEntries.forEach((newEntry) => {
    const existingEntry = existingEntries.find(
      (entry) =>
        entry.configurationParameters.basePath === newEntry.configurationParameters.basePath &&
        arrayEquals(entry.scopes, newEntry.scopes)
    );

    if (existingEntry) {
      newEntry.apiClasses.forEach((apiClass) => {
        if (!existingEntry.apiInstances.has(apiClass)) {
          existingEntry.apiInstances.set(apiClass, {
            apiInstance: undefined,
            configurationParameters: newEntry.configurationParameters,
          });
        }
      });
    } else {
      const newLibraryEntry: LibraryEntry = {
        configurationParameters: newEntry.configurationParameters,
        scopes: newEntry.scopes,
        apiInstances: new Map(
          newEntry.apiClasses.map((apiClass) => [
            apiClass,
            { apiInstance: undefined, configurationParameters: newEntry.configurationParameters },
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
    report += `  Base URL: ${entry.configurationParameters.basePath}\n`;
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
    const configurationParameters: ConfigurationParameters = {
      basePath: libraryEntry.configurationParameters.basePath,
      accessToken: async () => {
        return await getToken(libraryEntry.scopes).then((token) => token ?? '');
      },
    };

    apiInstanceWrapper.apiInstance = apiClass(new Configuration(configurationParameters));

    console.log(
      `Created new instance of ${apiClass.name} for base url ${libraryEntry.configurationParameters.basePath}`
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
