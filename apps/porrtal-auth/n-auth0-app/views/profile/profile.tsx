import styles from './profile.module.scss';
import React from 'react';

/* eslint-disable-next-line */
export interface ProfileProps {}

export function Profile(props: ProfileProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Profile!</h1>
    </div>
  );
}

export default Profile;
