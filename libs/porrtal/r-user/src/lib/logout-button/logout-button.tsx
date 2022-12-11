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
import useAuth from '../use-auth/use-auth';

/* eslint-disable-next-line */
export interface LogoutButtonProps {}

export function LogoutButton(props: LogoutButtonProps) {
  const auth = useAuth();

  return (
    <button onClick={() => (auth?.logout ? auth?.logout() : null)}>
      Log Out
    </button>
  );
}

export default LogoutButton;
