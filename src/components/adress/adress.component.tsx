import Image from "next/image";
import styles from "./adress.module.scss";
import locationIcon from "@public/location-icon.svg";

interface AdressProps {
  title: string;
  description: string;
}

export function Adress({ title, description }: AdressProps) {
  return (
    <div className={styles.container}>
      <div className={styles.adressTitleLine}>
        <Image src={locationIcon} alt={"Ícone de localização"} />
        <span className={styles.adressTitle}>{title}</span>
      </div>
      <span className={styles.adressDescription}>{description}</span>
    </div>
  );
}
