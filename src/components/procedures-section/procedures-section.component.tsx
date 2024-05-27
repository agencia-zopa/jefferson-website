import exampleImage from '@public/IMG_2621.jpg';

import { ProcedureItem } from '@/components/procedure-item/procedure-item.component';
import { SectionTitle } from '@/components/section-title/section-title.component';

import styles from './procedures-section.module.scss';

export function ProceduresSection() {
  return (
    <div className={styles.proceduresSection}>
      <SectionTitle>Procedimentos</SectionTitle>
      <div className={styles.proceduresList}>
        <ProcedureItem
          title={'Lorem ipsum'}
          subtitle={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imageSrc={exampleImage}
        />
        <ProcedureItem
          title={'Lorem ipsum'}
          subtitle={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imageSrc={exampleImage}
        />
        <ProcedureItem
          title={'Lorem ipsum'}
          subtitle={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imageSrc={exampleImage}
        />
        <ProcedureItem
          title={'Lorem ipsum'}
          subtitle={
            'Lorem ipsum dolor sit amet consectetur. Viverra nec viverra tortor risus in orci. Egestas pulvinar faucibus potenti nunc non tortor velit.'
          }
          imageSrc={exampleImage}
        />
      </div>
    </div>
  );
}
