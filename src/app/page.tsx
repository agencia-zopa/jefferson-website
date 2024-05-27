'use client';

import otoneuroImage from '@public/IMG_2621.jpg';
import otologiaImage from '@public/IMG_2636.jpg';
import React from 'react';

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
      {isMobile && <MobileAddressBar />}
      <PresentationSection />
      <SpecialtySection
        imageSrc={otologiaImage}
        imageAlt={'Dr. Jefferson segurando a cabeça de uma paciente'}
        title={'Otologia'}
        articleHref={'/especialidades/otologia'}
      >
        A Otologia é uma especialidade médica focada no estudo e tratamento dos
        distúrbios do ouvido e suas estruturas relacionadas. Isso inclui não
        apenas o ouvido externo e médio, mas também o ouvido interno e as
        conexões neurais que transmitem informações auditivas ao cérebro.
      </SpecialtySection>
      <SpecialtySection
        imageSrc={otoneuroImage}
        imageAlt={'Dr. Jefferson examinando uma paciente'}
        title={'Otoneurologia'}
        articleHref={'/especialidades/otoneurologia'}
        flipped={true}
      >
        A Otoneurologia é uma subespecialidade médica que se concentra no estudo
        e tratamento dos distúrbios relacionados ao ouvido interno e ao sistema
        nervoso vestibular, responsável pelo equilíbrio e pela orientação
        espacial. Ela combina os campos da otologia (estudo do ouvido) e da
        neurologia (estudo do sistema nervoso) para abordar condições que afetam
        tanto a audição quanto o equilíbrio.
      </SpecialtySection>
      <ProceduresSection />
      <PathologySection />
      <ReviewsSection />
      <ScheduleAppointmentSection />
      <ConveniosSection />
      <FaqSection />
    </>
  );
}
