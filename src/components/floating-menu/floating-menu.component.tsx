import closeIcon from '@public/close.svg';
import menuIcon from '@public/menu-icon.svg';
import Image from 'next/image';
import { useState } from 'react';

import { LogoWithDetails } from '@/components/logo-with-details/logo-with-details.component';
import {NavItems, NavItemsProps} from '@/components/nav-items/nav-items.component';
import { useSpecificBreakpoint } from '@/hooks/use-breakpoints';
import { useScrollDetection } from '@/hooks/use-scroll-detection';

import styles from './floating-menu.module.scss';
import {scrollToId} from "@/hooks/scroll-to-id";

export function FloatingMenu() {
  const isScrolled = useScrollDetection(10);
  const [modalVisible, setModalVisible] = useState(false);

  const isMobile = useSpecificBreakpoint('lte', 900);

  const onClickLink: NavItemsProps['onClick'] = (e, path, id) => {
    setModalVisible(false);
    if (id !== undefined) {
      scrollToId(e, path,id)
    }
  }

  if (!isMobile) {
    return null;
  }

  return (
    <>
      <button
        className={`${styles.button} ${isScrolled ? styles.isScrolled : ''} `}
        onClick={() => setModalVisible(true)}
      >
        <Image src={menuIcon} alt={'Ícone de menu'} />
      </button>
      <div
        className={`${styles.menuModal} ${modalVisible ? styles.visible : ''}`}
      >
        <button
          className={styles.closeButton}
          onClick={() => setModalVisible(false)}
        >
          <Image src={closeIcon} alt={'Icone de fechar'} />
        </button>
        <LogoWithDetails darkVersion={true} />
        <div className={styles.spacer} />
        <NavItems itemClassName={styles.link} onClick={onClickLink} />
      </div>
    </>
  );
}
