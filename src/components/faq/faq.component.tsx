import bookIcon from '@public/book-open-02.svg';
import Image from 'next/image';

import { scrollToId } from '@/hooks/scroll-to-id';

import styles from './faq.module.scss';

export function FrequentlyAskedQuestions() {
  return (
    <a
      className={styles.buttonContainer}
      href={'#faq'}
      onClick={e => scrollToId(e, '/', 'duvidas')}
    >
      <p className={styles.buttonText}>Dúvidas Frequentes</p>{' '}
      <Image
        className={styles.buttonIcon}
        src={bookIcon}
        alt={'Ícone de um livro aberto'}
      />
    </a>
  );
}
