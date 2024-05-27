import ArrowRight from '@public/arrow-right.svg';
import locationIcon from '@public/location-icon.svg';
import Image from 'next/image';

import styles from './mobile-adresses-bar.module.scss';

export function MobileAddressBar() {
  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <div>
          <Image src={locationIcon} alt={''} />
          <span>Ver localizações</span>
        </div>
        <Image src={ArrowRight} alt={''} />
      </div>
    </div>
  );
}
