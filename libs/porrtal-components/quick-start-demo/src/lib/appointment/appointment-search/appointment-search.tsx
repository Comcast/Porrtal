import styles from './appointment-search.module.scss';
import { useDebouncedSearchText } from '@porrtal/shell';
import { ViewComponentProps } from '@porrtal/api';

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
