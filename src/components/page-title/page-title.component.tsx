import { PropsWithChildren } from 'react';

import styles from './page-title.module.scss';

export function PageTitle({ children }: PropsWithChildren) {
  return <h1 className={styles.pageTitle}>{children}</h1>;
}
