import styles from './section-title.module.scss';
import {PropsWithChildren} from "react";


export function SectionTitle({ children }: PropsWithChildren) {
  return <span className={styles.title}>{children}</span>

}
