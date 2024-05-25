import otoneuroImage from '@public/IMG_2621.jpg';
import otologiaImage from '@public/IMG_2636.jpg';
import React from 'react';

import { AddressBar } from '@/components/address-bar/adresses-bar.component';
import { ConveniosSection } from '@/components/convenios-section/convenios-section.component';
import { FaqSection } from '@/components/faq-section/faq-section.component';
import { InitialSection } from '@/components/initial-section/initial-section.component';
import { PathologySection } from '@/components/pathology-section/pathology-section.component';
import { PresentationSection } from '@/components/presentation-section/presentation-section.component';
import { ProceduresSection } from '@/components/procedures-section/procedures-section.component';
import { ReviewsSection } from '@/components/reviews-section/reviews-section.component';
import { ScheduleAppointmentSection } from '@/components/schedule-appointment-section/schedule-appointment-section.component';
import { SpecialtySection } from '@/components/specialty-section/specialty-section.component';

export default function Home() {
  return (
    <>
      <AddressBar />
      <InitialSection />
      <PresentationSection />
      <SpecialtySection
        imageSrc={otologiaImage}
        imageAlt={'Dr. Jefferson segurando a cabeça de uma paciente'}
        title={'Otologia'}
        articleHref={'#'}
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
        articleHref={'#'}
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
