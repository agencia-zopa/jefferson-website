import commentIcon from '@public/comment-01.svg';
import Image from 'next/image';

import styles from './faq-item.module.scss';

export interface FaqItemProps {
  title: string;
  text: string;
}

export function FaqItem({ title, text }: FaqItemProps) {
  return (
    <div>
      <div className={styles.iconWrapper}>
        <Image src={commentIcon} alt={''} />
      </div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
