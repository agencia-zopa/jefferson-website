import commentIcon from '@public/comment-01.svg';
import Image from 'next/image';

import styles from './schedule-appointment.module.scss';

interface ScheduleAppointmentProps {
  hasShadow?: boolean;
}

export function ScheduleAppointment({ hasShadow }: ScheduleAppointmentProps) {
  return (
    <a
      className={`${styles.buttonContainer} ${hasShadow ? styles.shadow : ''}`}
      href={'#'}
    >
      <p className={styles.buttonText}>Agendar Consulta</p>
      <Image
        className={styles.buttonIcon}
        src={commentIcon}
        alt={'Ícone de comentário'}
      />
    </a>
  );
}
