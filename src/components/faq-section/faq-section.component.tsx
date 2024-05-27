import commentIcon from '@public/comment-01.svg';

import { SectionIDs } from '@/app/section-ids';
import { FaqItem } from '@/components/faq-item/faq-item.component';
import { GenericButton } from '@/components/generic-button/generic-button.component';
import { SectionTitle } from '@/components/section-title/section-title.component';

import styles from './faq-section.module.scss';

export function FaqSection() {
  return (
    <div className={styles.faqSection} id={SectionIDs.FAQ}>
      <SectionTitle>Perguntas Frequentes</SectionTitle>
      <div className={styles.faqItemsList}>
        <FaqItem
          title={'Quais são as principais especialidades de Jefferson André Bauer?'}
          text={
            'Jefferson André Bauer é otorrino. Te mostramos alguns dos serviços oferecidos pelo especialista graças à sua trajetória e vasta experiência: Estapedectomia, Mastoidectomia Radical, Nasofibrolaringoscopia, Microcirurgia Otologica, Primeira consulta Otorrinolaringologia, Timpanoplastia (Outros Tipos Unilateral), Videolaringoscopia, Videonasofaringoscopia, Implante Coclear, Consulta Otorrinolaringologia.'
          }
        />
        <FaqItem title="Posso passar por atendimento online com Jefferson André Bauer, sem ter que ir até o consultório?" text="Não, no momento Jefferson André Bauer não oferece atendimento online." />
        <FaqItem title="Quais métodos de pagamento são aceitos?" text="Dinheiro, Cartão de Débito, Transferência Bancária, Cartão de Crédito." />
        <FaqItem title="Em quais idiomas Jefferson André Bauer atende?" text="Em Espanhol, Inglês, Português." />
        <FaqItem title="Quais são os convênios aceitos?" text="Estes são alguns dos convênios aceitos: Amil, ASSEFAZ (Ministério da Fazenda), Bradesco Saúde, Golden Cross, Mediservice, Omint, AMS Petrobrás, Saúde Caixa (Caixa Econômica Federal). Verifique a lista completa de convênios aceitos." />
      </div>
      <div className={styles.moreQuestions}>
        <h1>Ficou com alguma dúvida?</h1>
        <p>Mande uma mensagem.</p>
        <GenericButton
          className={styles.cta}
          text={'Entrar em Contato'}
          backgroundColor={'#0476F7'}
          textColor={'white'}
          iconSrc={commentIcon}
          href={'/contato'}
        />
      </div>
    </div>
  );
}
