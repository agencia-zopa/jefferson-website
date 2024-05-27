import FiveStartsImage from '@public/stars.svg';
import { Property } from 'csstype';
import Image from 'next/image';

import styles from './review.module.scss';

export interface ReviewProps {
  name: string;
  date: string;
  body: string;
  /**
   * Color for the background of the profile picture
   */
  backgroundColor: Property.BackgroundColor;
}

export function Review({ name, date, body, backgroundColor }: ReviewProps) {
  return (
    <div className={styles.container}>
      <div className={styles.profilePic} style={{ backgroundColor }}>
        {name[0].toUpperCase()}
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>{name}</h1>
        <div className={styles.rating}>
          <Image src={FiveStartsImage} alt={'5 estrelas'} />
          <span>{date}</span>
        </div>
        <p className={styles.body}>{body}</p>
      </div>
    </div>
  );
}
