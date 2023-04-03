import styles from './porrtal-r-user-mock.module.scss';

/* eslint-disable-next-line */
export interface PorrtalRUserMockProps {}

export function PorrtalRUserMock(props: PorrtalRUserMockProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PorrtalRUserMock!</h1>
    </div>
  );
}

export default PorrtalRUserMock;
