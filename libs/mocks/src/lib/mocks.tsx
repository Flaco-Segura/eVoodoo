import styles from './mocks.module.css';

/* eslint-disable-next-line */
export interface MocksProps {}

export function Mocks(props: MocksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Mocks!</h1>
    </div>
  );
}

export default Mocks;
