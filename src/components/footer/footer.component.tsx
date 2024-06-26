import instagram from '@public/instagram.svg';
import linkedin from '@public/linkedin.svg';
import triusLogo from '@public/trius-logo.png';
import whatsapp from '@public/whatsapp.svg';
import x from '@public/x.svg';
import zopaLogo from '@public/zopa_logo.png';
import Image from 'next/image';

import { LogoWithDetails } from '@/components/logo-with-details/logo-with-details.component';

import styles from './footer.module.scss';

export function Footer() {
  return (
    <div className={styles.footer}>
      <LogoWithDetails darkVersion={true} />
      <hr />
      <div className={styles.madeBy}>
        <a href={'https://trius.com.br'}>
          <span>Desenvolvido por</span>
          <Image src={triusLogo} alt={'Logo da Trius'} />
        </a>
        <a href={'https://agenciazopa.com.br/'}>
          <span>e</span>
          <span className={styles.white}>Agência Zopa</span>
          <Image src={zopaLogo} alt={'Logo da Agência Zopa'} height={30} />
        </a>
      </div>
    </div>
  );
}
