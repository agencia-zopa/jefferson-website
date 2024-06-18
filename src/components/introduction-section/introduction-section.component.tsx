import DoctorImage from '@public/IMG_2662.jpg';
import Image from 'next/image';
import React from 'react';

import { SectionIDs } from '@/app/section-ids';

import styles from './introduction-section.module.scss';

export function PresentationSection() {
  return (
    <div className={styles.container} id={SectionIDs.INTRODUCTION}>
      <Image src={DoctorImage} alt={''} />
      <div className={styles.content}>
        <h1>Dr. Jefferson André Bauer</h1>
        <div className={styles.divider} />
        <p>
          Otorrinolaringologista atuando desde 2015. Atendimento de doenças do
          nariz, garganta e ouvidos. Especializado em Otologia Cirúrgica,
          Otologia Clínica e Otoneurologia.
        </p>
        <div className={styles.divider} />
        <h1>Formação</h1>

        <ul>
          <li>
            - Mestrado em Cirurgia, Universidade Federal do Rio Grande do Sul,
            2016
          </li>
          <li>
            - Curso de Cirurgia Otológica em Béziers/França – 17th International
            Otology Course – Causse Ear Clinic (2015)
          </li>
          <li>
            - Fellowship Otologia Clínica e Cirúrgica, Hospital Mãe de Deus,
            2015
          </li>
          <li>
            - Graduação em Medicina, Universidade Federal do Rio Grande do Sul,
            2011
          </li>
          <li>
            - Residência Médica em Otorrinolaringologia, Hospital de Clínicas de
            Porto Alegre, 2014
          </li>
        </ul>
      </div>
    </div>
  );
}
