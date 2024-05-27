'use client';

import { pathologies } from '@/app/patologias/[name]/pathologies';
import { FloatingMenu } from '@/components/floating-menu/floating-menu.component';
import { PageTitle } from '@/components/page-title/page-title.component';
import { PathologyCard } from '@/components/pathology-card/pathology-card.component';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <FloatingMenu />
      <PageTitle>Patologias</PageTitle>
      <div className={styles.cards}>
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
