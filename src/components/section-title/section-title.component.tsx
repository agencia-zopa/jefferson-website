import { PropsWithChildren } from 'react';

import styles from './section-title.module.scss';

export function SectionTitle({ children }: PropsWithChildren) {
  return <span className={styles.title}>{children}</span>;
}
