'use client';
import mouseIcon from '@public/mouse.svg';
import Image from 'next/image';

import { FrequentlyAskedQuestions } from '@/components/faq/faq.component';
import { ScheduleAppointment } from '@/components/schedule-appointment/schedule-appointment.component';
import { useScrollDetection } from '@/hooks/use-scroll-detection';

import styles from './initial-section.module.scss';

export function InitialSection() {
  const isScrolled = useScrollDetection(100);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>
          Dr. Jefferson <br />
          André Bauer
        </span>
        <span className={styles.description}>
          Otorrinolaringologista atuando desde 2015. Atendimento de doenças do
          nariz, garganta e ouvidos. Especializado em Otologia Cirurgica,
          Otologia Clinica e Otoneurologia.
        </span>
        <div className={styles.buttons}>
          <ScheduleAppointment />
          <FrequentlyAskedQuestions />
        </div>
      </div>
      <Image
        priority={true}
        src={mouseIcon}
        alt={'Ícone de mouse'}
        className={`${styles.mouseIcon} ${isScrolled ? styles.inverted : ''}`}
        sizes={'100vw'}
      />
    </div>
  );
}
