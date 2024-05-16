import styles from "./pathology-card.module.scss";
import Image from "next/image";
import bookIcon from "@public/book-open-02.svg";
import { GenericButton } from "../generic-button/generic-button.component";

interface CardProps {
  title: string;
  text: string;
  imagePath: string;
}

export function PathologyCard({ title, text, imagePath }: CardProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${imagePath})` }}
      ></div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <GenericButton
        text={"Ver Artigo"}
        backgroundColor={"#0476F7"}
        textColor={"#0476F7"}
        iconSrc={bookIcon}
        outline={true}
        className={styles.button}
      />
    </div>
  );
}
