import instagram from '@public/instagram.svg';
import linkedin from '@public/linkedin.svg';
import triusLogo from '@public/trius-logo.png';
import whatsapp from '@public/whatsapp.svg';
import x from '@public/x.svg';
import Image from 'next/image';

import { LogoWithDetails } from '@/components/logo-with-details/logo-with-details.component';

import styles from './footer.module.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
      <LogoWithDetails darkVersion={true} />
      <hr />
      <a href={'https://trius.com.br'} className={styles.madeBy}>
        <span>Desenvolvido por</span>
        <Image src={triusLogo} alt={'Logo da Trius'} />
      </a>
    </div>
  );
}
