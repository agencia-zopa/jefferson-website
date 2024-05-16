import styles from './faq-section.module.scss'
import {SectionTitle} from "@/components/section-title/section-title.component";
import {GenericButton} from "@/components/generic-button/generic-button.component";
import commentIcon from '@public/comment-01.svg'
import {FaqItem} from "@/components/faq-item/faq-item.component";


export function FaqSection() {
  return <div className={styles.faqSection}>
    <SectionTitle>Perguntas Frequentes</SectionTitle>
    <div className={styles.faqItemsList}>
      <FaqItem title="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere id nunc sed rhoncus. Maecenas a congue turpis. Nulla accumsan neque in est viverra, quis varius ligula rutrum. Vestibulum laoreet lacus non sem blandit porttitor. Donec a erat id sem." />
      <FaqItem title="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere id nunc sed rhoncus. Maecenas a congue turpis. Nulla accumsan neque in est viverra, quis varius ligula rutrum. Vestibulum laoreet lacus non sem blandit porttitor. Donec a erat id sem." />
      <FaqItem title="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere id nunc sed rhoncus. Maecenas a congue turpis. Nulla accumsan neque in est viverra, quis varius ligula rutrum. Vestibulum laoreet lacus non sem blandit porttitor. Donec a erat id sem." />
      <FaqItem title="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere id nunc sed rhoncus. Maecenas a congue turpis. Nulla accumsan neque in est viverra, quis varius ligula rutrum. Vestibulum laoreet lacus non sem blandit porttitor. Donec a erat id sem." />
      <FaqItem title="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere id nunc sed rhoncus. Maecenas a congue turpis. Nulla accumsan neque in est viverra, quis varius ligula rutrum. Vestibulum laoreet lacus non sem blandit porttitor. Donec a erat id sem." />
      <FaqItem title="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere id nunc sed rhoncus. Maecenas a congue turpis. Nulla accumsan neque in est viverra, quis varius ligula rutrum. Vestibulum laoreet lacus non sem blandit porttitor. Donec a erat id sem." />
      <FaqItem title="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere id nunc sed rhoncus. Maecenas a congue turpis. Nulla accumsan neque in est viverra, quis varius ligula rutrum. Vestibulum laoreet lacus non sem blandit porttitor. Donec a erat id sem." />
      <FaqItem title="Lorem ipsum dolor sit amet" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere id nunc sed rhoncus. Maecenas a congue turpis. Nulla accumsan neque in est viverra, quis varius ligula rutrum. Vestibulum laoreet lacus non sem blandit porttitor. Donec a erat id sem." />
    </div>
    <div className={styles.moreQuestions}>
      <h1>Ficou com alguma dúvida?</h1>
      <p>Mande uma mensagem.</p>
      <GenericButton className={styles.cta} text="Entrar em Contato" backgroundColor="#0476F7" textColor="white" iconSrc={commentIcon} />
    </div>
  </div>
}
