import bookIcon from '@public/book-open-02.svg';

import { GenericButton } from '../generic-button/generic-button.component';
import styles from './pathology-card.module.scss';

interface CardProps {
  title: string;
  text: string;
  imageUrl: string;
  fullArticleUrl: string;
  outline?: boolean;
}

export function PathologyCard({
  title,
  text,
  imageUrl,
  fullArticleUrl,
  outline = true
}: CardProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <GenericButton
        text={'Ver Artigo'}
        href={fullArticleUrl}
        backgroundColor={'#0476F7'}
        textColor={outline ? '#0476F7' : 'white'}
        iconSrc={bookIcon}
        outline={outline}
        className={styles.button}
      />
    </div>
  );
}
