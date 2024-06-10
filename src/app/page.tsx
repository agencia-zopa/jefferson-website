'use client';

import otoneuroImage from '@public/IMG_2621.jpg';
import otologiaImage from '@public/IMG_2636.jpg';
import React, { CSSProperties } from 'react';

import { AddressBar } from '@/components/address-bar/adresses-bar.component';
import { ConveniosSection } from '@/components/convenios-section/convenios-section.component';
import { FaqSection } from '@/components/faq-section/faq-section.component';
import { FloatingMenu } from '@/components/floating-menu/floating-menu.component';
import { InitialSection } from '@/components/initial-section/initial-section.component';
import { PresentationSection } from '@/components/introduction-section/introduction-section.component';
import { MobileAddressBar } from '@/components/mobile-address-bar/mobile-adresses-bar.component';
import { PathologySection } from '@/components/pathology-section/pathology-section.component';
import { ProceduresSection } from '@/components/procedures-section/procedures-section.component';
import { ReviewsSection } from '@/components/reviews-section/reviews-section.component';
import { ScheduleAppointmentSection } from '@/components/schedule-appointment-section/schedule-appointment-section.component';
import { SpecialtySection } from '@/components/specialty-section/specialty-section.component';
import { useSpecificBreakpoint } from '@/hooks/use-breakpoints';

export default function Home() {
  const isMobile = useSpecificBreakpoint('lte', 900);

  return (
    <>
      {!isMobile && <AddressBar />}
      <InitialSection />
      {isMobile && <FloatingMenu />}
      <MobileAddressBar />
      <PresentationSection />
      <SpecialtySection
        imageSrc={otoneuroImage}
        flipped={true}
        imageAlt={'Dr. Jefferson segurando a cabeça de uma paciente'}
        title={'Otologia'}
        articleHref={'/especialidades/otologia'}
        imageStyle={
          {
            objectPosition: '50% 20%',
            'object-view-box': isMobile ? 'inset(0% 0% 0% 60%)' : undefined
          } as CSSProperties
        }
        extendedFade={true}
      >
        A Otologia é uma especialidade médica focada no estudo e tratamento dos
        distúrbios do ouvido e suas estruturas relacionadas. Isso inclui não
        apenas o ouvido externo e médio, mas também o ouvido interno e as
        conexões neurais que transmitem informações auditivas ao cérebro.
      </SpecialtySection>
      <SpecialtySection
        imageSrc={otologiaImage}
        imageAlt={'Dr. Jefferson examinando uma paciente'}
        title={'Otoneurologia'}
        articleHref={'/especialidades/otoneurologia'}
        imageStyle={
          {
            'object-view-box': isMobile ? 'inset(0% 10% 25% -14%)' : undefined
          } as CSSProperties
        }
      >
        A Otoneurologia é uma subespecialidade médica que se concentra no estudo
        e tratamento dos distúrbios relacionados ao ouvido interno e ao sistema
        vestibular, responsável pelo equilíbrio e pela orientação espacial. Ela
        aborda condições que afetam tanto a audição quanto o equilíbrio.
      </SpecialtySection>
      <ProceduresSection />
      <PathologySection />
      <ReviewsSection />
      <ScheduleAppointmentSection />
      <ConveniosSection />
    </>
  );
}
