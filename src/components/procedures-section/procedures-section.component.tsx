import { ProcedureItem } from '@/components/procedure-item/procedure-item.component';
import { procedures } from '@/components/procedures-section/procedures';
import { SectionTitle } from '@/components/section-title/section-title.component';

import styles from './procedures-section.module.scss';

export function ProceduresSection() {
  return (
    <div className={styles.proceduresSection} id="procedimentos">
      <SectionTitle>Procedimentos</SectionTitle>
      <div className={styles.proceduresList}>
        {procedures.map((procedure, index) => (
          <ProcedureItem key={index} {...procedure} />
        ))}
      </div>
    </div>
  );
}
