import commentIcon from '@public/comment-01.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { GenericButton } from '@/components/generic-button/generic-button.component';

import styles from './specialty-section.module.scss';

export interface SpecialtySectionProps {
  imageSrc: string | StaticImport;
  imageAlt: string;
  title: string;
  articleHref: string;
  flipped?: boolean;
}

export function SpecialtySection({
  imageSrc,
  imageAlt,
  title,
  children,
  flipped
}: PropsWithChildren<SpecialtySectionProps>) {
  return (
    <div
      className={`${styles.specialtySection} ${flipped ? styles.flipped : ''}`}
    >
      <Image className={styles.backgroundImage} src={imageSrc} alt={imageAlt} />
      <div className={styles.backgroundImageFade} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{children}</p>
        <div className={styles.buttons}>
          <GenericButton
            text={'Agendar Consulta'}
            iconSrc={commentIcon}
            textColor={'white'}
            backgroundColor={'#0476F7'}
          />
          <GenericButton
            text={'Ler Artigo'}
            iconSrc={commentIcon}
            textColor={'#0476F7'}
            backgroundColor={'white'}
          />
        </div>
      </div>
    </div>
  );
}
