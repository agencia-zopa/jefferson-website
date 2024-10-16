import commentIcon from '@public/comment-01.svg';
import DoctorImage from '@public/IMG_2650.jpg';
import Image from 'next/image';
import React from 'react';

import { GenericButton } from '@/components/generic-button/generic-button.component';

import styles from './schedule-appointment-section.module.scss';

export function ScheduleAppointmentSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Marque sua
          <br />
          Consulta!
        </h1>
        <p className={styles.text}>
          Otorrinolaringologista com mais de 5 anos de experiência especializado
          em Otologia Cirúrgica, Otologia Clínica, Otoneurologia.
        </p>
        <GenericButton
          text={'Agendar Consulta'}
          backgroundColor={'#0476F7'}
          textColor={'white'}
          iconSrc={commentIcon}
          href={process.env.NEXT_PUBLIC_WPP_LINK}
        />
      </div>
      {/* FIXME: This is not the right image */}
      <Image className={styles.image} src={DoctorImage} alt={''} />
    </div>
  );
}
