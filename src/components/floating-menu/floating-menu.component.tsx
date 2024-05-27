
import styles from './floating-menu.module.scss'

import menuIcon from '@public/menu-icon.svg'
import Image from "next/image";
import {useScrollDetection} from "@/hooks/use-scroll-detection";

export function FloatingMenu() {
  const isScrolled = useScrollDetection(10);

  return <button className={`${styles.button} ${isScrolled ? styles.isScrolled : ''}`}>
    <Image src={menuIcon} alt="Ícone de menu" />
  </button>
}
