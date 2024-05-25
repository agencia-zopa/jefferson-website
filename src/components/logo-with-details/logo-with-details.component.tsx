import pipe from '@public/divider.png';
import logoClinica from '@public/logo_clinica_otorrino-4.png';
import Image from 'next/image';

import styles from './logo-with-details.module.scss';

export interface LogoWithDetailsProps {
  darkVersion?: boolean;
}

export function LogoWithDetails({ darkVersion }: LogoWithDetailsProps) {
  return (
    <div className={`${styles.about} ${darkVersion ? styles.dark : ''}`}>
      <Image src={logoClinica} alt={'Logotipo da cliníca'} />
      <p className={styles.doctorName}>
        Dr. Jefferson
        <br />
        André Bauer
      </p>
      <Image src={pipe} alt={''} className={styles.pipe} />
      <div className={styles.doctorInfo}>
        <p className={styles.specialization}> Otorrino </p>
        <p className={styles.crm}>CRM RS 35975</p>
        <p className={styles.rqe}>RQE Nº: 27603</p>
      </div>
    </div>
  );
}
