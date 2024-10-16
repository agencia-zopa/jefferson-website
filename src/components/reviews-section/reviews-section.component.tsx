'use client';

import 'swiper/scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionIDs } from '@/app/section-ids';
import { Review, ReviewProps } from '@/components/review/review.component';
import { SectionTitle } from '@/components/section-title/section-title.component';
import { useSpecificBreakpoint } from '@/hooks/use-breakpoints';

import styles from './reviews-section.module.scss';

export function ReviewsSection() {
  const isMobile = useSpecificBreakpoint('lte', 900);
  return (
    <div className={styles.container} id={SectionIDs.REVIEWS}>
      <SectionTitle>Algumas avaliações</SectionTitle>
      {isMobile && (
        <Swiper
          className={styles.swiper}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={25}
          wrapperClass={styles.swiperWrapper}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <Review {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {!isMobile && (
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <Review key={index} {...review} />
          ))}
        </div>
      )}
    </div>
  );
}

const reviews: ReviewProps[] = [
  {
    name: 'Cacá Prezzi',
    date: 'Junho de 2021',
    body: 'Dr Jefferson é muito atencioso, esclarece todas duvidas e um ótimo profissional. Agendamento super rápido e a secretaria uma querida! Volto sempre que preciso.',
    backgroundColor: '#0085FF'
  },
  {
    name: 'Leticia Leite',
    date: 'Maio de 2021',
    body: 'Dr. Jefferson é um profissional excelente. Além de ser super simpático, ele é atencioso e sempre muito didático na explicação. Nunca saio do consultório com dúvidas.',
    backgroundColor: '#FF6858'
  },
  {
    name: 'Marcos Fischer',
    date: 'Julho de 2023',
    body: 'Qualidade técnica aliada à excelência no atendimento. Um baita profissional.',
    backgroundColor: '#CE44FF'
  },
  {
    name: 'Rebeca Barbeta',
    date: 'Abril de 2023',
    body: 'Dr é sempre muito atencioso e delicado com ela. Indico seu trabalho de olhos fechados. Tem muito jeito com crianças. Parabéns.',
    backgroundColor: '#FFD338'
  },
  {
    name: 'Fernanda Queiroz',
    date: 'Dezembro de 2022',
    body: 'Médico muito atencioso e paciente, explica muito bem o diagnóstico. Tratamento eficaz. Consultorio impecável.',
    backgroundColor: '#0085FF'
  },
  {
    name: 'Débora Santos',
    date: 'Agosto de 2023',
    body: 'Médico atencioso com crianças, conversa calmamente com os pais, orientando sobre o diagnóstico. Extremamente competente.',
    backgroundColor: '#FF6858'
  }
];
