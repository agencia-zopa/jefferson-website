import bookIcon from '@public/book-open-02.svg';

import { GenericButton } from '../generic-button/generic-button.component';
import styles from './pathology-card.module.scss';

interface CardProps {
  title: string;
  text: string;
  imageUrl: string;
  fullArticleUrl: string;
}

export function PathologyCard({
  title,
  text,
  imageUrl,
  fullArticleUrl
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
        textColor={'#0476F7'}
        iconSrc={bookIcon}
        outline={true}
        className={styles.button}
      />
    </div>
  );
}
