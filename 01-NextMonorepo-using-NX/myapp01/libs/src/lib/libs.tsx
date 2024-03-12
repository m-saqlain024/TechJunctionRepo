import styles from './libs.module.css';

/* eslint-disable-next-line */
export interface LibsProps {}

export function Libs(props: LibsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Libs!</h1>
    </div>
  );
}

export default Libs;
