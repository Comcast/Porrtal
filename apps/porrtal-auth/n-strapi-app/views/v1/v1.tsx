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
import { useAuthNGetToken } from '@porrtal/r-user';
import styles from './v1.module.scss';
import { useEffect, useState } from 'react';
import { PorrtalRoleApiFactory } from '@porrtal-proxy/r-my-project2';
import { useAxiosApi, useAxiosProxy } from '@porrtal/r-user-axios';

/* eslint-disable-next-line */
export interface V1Props {}

export function V1(props: V1Props) {
  const getToken = useAuthNGetToken();
  const porrtalRoleApi = useAxiosApi(PorrtalRoleApiFactory);
  const axiosProxy = useAxiosProxy();

  // add an effect to initialize the axios proxy (not used, initialized in app)
  useEffect(() => {
    axiosProxy.registerLibraryEntries([
      {
        scopes: ['read:stuff'],
        configurationParameters: { basePath: 'http://localhost:1337/api' },
        apiClasses: [PorrtalRoleApiFactory],
      },
    ]);
  }, []);

  // add a state variable to hold the token
  const [token, setToken] = useState<string | undefined>(undefined);
  const [roles, setRoles] = useState<string[] | undefined>(undefined);

  // add an effect to get the token into a state variable
  useEffect(() => {
    getToken(['read:stuff'])
      .then((token) => {
        setToken(token);
      })
      .catch((err) => {
        console.error(err);
        setToken(JSON.stringify(err));
      });
  }, []);

  // add an effect to get the roles into a state variable
  useEffect(() => {
    porrtalRoleApi
      .getPorrtalRoles()
      .then((data) => {
        setRoles(data.data.data.map((role) => role.attributes.name));
      })
      .catch((err) => {
        console.error(err);
        setRoles([JSON.stringify(err)]);
      });
  }, []);

  return (
    <div className={styles['container']}>
      <h1>Welcome to V1!</h1>
      <hr />
      <p>{token ? `Your token is ${token}` : 'You are not logged in'}</p>
      <p>
        {roles
          ? roles.length > 0
            ? `Your roles are ${roles.join(', ')}`
            : 'You have no roles'
          : 'loading roles...'}
      </p>
      <hr />
      <p>
        {axiosProxy
          .generateReport()
          .split('\n')
          .map((line, index) => {
            const match = line.match(/^(\s*)/);
            const indent = match ? match[0].length : 0;
            return (
              <span style={{ marginLeft: `${indent*8}px`}} key={index}>
                {line}
                <br />
              </span>
            );
          })}
      </p>
    </div>
  );
}

export default V1;
