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
        <span className={styles.title}>Dr. Jefferson André Bauer</span>
        <span className={styles.description}>
          Otorrinolaringologista com mais de 5 anos de experiência especializado
          em Otologia Cirúrgica, Otologia Clínica, Otoneurologia.
        </span>
        <div className={styles.buttons}>
          <ScheduleAppointment />
          <FrequentlyAskedQuestions />
        </div>
      </div>
      <Image
        src={mouseIcon}
        alt={'Ícone de mouse'}
        className={`${styles.mouseIcon} ${isScrolled ? styles.inverted : ''}`}
      />
    </div>
  );
}
