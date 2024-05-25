import Image, { ImageProps } from 'next/image';

import styles from './procedure-item.module.scss';

export interface ProcedureItemProps {
  imageSrc: ImageProps['src'];
  title: string;
  subtitle: string;
}

export function ProcedureItem({
  imageSrc,
  title,
  subtitle
}: ProcedureItemProps) {
  return (
    <div className={styles.row}>
      <Image src={imageSrc} alt={''} />
      <div className={styles.column}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
