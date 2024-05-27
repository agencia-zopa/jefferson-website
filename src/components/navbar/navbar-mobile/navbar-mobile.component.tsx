import { LogoWithDetails } from '@/components/logo-with-details/logo-with-details.component';

import styles from './navbar-mobile.module.scss';

export function NavbarMobile() {
  return (
    <div className={styles.container}>
      <LogoWithDetails hideDetails={true} />
      <button className={styles.menu}>
        <div />
        <div />
        <div />
      </button>
    </div>
  );
}
