'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { pathologies, Pathology } from '@/app/patologias/[name]/pathologies';
import { FloatingMenu } from '@/components/floating-menu/floating-menu.component';
import { PresentationSection } from '@/components/introduction-section/introduction-section.component';
import { PageTitle } from '@/components/page-title/page-title.component';
import { ScheduleAppointmentSection } from '@/components/schedule-appointment-section/schedule-appointment-section.component';

import styles from './page.module.scss';

interface PathologyDetailsPageProps {
  params: { name: string };
}

export default function PathologyDetailsPage({
  params: { name }
}: PathologyDetailsPageProps) {
  const router = useRouter();
  const [pathology, setPathology] = useState<Pathology>();

  useEffect(() => {
    const isNameValid = pathologies
      .flatMap(pathology => pathology.urls)
      .includes(name);

    if (!isNameValid) {
      router.replace('/');
      return;
    }

    const pathology = pathologies.find(pathology =>
      pathology.urls.includes(name)
    )!;

    setPathology(pathology);
  }, [name, router]);

  // TODO: Improve this shit?
  if (!pathology) {
    return (
      <div>
        <FloatingMenu />
        <PageTitle>Carregando...</PageTitle>
        <div className={styles.content}>
          <h2>Carregando...</h2>
        </div>
        <ScheduleAppointmentSection />
        <PresentationSection />
      </div>
    );
  }

  return (
    <div>
      <FloatingMenu />
      <PageTitle>{pathology.name}</PageTitle>
      <div className={styles.content}>
        <h2>{pathology.name}</h2>
        <p>{pathology.fullDescription}</p>
      </div>
      <ScheduleAppointmentSection />
      <PresentationSection />
    </div>
  );
}
