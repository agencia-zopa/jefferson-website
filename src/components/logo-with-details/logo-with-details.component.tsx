import logoClinica from '@public/logo_clinica_otorrino-4.png';
import Image from 'next/image';

import styles from './logo-with-details.module.scss';

export interface LogoWithDetailsProps {
  darkVersion?: boolean;
  hideDetails?: boolean;
}

export function LogoWithDetails({
  darkVersion = false,
  hideDetails = false
}: LogoWithDetailsProps) {
  const darkModeClass = darkVersion ? styles.dark : '';

  return (
    <a className={`${styles.about} ${darkModeClass}`.trim()} href={'/'}>
      <Image src={logoClinica} alt={''} />
      <p className={styles.name}>
        Dr. Jefferson
        <br />
        André Bauer
      </p>
      {!hideDetails && (
        <>
          <div className={`${styles.pipe} ${darkModeClass}`.trim()} />
          <div className={styles.info}>
            <span>Otorrino</span>
            <span>CRM RS 35975</span>
            <span>RQE Nº: 27603</span>
          </div>
        </>
      )}
    </a>
  );
}
