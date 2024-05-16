import styles from './footer.module.scss';
import {LogoWithDetails} from "@/components/logo-with-details/logo-with-details.component";
import whatsapp from '@public/whatsapp.svg'
import linkedin from '@public/linkedin.svg'
import x from '@public/x.svg'
import instagram from '@public/instagram.svg'
import Image from "next/image";
import triusLogo from '@public/trius-logo.png'

export function Footer() {
  return <div className={styles.footer}>
    <div className={styles.row}>
      <LogoWithDetails darkVersion />
      <div>
        <span className={styles.socialsTitle}>Redes Sociais</span>
        <div className={styles.socials}>
          <Image src={whatsapp} alt="Whatsapp" />
          <Image src={linkedin} alt="LinkedIn" />
          <Image src={instagram} alt="Instagram" />
          <Image src={x} alt="X" />
        </div>
      </div>
    </div>
    <hr />
    <a href="https://trius.com.br" className={styles.madeBy}>
      <span>Desenvolvido por</span>
      <Image src={triusLogo} alt="Logo da Trius" />
    </a>
  </div>
}
