import locationIcon from '@public/location-icon.svg';
import Image from 'next/image';

import styles from './adress.module.scss';

interface AddressProps {
  title: string;
  description: string;
}

export function Address({ title, description }: AddressProps) {
  return (
    <div className={styles.container}>
      <div className={styles.addressTitleLine}>
        <Image src={locationIcon} alt={'Ícone de localização'} />
        <span className={styles.addressTitle}>{title}</span>
      </div>
      <span className={styles.addressDescription}>{description}</span>
    </div>
  );
}
