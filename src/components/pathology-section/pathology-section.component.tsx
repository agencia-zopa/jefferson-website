'use client';

import 'swiper/scss';

import ArrowRight from '@public/arrow-right.svg';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { pathologies } from '@/app/patologias/[name]/pathologies';
import { SectionIDs } from '@/app/section-ids';
import { PathologyCard } from '@/components/pathology-card/pathology-card.component';
import { SectionTitle } from '@/components/section-title/section-title.component';

import styles from './pathology-section.module.scss';

export function PathologySection() {
  return (
    <div className={styles.container} id={SectionIDs.PATHOLOGIES}>
      <SectionTitle>Patologias</SectionTitle>
      <Swiper
        className={styles.swiper}
        slidesPerView={'auto'}
        spaceBetween={30}
      >
        {/* FIXME: This is not well defined, we need to play around with slidesPerView and the width of styles.slide to find the optimal size https://swiperjs.com/demos#slides-per-view-auto */}
        {pathologies.map((pathology, idx) => (
          <SwiperSlide key={idx} className={styles.slide}>
            <PathologyCard
              title={pathology.name}
              text={pathology.shortDescription}
              imageUrl={pathology.imageUrl}
              fullArticleUrl={pathology.urls[0]}
              outline={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <a className={styles.seeAll} href={'/patologias'}>
        Veja todas <Image src={ArrowRight} alt={''} />
      </a>
    </div>
  );
}
