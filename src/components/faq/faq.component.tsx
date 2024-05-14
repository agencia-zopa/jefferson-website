import bookIcon from "@public/book-open-02.svg";
import Image from "next/image";
import styles from "./faq.module.scss";

export function FrequentlyAskedQuestions() {
  return (
    <a className={styles.buttonContainer} href="#">
      <p className={styles.buttonText}>Dúvidas Frequentes</p>{" "}
      <Image
        className={styles.buttonIcon}
        src={bookIcon}
        alt={"Ícone de um livro aberto"}
      />
    </a>
  );
}
