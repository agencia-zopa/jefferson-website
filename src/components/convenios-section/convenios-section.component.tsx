import convenio1 from '@public/convenios/1.png';
import convenio2 from '@public/convenios/2.png';
import convenio3 from '@public/convenios/3.png';
import convenio4 from '@public/convenios/4.png';
import convenio5 from '@public/convenios/5.png';
import convenio6 from '@public/convenios/6.png';
import convenio7 from '@public/convenios/7.png';
import convenio8 from '@public/convenios/8.png';
import Image from 'next/image';

import { SectionTitle } from '@/components/section-title/section-title.component';

import styles from './convenios-section.module.scss';

export function ConveniosSection() {
  return (
    <div className={styles.conveniosSection}>
      <SectionTitle>Convênios Atendidos</SectionTitle>
      <div className={styles.conveniosList}>
        <Image src={convenio1} alt={'Saúde Caixa'} />
        <Image src={convenio2} alt={'Unimed'} />
        <Image src={convenio3} alt={'Saúde PAS'} />
        <Image src={convenio4} alt={'Amil'} />
        <Image src={convenio5} alt={'Bradesco Saúde'} />
        <Image src={convenio6} alt={'SulAmérica'} />
        <Image src={convenio7} alt={'Cassi'} />
        <Image src={convenio8} alt={'Saúde Petrobrás'} />
      </div>
    </div>
  );
}
