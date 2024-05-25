import bookIcon from '@public/book-open-01.svg';
import Image from 'next/image';

import styles from './card.module.scss';

export interface CardProps {
  title: string;
  text: string;
  imagePath: string;
}

export function Card({ title, text, imagePath }: CardProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${imagePath})` }}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <a className={styles.buttonContainer} href={'#'}>
        <p className={styles.buttonText}>Ver Artigo</p>
        <Image
          className={styles.buttonIcon}
          src={bookIcon}
          alt={'Ícone de comentário'}
        />
      </a>
    </div>
  );
}
