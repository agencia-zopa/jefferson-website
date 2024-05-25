'use client';

import 'swiper/scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionTitle } from '@/components/section-title/section-title.component';

import { Card, CardProps } from '../card/card.component';
import styles from './pathology-section.module.scss';

const cards: CardProps[] = [
  {
    title: 'Manobras de reposicionamento para VPPB',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?',
    imagePath: '/IMG_2646.jpg'
  },
  {
    title: 'Manobras de reposicionamento para VPPB',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?',
    imagePath: ''
  },
  {
    title: 'Manobras de reposicionamento para VPPB',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?',
    imagePath: ''
  },
  {
    title: 'Manobras de reposicionamento para VPPB',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?',
    imagePath: ''
  },
  {
    title: 'Manobras de reposicionamento para VPPB',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?',
    imagePath: ''
  },
  {
    title: 'Manobras de reposicionamento para VPPB',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat?',
    imagePath: ''
  }
];

export function PathologySection() {
  return (
    <div className={styles.container} id={'patologias'}>
      <SectionTitle>Patologias</SectionTitle>
      <Swiper
        className={styles.swiper}
        slidesPerView={'auto'}
        spaceBetween={30}
      >
        {/* FIXME: This is not well defined, we need to play around with slidesPerView and the width of styles.slide to find the optimal size https://swiperjs.com/demos#slides-per-view-auto */}
        {cards.map(({ title, text, imagePath }, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <Card title={title} text={text} imagePath={imagePath} />
          </SwiperSlide>
        ))}
      </Swiper>
      <a className={styles.seeAll} href={'#'}>
        {/* FIXME: Use a SVG for the arrow */}
        Veja todas -&gt;
      </a>
    </div>
  );
}
