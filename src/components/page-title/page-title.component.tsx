import arrow from '@public/arrow-left-02-round.svg';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import styles from './page-title.module.scss';

export function PageTitle({ children }: PropsWithChildren) {
  return (
    <h1 className={styles.pageTitle}>
      <a href={'/'}>
        <Image src={arrow} alt={'Icone de seta de voltar'} />
      </a>
      {children}
    </h1>
  );
}
