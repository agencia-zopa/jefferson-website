import wpp from '@public/wpp.svg';
import Image from 'next/image';

import styles from './whatsapp-button.module.scss';

export function WhatsappButton() {
  return (
    <a href={process.env.NEXT_PUBLIC_WPP_LINK} className={styles.wppButton}>
      <Image src={wpp} alt={'WhatsApp'} />
    </a>
  );
}
