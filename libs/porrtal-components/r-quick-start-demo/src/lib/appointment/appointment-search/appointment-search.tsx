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
import styles from './appointment-search.module.scss';
import { useDebouncedSearchText } from '@porrtal/r-shell';
import { ViewComponentProps } from '@porrtal/r-api';

export function AppointmentSearch(props: ViewComponentProps) {
  const searchText = useDebouncedSearchText();
  return (
    <div className={styles['container']}>
      <h3 className={styles['title']}>Appointment Search: {searchText}</h3>
      <div className={styles['data-container']}>
        Matching Appointments go Here...
      </div>
    </div>
  );
}

export default AppointmentSearch;
