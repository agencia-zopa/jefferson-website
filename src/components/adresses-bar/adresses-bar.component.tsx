import styles from "./adresses-bar.module.scss";
import Image from "next/image";
import locationIcon from "@public/location-icon.svg";

export function AdressesBar() {
  return (
    <div className={styles.container}>
      <div className={styles.adress}>
        <div className={styles.adressTitleLine}>
          <Image src={locationIcon} alt={"Ícone de localização"} />
          <span className={styles.adressTitle}>Petrópolis</span>
        </div>
        <span className={styles.adressDescription}>
          Av. Cel. Lucas de Oliveira, 505 - sala 302 - Petrópolis, Porto Alegre
          - RS, 90440-011
        </span>
      </div>
    </div>
  );
}
