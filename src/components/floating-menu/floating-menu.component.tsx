
import styles from './floating-menu.module.scss'

import menuIcon from '@public/menu-icon.svg'
import closeIcon from '@public/close.svg'
import Image from "next/image";
import {useScrollDetection} from "@/hooks/use-scroll-detection";
import {NavItems} from "@/components/nav-items/nav-items.component";
import {LogoWithDetails} from "@/components/logo-with-details/logo-with-details.component";
import {useState} from "react";

export function FloatingMenu() {
  const isScrolled = useScrollDetection(10);
  const [modalVisible, setModalVisible] = useState(false);

  return <>
    <button className={`${styles.button} ${isScrolled ? styles.isScrolled : ''} `} onClick={() => setModalVisible(true)}>
      <Image src={menuIcon} alt="Ícone de menu" />
    </button>
    <div className={`${styles.menuModal} ${modalVisible ? styles.visible : ''}`}>
      <button className={styles.closeButton} onClick={() => setModalVisible(false)}>
        <Image src={closeIcon} alt="Icone de fechar" />
      </button>
      <LogoWithDetails darkVersion={true} />
      <div className={styles.spacer} />
      <NavItems itemClassName={styles.link} />
    </div>
  </>
}
