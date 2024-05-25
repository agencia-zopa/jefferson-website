import { pathologies } from '@/app/patologias/[name]/pathologies';
import { PathologyCard } from '@/components/pathology-card/pathology-card.component';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.sectionTitle}>
        <span>Patologias</span>
      </div>
      <div className={styles.cardsContainer}>
        {pathologies.map((pathology, index) => (
          <PathologyCard
            key={index}
            title={pathology.name}
            text={pathology.shortDescription}
            fullArticleUrl={`/patologias/${pathology.urls[0]}`}
            imageUrl={pathology.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
